"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { BsBuildings as CompanyIcon } from "react-icons/bs";

import { EducationProps } from "@/common/types/education";
import SpotlightCard from "@/common/components/elements/SpotlightCard";

const EducationCard = ({
  school,
  major,
  logo,
  degree,
  start_year,
  end_year,
  link,
  location,
  GPA,
}: EducationProps) => {
  const locale = useLocale();

  const endYearFormatted =
    end_year === "Present" || end_year === "Now"
      ? locale === "en"
        ? "Present"
        : "Sekarang"
      : end_year;

  return (
    <SpotlightCard className="flex items-start gap-5 p-6">
      {logo ? (
        <Image
          width={70}
          height={70}
          src={logo}
          alt={school}
          className="h-[70px] w-[70px] shrink-0 rounded-lg border-[1.5px] border-neutral-300 bg-white object-contain p-1 dark:border-neutral-700 dark:bg-neutral-800"
        />
      ) : (
        <CompanyIcon size={65} className="shrink-0 text-neutral-500" />
      )}

      <div className="space-y-1">
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <h6>{school}</h6>
          </a>
        ) : (
          <h6>{school}</h6>
        )}
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-col gap-1 md:flex-row md:gap-2">
            <span>{degree}</span>
            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span>{major}</span>
            {GPA && (
              <div className="flex gap-2">
                <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">
                  •
                </span>
                <span>GPA: </span>
                <span>{GPA}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1 text-[12px] md:flex-row md:gap-2">
            <span className="dark:text-neutral-500">
              {start_year} - {endYearFormatted}
            </span>
            <span className="hidden rounded-full text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default EducationCard;
