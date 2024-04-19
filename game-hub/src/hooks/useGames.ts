import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  metacritic: number;
  ratings: Rating[];
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

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = () => useData<Game>("/games");

export default useGames;
