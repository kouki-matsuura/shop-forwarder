import { PlacesRequest } from '../map.types';
type UseTextSearchResponse = {
  getInfos: (req: PlacesRequest) => Promise<any>;
};
export const useTextSearch = (): UseTextSearchResponse => {
  const getInfos = async (req: PlacesRequest) => {
    const url = `
    https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.query}
    &language=${req.language}&location=${req.location}&radius=${req.radius}&key=${req.key}`;

    const response = await fetch(url);
    const result = await response.json();
    return result;
  };

  return {
    getInfos,
  };
};
