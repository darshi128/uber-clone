import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const LiveTracking = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);

    const [currentPosition, setCurrentPosition] = useState({
        lat: 28.6139,
        lng: 77.2090
    });

    useEffect(() => {
        if (map.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://maps.geoapify.com/v1/styles/osm-carto/style.json?apiKey=${import.meta.env.VITE_GEOPIFY_MAPS_API}`,
            center: [currentPosition.lng, currentPosition.lat],
            zoom: 15
        });

        marker.current = new maplibregl.Marker()
            .setLngLat([currentPosition.lng, currentPosition.lat])
            .addTo(map.current);

    }, []);

    useEffect(() => {

        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                const newPosition = {
                    lat: latitude,
                    lng: longitude
                };

                setCurrentPosition(newPosition);

                if (marker.current) {
                    marker.current.setLngLat([longitude, latitude]);
                }

                if (map.current) {
                    map.current.flyTo({
                        center: [longitude, latitude],
                        zoom: 15
                    });
                }

                console.log("Updated:", latitude, longitude);
            },
            (err) => console.log(err),
            {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 5000
            }
        );

        return () => navigator.geolocation.clearWatch(watchId);

    }, []);

    return (
        <div
            ref={mapContainer}
            style={{
                width: "100%",
                height: "100%"
            }}
        />
    );
};

export default LiveTracking;