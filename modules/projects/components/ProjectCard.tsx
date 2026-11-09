import { Link } from "@/i18n/navigation";
import { HiOutlineArrowSmRight as ViewIcon } from "react-icons/hi";
import { useLocale, useTranslations } from "next-intl";
import { TbPinnedFilled as PinIcon } from "react-icons/tb";

import Image from "@/common/components/elements/Image";
import SpotlightCard from "@/common/components/elements/SpotlightCard";
import { ProjectItem } from "@/common/types/projects";
import { STACKS } from "@/common/constants/stacks";

const ProjectCard = ({
  title,
  slug,
  description,
  image,
  stacks,
  is_featured,
  featured_tag,
  description_en,
}: ProjectItem) => {
  const t = useTranslations("ProjectsPage");
  const locale = useLocale();
  const displayDescription =
    locale === "en" && description_en ? description_en : description;

  const trimmedContent =
    displayDescription.slice(0, 85) +
    (displayDescription.length > 85 ? "..." : "");

  return (
    <Link href={`/projects/${slug}`}>
      <SpotlightCard className="group relative cursor-pointer">
        {is_featured && (
          <div className="absolute right-0 top-0 z-10 flex items-center gap-x-1 rounded-bl-lg rounded-tr-lg bg-primary px-2.5 py-1 text-xs font-semibold text-neutral-900 shadow-sm">
            <PinIcon size={14} />
            <span>{featured_tag || "Real Case"}</span>
          </div>
        )}
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={450}
            height={200}
            className="h-[200px] w-full rounded-t-xl object-cover"
          />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-xl bg-black text-sm font-medium text-neutral-50 opacity-0 transition-opacity duration-300 group-hover:opacity-80">
            <span>{t("view_project")}</span>
            <ViewIcon size={20} />
          </div>
        </div>
        <div className="space-y-2 p-5">
          <h3 className="cursor-pointer text-neutral-700 transition-all duration-300 group-hover:text-primary dark:text-neutral-300">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
            {trimmedContent}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {stacks?.map((stack: string, index: number) => {
              const stackData =
                STACKS[stack] ||
                STACKS[stack.replace(/\s+/g, "")] ||
                STACKS[`${stack}.js`];

              if (!stackData) {
                return (
                  <span
                    key={index}
                    className="rounded bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                  >
                    {stack}
                  </span>
                );
              }

              return (
                <div key={index} className={`${stackData.color}`}>
                  {stackData.icon}
                </div>
              );
            })}
          </div>
        </div>
      </SpotlightCard>
    </Link>
  );
};

export default ProjectCard;
