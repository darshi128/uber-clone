const axios = require("axios");

module.exports.getAddressCoordinate = async (address) => {
    try {

        const response = await axios.get(
            "https://api.geoapify.com/v1/geocode/search",
            {
                params: {
                    text: address,
                    apiKey: process.env.GEOPIFY_MAPS_API
                }
            }
        );

        console.log(response.data);

        if (response.data.features.length === 0) {
            throw new Error("Address not found");
        }

        const coordinates = response.data.features[0].geometry.coordinates;

        return {
            lat: coordinates[1],
            lng: coordinates[0]
        };

    } catch (error) {
        console.log(error.response?.data || error.message);
        throw error;
    }
};


module.exports.getDistanceTime = async (origin, destination) => {

    const geoApiKey = process.env.GEOPIFY_MAPS_API;
    const orsApiKey = process.env.OPENROUTESERVICE_API_KEY;

    // Get origin coordinates
    const originRes = await axios.get(
        "https://api.geoapify.com/v1/geocode/search",
        {
            params: {
                text: origin,
                apiKey: geoApiKey
            }
        }
    );

    // Get destination coordinates
    const destRes = await axios.get(
        "https://api.geoapify.com/v1/geocode/search",
        {
            params: {
                text: destination,
                apiKey: geoApiKey
            }
        }
    );

    const originCoords = originRes.data.features[0].geometry.coordinates;
    const destCoords = destRes.data.features[0].geometry.coordinates;

    const route = await axios.post(
        "https://api.openrouteservice.org/v2/directions/driving-car",
        {
            coordinates: [
                originCoords,
                destCoords
            ]
        },
        {
            headers: {
                Authorization: orsApiKey,
                "Content-Type": "application/json"
            }
        }
    );

    const summary = route.data.routes[0].summary;

    return {
        distance: {
            value: summary.distance,
            text: `${(summary.distance / 1000).toFixed(2)} km`
        },
        duration: {
            value: summary.duration,
            text: `${Math.round(summary.duration / 60)} mins`
        }
    };
};


module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error("Input is required");
    }

    try {
        const response = await axios.get(
            "https://api.geoapify.com/v1/geocode/autocomplete",
            {
                params: {
                    text: input,
                    apiKey: process.env.GEOAPIFY_API_KEY,
                    limit: 5
                }
            }
        );

        if (!response.data.features || response.data.features.length === 0) {
            return [];
        }

        return response.data.features.map(feature => feature.properties.formatted);

    } catch (err) {
        console.error(err.response?.data || err.message);
        throw err;
    }
};

module.exports.getCaptainsInTheRadius = async (lat, lng, radius) => {

    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[lng, lat], radius / 6371]
            }
        }
    });

    return captains;
};