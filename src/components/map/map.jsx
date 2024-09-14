import React from 'react';
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

function YandexMap() {
    const mapState = {
        center: [38.5564, 68.7871], // Координаты пересечения улиц Профсоюз и Рахими, рядом с SoftClub
        zoom: 15, 
        };

    return (
        <YMaps>
            <Map defaultState={mapState} width="100%" height="600px">
            <Placemark geometry={[38.563884, 68.758901]} />
            <ZoomControl/>
            </Map>
        </YMaps>
    );
}

export default YandexMap;
