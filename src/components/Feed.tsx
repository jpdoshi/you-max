import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { ToastContainer } from "react-toastify";
import { useFetch } from "../hooks/useFetch";
import { FETCH_VIDEOS_BY_CATEGORY } from "../constants/urls";
import { FadeLoader } from "react-spinners";

const categories: any[] = [
  {
    id: 0,
    title: "Trending",
  },
  {
    id: 25,
    title: "News",
  },
  {
    id: 28,
    title: "Technology",
  },
  {
    id: 24,
    title: "Entertainment",
  },
  {
    id: 20,
    title: "Gaming",
  },
  {
    id: 26,
    title: "How-To",
  },
  {
    id: 22,
    title: "People & Blogs",
  },
  {
    id: 17,
    title: "Sports",
  },
  {
    id: 1,
    title: "Films",
  },
  {
    id: 10,
    title: "Music",
  },
];

const CategoryChip = ({ filter, setCategory, currentCategory }: any) => {
  return (
    <button
      onClick={() => setCategory(filter?.id)}
      className={`py-1 px-2.5 cursor-pointer rounded-lg text-sm font-semibold border border-neutral-700 duration-300 whitespace-nowrap ${
        currentCategory == filter?.id
          ? "bg-white text-black"
          : "text-white hover:bg-neutral-800"
      }`}
    >
      {filter?.title}
    </button>
  );
};

const Feed = () => {
  const [currentCategory, setCurrentCategory] = useState<any>(0);
  const [data, setData] = useState<any[]>([]);

  const {
    data: feedData,
    loading: feedLoading,
    error: feedError,
  } = useFetch(FETCH_VIDEOS_BY_CATEGORY({ categoryId: currentCategory }), [
    currentCategory,
  ]);

  useEffect(() => {
    if (feedData) {
      setData(feedData?.items);
    }
  }, [feedData]);

  if (feedLoading) {
    return (
      <div className="h-[calc(100vh-60px)] w-full flex justify-center items-center">
        <FadeLoader loading={true} color="#b2071d" />
      </div>
    );
  } else if (feedError) {
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
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2.5 overflow-x-auto [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-600 [&::-webkit-scrollbar-thumb]:rounded-full">
            {categories?.map((item: any, index: any) => (
              <CategoryChip
                key={index}
                filter={item}
                currentCategory={currentCategory}
                setCategory={setCurrentCategory}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
            {!feedLoading &&
              data &&
              data?.map((item, index) => (
                <VideoCard
                  key={index}
                  categoryId={item?.snippet?.categoryId}
                  videoId={item?.id}
                  item={item}
                />
              ))}
          </div>
        </div>
      </main>
    );
};

export default Feed;
