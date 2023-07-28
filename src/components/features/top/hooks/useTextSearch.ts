import { useState } from 'react';
import { PlacesRequest } from '../map.types';
type UseTextSearchResponse = {
  address: string;
  getPlaces: (req: PlacesRequest) => any;
};
export const useTextSearch = (): {
  fetchPlaces: (req: PlacesRequest) => void;
  result: any;
  processing: boolean;
  error: any;
} => {
  const [processing, setProcessing] = useState<boolean>(false);
  const [result, setResult] = useState<any>();
  const [error, setError] = useState<any>();

  const fetchPlaces = async (req: PlacesRequest) => {
    setProcessing(true);

    await fetch(
      `/api/textSearch?query=${req.query}&language=ja&location=${req.location}&radius=${req.radius}&minprice=${req.minprice}&maxprice=${req.maxprice}&key=${req.key}`,
    )
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

  return { fetchPlaces, result, processing, error };
};
