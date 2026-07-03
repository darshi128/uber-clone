const rideModel = require('../models/ride.model')
const mapService = require('./maps.service')
const crypto = require('crypto');


async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('pickup and destinations are required')
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination)

    // Fare rates for different vehicle types
    const baseFare = {
        auto: 30,
        car: 50,
        motorcycle: 20
    }

    const perKmRate = {
        auto: 12,
        car: 15,
        motorcycle: 8
    }

    const perMinuteRate = {
        auto: 2,
        car: 3,
        motorcycle: 1.5
    }

    // Distance in km and time in minutes
    const distanceInKm = distanceTime.distance.value / 1000
    const durationInMinutes = distanceTime.duration.value / 60

    // Calculate fare for each vehicle type
    const fare = {
        auto: Math.round((baseFare.auto + (distanceInKm * perKmRate.auto) + (durationInMinutes * perMinuteRate.auto)) * 100) / 100,
        car: Math.round((baseFare.car + (distanceInKm * perKmRate.car) + (durationInMinutes * perMinuteRate.car)) * 100) / 100,
        motorcycle: Math.round((baseFare.motorcycle + (distanceInKm * perKmRate.motorcycle) + (durationInMinutes * perMinuteRate.motorcycle)) * 100) / 100
    }

    return fare
}

function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}

module.exports.createRide = async({user, pickup , destination, vehicleType})=>{
   if(!user||!pickup|| !destination ||!vehicleType){
    throw new Error ("All fields are required")
   }

   const fare = await getFare(pickup, destination);

   const ride= await rideModel.create({
    user,
    pickup,
    destination,
    otp: getOtp(6),
    fare: fare[vehicleType]
   })

   return ride 
}


