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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
