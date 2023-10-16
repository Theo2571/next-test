"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  incrementVisibleGames,
  setCurrencyFilter,
  setProviderFilter,
} from "@/redux/gamesSlice";
import cl from "./Games.module.css";
import { CurrencyFilter } from "@/components/filters/CurrencyFilter";
import { ProviderFilter } from "@/components/filters/ProviderFilter";
import { FilterGames, Game } from "@/types/interface";

const Games: React.FC = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.games.games);
  const real = useSelector((state: RootState) => state.games.real);
  const provider = useSelector((state: RootState) => state.games.provider);
  const visibleGames = useSelector(
    (state: RootState) => state.games.visibleGames,
  );
  useEffect(() => {
    dispatch(setCurrencyFilter(sortedGames));
    dispatch(setProviderFilter(sortedGames));
  }, [games]);

  const sortedGames = Object.entries(games)
    .sort(
      ([_, gameA], [__, gameB]) =>
        gameA.collections.popularity - gameB.collections.popularity,
    )
    .map(([gameKey, game]) => ({ gameKey, game }));

  const filterGames = (
    games: { gameKey: string; game: Game }[],
    currency: string,
    provider: string,
  ) => {
    if (!currency && !provider) return games;
    return games.filter(({ game }) => {
      const realCurrencies = Object.keys(game.real);
      const currencyMatch = !currency || realCurrencies.includes(currency);
      const providerMatch = !provider || game.provider === provider;

      return currencyMatch && providerMatch;
    });
  };

  const filteredGames = filterGames(sortedGames, real, provider);
  const showNoGamesMessage = filteredGames.length === 0;

  const showMoreGames = () => {
    dispatch(incrementVisibleGames(visibleGames + 12));
  };
  const imageLoader = ({ src }: { src: string }) => {
    return `https://cdn2.softswiss.net/i/s2/${src}.png`;
  };
  return (
    <div>
      <div className={cl.wrapper}>
        <div className={cl.blockFilter}>
          <CurrencyFilter />
          <ProviderFilter />
        </div>
        <div className={cl.games}>
          {showNoGamesMessage ? (
            <h1 style={{ marginTop: 250 }}>Таких игр нету !!!</h1>
          ) : (
            filteredGames.slice(0, visibleGames).map(({ gameKey, game }) => (
              <div className={cl.game} key={gameKey}>
                <Image
                  loader={imageLoader}
                  src={gameKey}
                  alt="Picture of the author"
                  width={300}
                  height={200}
                  priority
                />
                <Link href={`/game/${gameKey}`}>{game.title}</Link>
              </div>
            ))
          )}
        </div>
      </div>
      {showNoGamesMessage ? (
        <div></div>
      ) : (
        <div className={cl.blockBtn}>
          <button className={cl.btnMore} onClick={showMoreGames}>
            Показать еще
          </button>
        </div>
      )}
    </div>
  );
};

export default React.memo(Games);
