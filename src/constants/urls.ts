import { API_KEY } from "../config";

export const FETCH_VIDEOS_BY_CATEGORY = ({
  maxResults = 50,
  categoryId = 0,
}: {
  maxResults?: number;
  categoryId: number;
}) => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${maxResults}&videoCategoryId=${categoryId}&key=${API_KEY}`;
};
