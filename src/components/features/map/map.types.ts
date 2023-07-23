export type PlacesRequest = {
  // APIキー
  key: string;
  // 検索ワード
  query: string;
  // 緯度と経度
  location: string;
  // 場所の結果を返す距離　単位はメートル
  radius: number;
  // 最低価格レベル
  minprice?: number;
  // 最高価格レベル
  maxprice?: number;
};

export type GeoCodeRequest = {
  //APIキー
  key: string;
  //地点名
  address: string;
};

export type ReverseGeoCodeRequest = {
  //APIキー
  key: string;
  //緯度
  lat: number;
  //経度
  lng: number;
};
