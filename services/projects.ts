import { MOCK_PROJECTS } from "@/common/constants/mockData";

export const getProjectsData = async () => {
  return MOCK_PROJECTS;
};

export const getProjectsDataBySlug = async (slug: string) => {
  const project = MOCK_PROJECTS.find(
    (item) => item.slug === slug || (slug === "cords-ai" && item.slug === "cords-app") || (slug === "ckg-helper-software" && item.slug === "ckg-helper"),
  );
  return project || null;
};
