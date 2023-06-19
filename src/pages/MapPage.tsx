import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './MapPage.css';


export interface MapPageProps {

}

export const MapPage = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAmrwssiEH0Hykj7Ev79G-aY8f7zs2VGfk"
    })
        const position = {
            lat: -3.742778, 
            lng: -38.503700
          }

    return (
        <div className="map">
            {isLoaded ? (
                    <GoogleMap
                      mapContainerStyle={{width:'100%',height:'100%'}}
                      center={position}
                      zoom={15}                    
                    >   
                    <Marker position={position}/>                 
                    </GoogleMap>
                ) : ( 
                <></>
            )}
        </div>
    );
};