import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  rating_top: number;
  metacritic: number;
  ratings: Rating[];
  genres: Genre[];
  parent_platforms: [
    {
      platform: Platform;
      released_at: string;
    }
  ];
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
