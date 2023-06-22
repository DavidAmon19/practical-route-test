import React from "react";
import { GoogleMap, useJsApiLoader, Marker, LoadScript } from '@react-google-maps/api';
import './MapPage.css';

const center = {lat:-3.727175087717335, lng:-38.49858907192544}


export const MapPage = () => {        
    
        

    return (
        <LoadScript googleMapsApiKey="AIzaSyAmrwssiEH0Hykj7Ev79G-aY8f7zs2VGfk">
            <div className="map">
                <GoogleMap 
                center={center}
                zoom={15} 
                mapContainerStyle={{width: "100%", height:"100%"}}
                />
            </div>
        </LoadScript>
    );
}