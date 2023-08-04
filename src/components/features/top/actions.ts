import { atom, useAtom } from 'jotai';

const searchAtom = atom({
  query: '',
  address: '',
  location: '',
  radius: 0,
  minprice: 0,
  maxprice: 0,
});

export const useSearchState = () => {
  const [search, setSearch] = useAtom(searchAtom);
  return { search, setSearch };
};
