"use client";
import { Props } from "@/types/interface";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import cl from "./page.module.css";
export default function Game({ params: { id } }: Props) {
  const router = useRouter();
  const games = useSelector((state: RootState) => state.games.games);
  const gameKey: any = Object.keys(games).find((key) => key === id.join("/"));

  return (
    <div>
      <div className={cl.blockBtn}>
        <button className={cl.button} onClick={() => router.back()}>
          Назад
        </button>
      </div>

      <div className={cl.centeredText}>
        <h1>{games[gameKey].title}</h1>
      </div>
    </div>
  );
}
