import { useState } from 'react';
import { SearchPresenter } from '../presenter/SearchPresenter';

type SearchContainerProps = {
  handleGetInfos: (form: any) => void;
};
export const SearchContainer: React.FC<SearchContainerProps> = ({
  handleGetInfos,
}) => {
  return <SearchPresenter handleGetInfos={handleGetInfos} />;
};
