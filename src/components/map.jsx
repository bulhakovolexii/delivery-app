import { GoogleMap, Marker } from '@react-google-maps/api';

import { useCallback, useRef } from 'react';

const mapConfig = {
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
}

export default function Map({ center, isLoaded }) {
    const mapRef = useRef(undefined)

    const onLoad = useCallback(function useCallback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = useCallback(function useCallback(map) {
        mapRef.current = undefined;
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '350px' }}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={mapConfig}
        >
            <Marker
                onLoad={onLoad}
                position={center}
            />
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}