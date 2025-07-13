import React from "react";
import { Link } from "react-router";

const VideoCard = () => {
  return (
    <Link to={"/"} className="h-full w-full group">
      <div className="img-container relative w-full aspect-video">
        <img
          src="https://i.ytimg.com/vi/uZDPXFQYz0Q/maxresdefault.jpg"
          className="w-full rounded-lg group-hover:brightness-125"
          loading="lazy"
        />
        <span className="absolute bottom-0 right-0 m-1 py-1 px-1.5 bg-[rgba(0,0,0,0.5)] text-xs font-semibold rounded-lg">
          38:45
        </span>
      </div>
      <div className="py-3">
        <div className="flex flex-row gap-2">
          <img
            src="https://yt3.ggpht.com/pTVQZnWTnD80e1FvzEEg5dwEvSg_IB5NBRB3tPvJZIzhGNYWoJ9b1YibM77KOahob0ftDyq0=s68-c-k-c0x00ffffff-no-rj"
            className="size-8 rounded-full"
          />
          <div className="flex flex-col gap-0.5">
            <h3 className="font-semibold text-[15px] leading-tight line-clamp-2 text-ellipsis">
              Lorem ipsum dolor sit amet, conse adipisicing elit. Numquam quia
              quod quaerat ipsam ipsa commodi neque voluptate officiis
              cupiditate omnis?
            </h3>
            <p className="text-sm opacity-80 font-medium line-clamp-1 text-ellipsis">
              Bog
            </p>
            <div className="flex flex-row items-center gap-1.5 opacity-70">
              <span className="text-sm">87K views</span>
              <div className="size-1 bg-white rounded-full" />
              <span className="text-sm">1 year ago</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
