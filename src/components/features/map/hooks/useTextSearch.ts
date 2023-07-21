import { PlacesRequest } from '../map.types';
type UseTextSearchResponse = {
  getInfos: (req: PlacesRequest) => Promise<any>;
};
export const useTextSearch = (): UseTextSearchResponse => {
  const getInfos = async (req: PlacesRequest) => {
    const response = await fetch(
      `/api/textSearch?query=${req.query}&language=${req.language}&location=${req.location}&radius=${req.radius}&key=${req.key}`,
    );
    const result = await response.json();
    console.log(result);
    return result;
  };

  return {
    getInfos,
  };
};
