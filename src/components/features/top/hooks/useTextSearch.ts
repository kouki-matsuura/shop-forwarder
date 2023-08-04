import { useState } from 'react';
import { PlacesRequest } from '../map.types';
import { TEXT_SEARCH_KEY } from '@/common/reactQueryKeys';
import { useSearchState } from '../actions';
import { useQuery } from '@tanstack/react-query';

export const useTextSearch = (): {
  fetchPlaces: (req: PlacesRequest) => Promise<any>;
  data: any;
  isLoading: boolean;
  error: any;
} => {
  const { search } = useSearchState();

  const textSearchKey = [TEXT_SEARCH_KEY, search];

  const { isLoading, data, error } = useQuery(textSearchKey, () =>
    fetchPlaces({
      query: search.query,
      location: search.location,
      radius: search.radius,
      minprice: search.minprice,
      maxprice: search.maxprice,
      key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
    }),
  );

  const fetchPlaces = async (req: PlacesRequest) => {
    const result = await fetch(
      `/api/textSearch?query=${req.query}&language=ja&location=${req.location}&radius=${req.radius}&minprice=${req.minprice}&maxprice=${req.maxprice}&key=${req.key}`,
    ).then(async (response) => {
      const result = await response.json();
      return result;
    });
    return result;
  };

  return { fetchPlaces, data, isLoading, error };
};
