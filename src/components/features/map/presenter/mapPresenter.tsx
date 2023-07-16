'use client';
import MuiButton from '@/components/ui/MuiButton';
import GoogleMapReact from 'google-map-react';
type MapPresenterProps = {
  defaultLatLng: {
    lat: number;
    lng: number;
  };
  handleApiLoaded: ({ map, maps }: { map: any; maps: any }) => void;
  handleGetInfos: () => Promise<void>;
};
const MapPresenter: React.FC<MapPresenterProps> = ({
  defaultLatLng,
  handleApiLoaded,
  handleGetInfos,
}) => {
  return (
    <>
      <div style={{ height: '500px', width: '500px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_API_KEY || '' }}
          defaultCenter={defaultLatLng}
          defaultZoom={16}
          onGoogleApiLoaded={handleApiLoaded}
        />
      </div>
      <MuiButton onClick={handleGetInfos}>ボタン</MuiButton>
    </>
  );
};

export default MapPresenter;
