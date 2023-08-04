import { useState } from 'react';
import { GeoCodeRequest } from '../map.types';
import { GEO_CODE_KEY } from '@/common/reactQueryKeys';
import { useSearchState } from '../actions';
import { useQuery } from '@tanstack/react-query';

export const useGeoCoder = (): {
  fetchGeoCode: (req: GeoCodeRequest) => Promise<any>;
  data: any;
  isLoading: boolean;
  error: any;
} => {
  const { search, setSearch } = useSearchState();

  const geoCodeKey = [GEO_CODE_KEY, search.address];
  const { isLoading, data, error } = useQuery(geoCodeKey, () =>
    fetchGeoCode({
      address: search.address,
      key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
    }),
  );

  const fetchGeoCode = async (req: GeoCodeRequest) => {
    const result = await fetch(
      `/api/geoCoder?address=${req.address}&key=${req.key}`,
    ).then(async (response) => {
      const result = await response.json();
      return result;
    });

    return result;
  };

  return { fetchGeoCode, data, isLoading, error };
};
