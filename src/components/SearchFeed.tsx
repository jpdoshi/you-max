import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { FadeLoader } from "react-spinners";
import { fetchSearchVideo } from "../api/fetchSearch";
import { primary } from "../constants/colors";
import VideoTile from "./VideoTile";

const SearchFeed = ({ query = "" }: { query: string }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchSearchVideo("", 25, query)
      .then((data) => {
        setData(data.videoInfo);
        setLoading(false);
      })
      .catch((err) =>
        setError(err instanceof Error ? err : Error(err?.toString()))
      );
  }, [query]);

  if (loading) {
    return (
      <div className="h-[calc(100vh-200px)] w-full flex justify-center items-center">
        <FadeLoader loading={true} color={primary} />
      </div>
    );
  } else if (error) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          <p className="font-semibold">Could not fetch data</p>
        </div>
      </div>
    );
  } else
    return (
      <main>
        <ToastContainer />
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 mb-8">
          {!loading &&
            data &&
            data?.map((item, index) => (
              <VideoTile key={index} videoProps={item} />
            ))}
        </div>
      </main>
    );
};

export default SearchFeed;
