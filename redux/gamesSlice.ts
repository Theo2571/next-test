import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, GamesState } from "@/types/interface";
import gamesData from "../games.json";

const initialState: GamesState = {
  // @ts-ignore
  games: gamesData,
  visibleGames: 12,
  selectedProvider: [],
  selectedCurrency: [],
  real: "",
  provider: "",
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    incrementVisibleGames: (state, action) => {
      state.visibleGames = action.payload;
    },
    loadGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
    },
    setProviderFilter: (state, action) => {
      const allProviders = action.payload.map(
        (provider: string | any) => provider.game.provider,
      );
      state.selectedProvider = [...new Set(allProviders)] as string[];
    },
    setCurrencyFilter: (state, action) => {
      const uniqueCurrencies: string[] = [];
      for (const real of action.payload) {
        for (const currency of Object.keys(real.game.real)) {
          if (!uniqueCurrencies.includes(currency)) {
            uniqueCurrencies.push(currency);
          }
        }
      }
      state.selectedCurrency = uniqueCurrencies;
    },
    getReal: (state, action: PayloadAction<string>) => {
      state.real = action.payload;
    },
    getProvider: (state: any, action: PayloadAction<string>) => {
      state.provider = action.payload;
    },
  },
});

export const {
  incrementVisibleGames,
  getProvider,
  setProviderFilter,
  setCurrencyFilter,
  getReal,
} = gamesSlice.actions;
export default gamesSlice.reducer;
