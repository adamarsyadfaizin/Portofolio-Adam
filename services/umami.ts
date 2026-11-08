import { UmamiResponse } from "@/common/types/umami";
import { MOCK_UMAMI_STATS } from "@/common/constants/mockData";

export const getAllWebsiteData = async (): Promise<UmamiResponse> => {
  return {
    pageviews: MOCK_UMAMI_STATS.pageviews,
    sessions: MOCK_UMAMI_STATS.sessions,
    websiteStats: {
      pageviews: { value: MOCK_UMAMI_STATS.websiteStats.pageviews },
      visitors: { value: MOCK_UMAMI_STATS.websiteStats.visitors },
      visits: { value: MOCK_UMAMI_STATS.websiteStats.visits },
      countries: { value: MOCK_UMAMI_STATS.websiteStats.countries },
      events: { value: MOCK_UMAMI_STATS.websiteStats.events },
    },
  };
};

export const getPageViewsByDataRange = async (domain: string) => {
  return {
    status: 200,
    data: {
      pageviews: MOCK_UMAMI_STATS.pageviews,
      sessions: MOCK_UMAMI_STATS.sessions,
    },
  };
};

export const getWebsiteStats = async (domain: string) => {
  return {
    status: 200,
    data: {
      pageviews: { value: MOCK_UMAMI_STATS.websiteStats.pageviews },
      visitors: { value: MOCK_UMAMI_STATS.websiteStats.visitors },
      visits: { value: MOCK_UMAMI_STATS.websiteStats.visits },
      countries: { value: MOCK_UMAMI_STATS.websiteStats.countries },
      events: { value: MOCK_UMAMI_STATS.websiteStats.events },
    },
  };
};
