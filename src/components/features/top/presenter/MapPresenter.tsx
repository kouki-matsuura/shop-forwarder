'use client';

import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { Dispatch, SetStateAction } from 'react';

type MapPresenterProps = {
  center: {
    lat: number;
    lng: number;
  };
  onLoad: (map: any) => void;
  onUnmount: (map: any) => void;
  setLatLng: Dispatch<
    SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  handleReverseGeoCode: () => void;
};

const MapPresenter: React.FC<MapPresenterProps> = ({
  center,
  onLoad,
  onUnmount,
  setLatLng,
  handleReverseGeoCode,
}) => {
  console.log('center:', center);
  return (
    <>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '600px' }}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={(e) => {
          setLatLng({
            lat: e.latLng?.lat() || 0,
            lng: e.latLng?.lng() || 0,
          });
          handleReverseGeoCode();
        }}
      >
        <MarkerF
          position={{
            lat: 35.6905,
            lng: 139.6995,
          }}
        />
      </GoogleMap>
    </>
  );
};

export default MapPresenter;
