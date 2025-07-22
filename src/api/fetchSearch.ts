import axios from "axios";
import { API_KEY } from "../config";

export async function fetchSearchVideo(
  nextPageToken: string,
  maxResults = 50,
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
          order: "date",
          type: "video",
          videoDuration: "medium",
          safeSearch: "strict",
          videoEmbeddable: "true",
          maxResults,
          key: API_KEY,
        },
      }
    );

    // Format output
    const videoInfo: any = searchResponse.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      channel: { title: item.snippet.channelTitle, id: item.snippet.channelId },
      publishedAt: item.snippet.publishedAt,
    }));

    return { nextPageToken: searchResponse.data.nextPageToken, videoInfo };
  } catch (error) {
    console.error("Error fetching video details:", error);
    return [];
  }
}
