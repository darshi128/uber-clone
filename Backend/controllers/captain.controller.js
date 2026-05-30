const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator');

module.exports.registerCaptain = async (req, res) => {
//   console.log("BODY:", req.body);
   const error = validationResult(req);
   if(!error.isEmpty()){
    return res.status(400).json({errors:error.array()});
   }

   const {fullName,email,password,vehicle} = req.body;

   const isCaptainAllreadyExist = await captainModel.findOne({email});
   
   if(isCaptainAllreadyExist){
    return res.status(400).json({message:'Captain Allready exist'})
   }


   const hashedPassword = await captainModel.hashPassword(password);

   const captain = await captainService.createCaptain({
    firstName:fullName.firstName,
    lastName:fullName.lastName,
    email,
    password:hashedPassword,
    color:vehicle.color,
    plate:vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType:vehicle.vehicleType
   })

   const token = captain.generateAuthToken();

   res.status(201).json({token,captain});
};