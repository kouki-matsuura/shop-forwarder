'use client';
import MuiButton from '@/components/ui/MuiButton';
import MuiTextField from '@/components/ui/MuiInputText';
import GoogleMapReact from 'google-map-react';
import { Dispatch, SetStateAction } from 'react';
type MapPresenterProps = {
  latLng: {
    lat: number;
    lng: number;
  };
  setLatLng: Dispatch<
    SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  searchForm: {
    address: string;
    keyword: string;
    location: string;
    radius: number;
    minPrice: number;
    maxPrice: number;
  };
  setSearchForm: Dispatch<
    SetStateAction<{
      address: string;
      keyword: string;
      location: string;
      radius: number;
      minPrice: number;
      maxPrice: number;
    }>
  >;
  handleApiLoaded: ({ map, maps }: { map: any; maps: any }) => void;
  handleGetInfos: () => Promise<void>;
};
const MapPresenter: React.FC<MapPresenterProps> = ({
  latLng,
  setLatLng,
  searchForm,
  setSearchForm,
  handleApiLoaded,
  handleGetInfos,
}) => {
  return (
    <>
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_API_KEY || '' }}
          defaultCenter={latLng}
          defaultZoom={16}
          onGoogleApiLoaded={handleApiLoaded}
          onClick={setLatLng}
          yesIWantToUseGoogleMapApiInternals
        />
      </div>

      <MuiButton onClick={handleGetInfos}>検索</MuiButton>
    </>
  );
};

export default MapPresenter;
