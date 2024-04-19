import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
