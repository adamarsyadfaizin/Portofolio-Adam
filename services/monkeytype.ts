import { MOCK_MONKEYTYPE_DATA } from "@/common/constants/mockData";

export const getMonkeytypeData = async () => {
  return { status: 200, data: MOCK_MONKEYTYPE_DATA };
};
