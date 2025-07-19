import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      const resp = await axios.get(url);

      if (resp.status == 200 || resp.status == 201) {
        setData(resp.data);
      } else {
        setError(
          Error(`Request to ${url} returned with status: ${resp.status}`)
        );
      }

      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err : Error(err?.toString()));
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return { data, loading, error, refresh: fetchData };
};
