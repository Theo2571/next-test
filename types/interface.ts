export type Games = {
  id: string;
  provider: string;
  real: string[];
  title: string;
};

export type Props = {
  params: {
    id: [];
  };
};
interface CollectionsData {
  popularity: number;
}
export interface Game {
  title: string;
  provider: string;
  collections: CollectionsData;
  real: object;
  demo: string;
  gameKey?: string;
  [key: string]: any;
}
export type FilterGames = {
  games: Game[];
  currency?: string;
  provider?: string;
};
export interface GamesState {
  games: Game[];
  visibleGames: number;
  selectedProvider: string[];
  selectedCurrency: string[];
  real: string;
  provider: string;
}
