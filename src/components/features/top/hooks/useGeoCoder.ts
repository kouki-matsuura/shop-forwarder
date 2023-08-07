import { useState } from 'react';
import { GeoCodeRequest } from '../map.types';
import { GEO_CODE_KEY } from '@/common/reactQueryKeys';
import { useSearchState } from '../actions';
import { useQuery } from '@tanstack/react-query';
import useSWR from 'swr';

export const useGeoCoder = (): {
  data: any;
  isLoading: boolean;
  error: any;
} => {
  const { search } = useSearchState();
  const fetchGeoCode = (url: string, address: string) =>
    fetch(
      `${url}?address=${address}&key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`,
    ).then((response) => response.json());

  const { data, error, isLoading } = useSWR(
    [`/api/geoCoder`, search.address],
    ([url, address]) => fetchGeoCode(url, address),
  );

  return { data, isLoading, error };
};
