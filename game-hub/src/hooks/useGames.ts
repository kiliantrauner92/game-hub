import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  metacritic: number;
  ratings: [
    {
      id: number;
      title: string;
      count: number;
      percent: number;
    }
  ];
  parent_platforms: [
    {
      platform: Platform;
      released_at: string;
    }
  ];
}

export interface Platform {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, setGames, error };
};
