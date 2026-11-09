export type ProjectItem = {
  id: number;
  title: string;
  slug: string;
  description: string;
  description_en?: string;
  image: string;
  link_demo?: string | null;
  link_github?: string | null;
  stacks: string[];
  content?: string | null;
  content_en?: string | null;
  is_show: boolean;
  is_featured: boolean;
  featured_tag?: string;
};

export type ProjectItemProps = {
  projects: ProjectItem[];
};
