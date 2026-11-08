import {
  MOCK_WAKATIME_STATS,
  MOCK_WAKATIME_ALL_TIME,
} from "@/common/constants/mockData";

export const getReadStats = async () => {
  return { data: MOCK_WAKATIME_STATS };
};

export const getAllTimeSinceToday = async () => {
  return { data: MOCK_WAKATIME_ALL_TIME };
};
