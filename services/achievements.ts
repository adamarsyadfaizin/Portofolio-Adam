import {
  MOCK_ACHIEVEMENTS,
  MOCK_ACHIEVEMENT_CATEGORIES,
  MOCK_ACHIEVEMENT_TYPES,
} from "@/common/constants/mockData";

interface GetAchievementsDataProps {
  category?: string;
  type?: string;
  search?: string;
}

export const getAchievementsData = async ({
  category,
  type,
  search,
}: GetAchievementsDataProps = {}) => {
  let result = [...MOCK_ACHIEVEMENTS];

  if (category) {
    result = result.filter(
      (item) => item.category?.toLowerCase() === category.toLowerCase(),
    );
  }

  if (type) {
    result = result.filter(
      (item) => item.type?.toLowerCase() === type.toLowerCase(),
    );
  }

  if (search) {
    result = result.filter((item) =>
      item.name?.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return result;
};

export const getAchivementTypes = async () => {
  return MOCK_ACHIEVEMENT_TYPES;
};

export const getAchivementCategories = async () => {
  return MOCK_ACHIEVEMENT_CATEGORIES;
};
