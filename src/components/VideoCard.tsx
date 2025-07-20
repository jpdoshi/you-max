import { Link } from "react-router";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";
import moment from "moment";

const VideoCard = ({ videoProps }: any) => {
  return (
    <Link to={`/watch/${videoProps.id}`} className="h-full w-full group">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        className="mb-2"
      >
        <div className="img-container relative w-full aspect-video">
          <LazyImage
            alt={videoProps?.title}
            src={videoProps?.thumbnail}
            className="w-full rounded-t-lg group-hover:brightness-125"
          />
        </div>
        <div className="p-3 bg-neutral-900 rounded-b-xl">
          <div className="flex flex-col gap-0.5">
            <h3 className="font-semibold text-[15px] leading-snug tracking-normal line-clamp-2 text-ellipsis">
              {videoProps.title}
            </h3>
            <Link
              to={`/channel/${videoProps.channel.id}`}
              className="text-sm opacity-80 font-medium line-clamp-1 text-ellipsis"
            >
              {videoProps.channel.title}
            </Link>
            <div className="opacity-70">
              <span className="text-sm">
                {moment(videoProps.publishedAt).fromNow()}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default VideoCard;
