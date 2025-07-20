import axios from "axios";
import { API_KEY } from "../config";

export async function fetchSearchVideo(
  nextPageToken: string,
  searchQuery: string
): Promise<any> {
  try {
    const searchResponse = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          nextPageToken,
          q: searchQuery,
          type: "video",
          videoEmbeddable: "true",
          maxResults: 5,
          key: API_KEY,
        },
      }
    );

    const videoIds = searchResponse.data.items
      .map((item: any) => item.id.videoId)
      .filter(Boolean);

    if (videoIds.length === 0) {
      return [];
    }

    // Step 2: Get video details (duration, views)
    const videoResponse = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          part: "snippet,contentDetails,statistics",
          id: videoIds.join(","),
          key: API_KEY,
        },
      }
    );

    // Format output
    const videoInfo: any = videoResponse.data.items.map((item: any) => ({
      id: item.id,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      duration: item.contentDetails.duration,
      viewCount: item.statistics.viewCount,
      channel: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
    }));

    return { nextPageToken: searchResponse.data.nextPageToken, videoInfo };
  } catch (error) {
    console.error("Error fetching video details:", error);
    return [];
  }
}
