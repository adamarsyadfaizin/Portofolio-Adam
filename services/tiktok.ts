import {
  MOCK_TIKTOK_PROFILE,
  MOCK_TIKTOK_VIDEOS,
} from "@/common/constants/mockData";

export async function getTikTokProfile() {
  return MOCK_TIKTOK_PROFILE;
}

export async function getTikTokVideos(
  cursor: number = 0,
  maxCount: number = 6,
) {
  const paginatedVideos = MOCK_TIKTOK_VIDEOS.slice(0, 6);

  return {
    videos: paginatedVideos,
    has_more: false,
    cursor: 6,
  };
}
