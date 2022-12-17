import {CircleMarker, GeoJSON, MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import React, {useEffect, useState} from "react";
import bushaltestellen from "../bushaltestellen.json"
import parkplaetze from "../parkplaetze.json"
import spielplaetze from "../spielplaetze.json"
import {circleMarker, geoJson, geoJSON, LatLng} from "leaflet";


interface KarteWidgetProps {
    spiel: boolean
}

const KarteWidget: React.FC<{spiel:boolean, park:boolean, bus:boolean}> = ({spiel, park, bus}) => {
    const b : GeoJSON.FeatureCollection = bushaltestellen as GeoJSON.FeatureCollection;
    const p : GeoJSON.FeatureCollection = parkplaetze as GeoJSON.FeatureCollection;
    const s : GeoJSON.FeatureCollection = spielplaetze as GeoJSON.FeatureCollection;

    const stopsPoints = (feat: GeoJSON.Feature, latlng: LatLng) => {
        return circleMarker(latlng);
    };

    const parkplaetzePoints = (feat: GeoJSON.Feature, latlng: LatLng) => {
        return circleMarker(latlng);
    };

    const spielplaetzePoints = (feat: GeoJSON.Feature, latlng: LatLng) => {
        return circleMarker(latlng);
    };

    return (
    <MapContainer center={[47.68, 9.18]} zoom={13} scrollWheelZoom={false} style={{height: 500}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {bus && <GeoJSON data={b} pointToLayer={stopsPoints} />}
        {park && <GeoJSON data={p} pointToLayer={parkplaetzePoints} style={{color: 'red'}}/>}
        {spiel && <GeoJSON data={s} pointToLayer={spielplaetzePoints} style={{color: 'green'}}/>}
    </MapContainer>
    )
};

export default KarteWidget;