import { useState } from 'react';
import { GeoCodeRequest, ReverseGeoCodeRequest } from '../map.types';

export const useReverseGeoCoder = (): {
  fetchReverseGeoCode: (req: ReverseGeoCodeRequest) => void;
  result: any;
  processing: boolean;
  error: any;
} => {
  const [processing, setProcessing] = useState<boolean>(false);
  const [result, setResult] = useState<any>();
  const [error, setError] = useState<any>();

  const fetchReverseGeoCode = async (req: ReverseGeoCodeRequest) => {
    setProcessing(true);

    const latlng = `${req.lat},${req.lng}`;
    await fetch(`/api/reverseGeoCoder?latlng=${latlng}&key=${req.key}`)
      .then(async (response) => {
        if (!response.ok) {
          setError(response.statusText);
        }
        const result = await response.json();
        setError(undefined);
        setResult(result.results[0].formatted_address.split(' ')[1]);
      })
      .finally(() => setProcessing(false));
  };

  return { fetchReverseGeoCode, result, processing, error };
};
