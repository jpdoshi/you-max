import { Link } from "react-router";
import { motion } from "framer-motion";
import { convertISODuration, convertUnits } from "../utils/unitConvert";
import moment from "moment";
import LazyImage from "./LazyImage";

interface Props {
  categoryId: number;
  videoId: number;
  item: any;
}

const VideoCard = ({ categoryId, videoId, item }: Props) => {
  return (
    <Link
      to={`/watch/${categoryId}/${videoId}`}
      className="h-full w-full group"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        className="mb-1"
      >
        <div className="img-container relative w-full aspect-video">
          <LazyImage
            alt={item?.snippet?.title}
            src={item?.snippet.thumbnails?.medium?.url}
            className="w-full rounded-lg group-hover:brightness-125"
          />
          <span className="absolute bottom-0 right-0 m-1 py-1 px-1.5 bg-[rgba(0,0,0,0.5)] text-xs font-semibold rounded-lg">
            {convertISODuration(item?.contentDetails?.duration)}
          </span>
        </div>
        <div className="px-2 py-3">
          <div className="flex flex-col gap-0.5">
            <h3 className="font-semibold text-[15px] leading-snug tracking-normal line-clamp-2 text-ellipsis">
              {item?.snippet?.title}
            </h3>
            <p className="text-sm opacity-80 font-medium line-clamp-1 text-ellipsis">
              {item?.snippet?.channelTitle}
            </p>
            <div className="flex flex-row items-center gap-1.5 opacity-70">
              <span className="text-sm">
                {convertUnits(item?.statistics?.viewCount)} views
              </span>
              <div className="size-1 bg-white rounded-full" />
              <span className="text-sm">
                {moment(item?.snippet?.publishedAt).fromNow()}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default VideoCard;
