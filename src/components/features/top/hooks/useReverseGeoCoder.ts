import { useState } from 'react';
import { GeoCodeRequest, ReverseGeoCodeRequest } from '../map.types';
import { useSearchState } from '../actions';
import { REVERSE_GEO_CODE_KEY } from '@/common/reactQueryKeys';
import { useQuery } from '@tanstack/react-query';

export const useReverseGeoCoder = (): {
  fetchReverseGeoCode: (req: ReverseGeoCodeRequest) => void;
  result: any;
  processing: boolean;
  error: any;
} => {

  const { search } = useSearchState();
  const reverseGeoCodeKey = [REVERSE_GEO_CODE_KEY, search.location];
  const { isLoading, data, error } = useQuery(reverseGeoCodeKey, () =>
    fetchReverseGeoCode({
      latlng: search.location,
      key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
    }),
  );

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
