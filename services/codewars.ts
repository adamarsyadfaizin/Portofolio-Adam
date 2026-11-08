import { MOCK_CODEWARS_DATA } from "@/common/constants/mockData";

export const getCodewarsData = async () => {
  return { status: 200, data: MOCK_CODEWARS_DATA };
};
