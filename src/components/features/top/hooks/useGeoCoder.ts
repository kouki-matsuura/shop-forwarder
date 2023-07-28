import { useState } from 'react';
import { GeoCodeRequest } from '../map.types';

export const useGeoCoder = (): {
  fetchGeoCode: (req: GeoCodeRequest) => void;
  result: any;
  processing: boolean;
  error: any;
} => {
  const [processing, setProcessing] = useState<boolean>(false);
  const [result, setResult] = useState<any>();
  const [error, setError] = useState<any>();

  const fetchGeoCode = async (req: GeoCodeRequest) => {
    setProcessing(true);

    await fetch(`/api/geoCoder?address=${req.address}&key=${req.key}`)
      .then(async (response) => {
        if (!response.ok) {
          setError(response.statusText);
        }
        const result = await response.json();
        setError(undefined);
        setResult(result);
      })
      .finally(() => setProcessing(false));
  };

  return { fetchGeoCode, result, processing, error };
};
