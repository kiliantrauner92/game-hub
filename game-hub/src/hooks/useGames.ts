import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
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

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
