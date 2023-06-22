import React from "react";
import { GoogleMap, useJsApiLoader, Marker, LoadScript, StandaloneSearchBox, InfoWindow } from '@react-google-maps/api';
import './MapPage.css';

const center = { lat: -3.727175087717335, lng: -38.49858907192544 }


export const MapPage = () => {

    const [map, setMap] = React.useState<google.maps.Map>();
    const [searchBox, setSearchBox] = React.useState<google.maps.places.SearchBox>();
    const [places, setPlaces] = React.useState<google.maps.places.PlaceResult[]>([]);
    const [selectedPlace, setSelectedPlace] = React.useState<google.maps.places.PlaceResult | null>();

    const handleOnPlacesChanged = () => {
        const searchBoxPlaces = searchBox!.getPlaces();
        const place = searchBoxPlaces![0];
        const newPlaces = [...places, place];
        setSelectedPlace(null);
        setPlaces(newPlaces);
        if (place.geometry && place.geometry.location) {
            map?.panTo(place.geometry.location);

        }
    };



    return (
        // Componente utilizado para carregar a chave do google em todo o código
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY || ""}
            libraries={["places"]}>
            <div className="map">


                {/* Componente do google maps para aparecer o mapa */}

                <GoogleMap
                    onLoad={setMap}
                    center={center}
                    zoom={16}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                >


                    {/* componente para campo de busca do google */}

                    <div className="search-box-container">
                        <div className="serach-box-layer">
                            <StandaloneSearchBox onLoad={setSearchBox} onPlacesChanged={handleOnPlacesChanged}>
                                <input type="text" className="search-box-input" />
                            </StandaloneSearchBox>
                        </div>
                    </div>



                    {/* Componente para marcação no MAPS */}
                    {places.map((place, index) => (
                        <>
                            {place.geometry && place.geometry.location ? (
                                <Marker 
                                key={index} 
                                position={place.geometry.location} 
                                onClick={() => setSelectedPlace(place)}
                                >
                                    {selectedPlace && selectedPlace === place ? (
                                    <InfoWindow 
                                        key={`infor-window-${index}`} 
                                        onCloseClick={() => setSelectedPlace(null)}
                                        >
                                        <div>
                                            <h1>Info Window</h1>
                                            <p>{selectedPlace.formatted_address}</p>
                                        </div>
                                    </InfoWindow> 
                                ) : null}
                                </Marker>
                            ) : null}
                        </>

                    ))}

                </GoogleMap>
            </div>
        </LoadScript>
    );
}