import React, { useState } from "react";
import VideoCard from "./VideoCard";

const defaultFilters = [
  "All",
  "Trending",
  "Shopping",
  "Music",
  "Films",
  "Live",
  "Gaming",
  "News",
  "Sports",
  "Courses",
  "Fashion",
  "Podcasts",
];

const CategoryChip = ({ label, filter, setFilter }: any) => {
  return (
    <button
      onClick={() => setFilter(label)}
      className={`py-1 px-2.5 cursor-pointer rounded-lg text-sm font-semibold border border-neutral-700 duration-300 ${
        filter == label
          ? "bg-white text-black"
          : "text-white hover:bg-neutral-800"
      }`}
    >
      {label}
    </button>
  );
};

const Feed = () => {
  const [filter, setFilter] = useState<string>("All");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2.5 overflow-x-auto">
        {defaultFilters?.map((item, index) => (
          <CategoryChip
            key={index}
            filter={filter}
            setFilter={setFilter}
            label={item}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default Feed;
