import { Link } from "react-router";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";
import moment from "moment";

const VideoTile = ({ videoProps }: any) => {
  return (
    <Link to={`/watch/${videoProps.id}`} className="h-full w-full group">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        className="flex flex-row gap-4 bg-neutral-900 rounded-xl p-3 h-full"
      >
        <div className="img-container relative aspect-video">
          <LazyImage
            alt={videoProps?.title}
            src={videoProps?.thumbnail}
            className="rounded-md group-hover:brightness-125"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <h3
            dangerouslySetInnerHTML={{ __html: videoProps.title }}
            className="font-semibold text-[15px] leading-snug tracking-normal line-clamp-2 text-ellipsis"
          />
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
      </motion.div>
    </Link>
  );
};

export default VideoTile;
