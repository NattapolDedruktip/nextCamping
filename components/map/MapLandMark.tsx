'use client'

import { LayersControl, MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'
import { useState } from 'react';

const iconUrl =
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = L.icon({
    iconUrl: iconUrl,
    iconSize: [20, 30],
});

type LatLng = [number, number]
type LocationMarkerProps = {
    position: LatLng | null
    setPosition: (position: LatLng) => void
}

function LocationMarker({ position, setPosition }: LocationMarkerProps) {

    const map = useMapEvents({
        click(e) {
            const newLocation: LatLng = [e.latlng.lat, e.latlng.lng]
            setPosition(newLocation)
            map.flyTo(e.latlng, map.getZoom())
        },

    })

    return position === null ? null : (
        <Marker position={position} icon={markerIcon}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

const MapLandMark = ({ location }: { location?: { lat: number, lng: number } }) => {
    const defaultLocation: LatLng = [14, 101]
    const [position, setPosition] = useState(null)
    console.log('position', position)
    return (
        <>
            <h1 className='mt-4 font-semibold' >Where are you ?</h1>
            <input type='hidden' name="lat" value={position ? position[0] : ""} />
            <input type='hidden' name="lng" value={position ? position[1] : ""} />
            <MapContainer
                className='h-[50vh] rounded-lg z-0 relative mb-2'
                center={location || defaultLocation}
                zoom={7}
                scrollWheelZoom={false}>

                <Marker position={location || defaultLocation} icon={markerIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>

                <LocationMarker position={position} setPosition={setPosition} />


                <LayersControl>
                    <LayersControl.BaseLayer name="OSM" checked >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer name="ESRI WorldImagery"  >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>
            </MapContainer>
        </>
    )
}
export default MapLandMark