import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { format } from "date-fns";
import { id as idLocale, enUS as enLocale } from "date-fns/locale";
import { BsBuildings as CompanyIcon } from "react-icons/bs";
import { TbPinnedFilled as PinIcon } from "react-icons/tb";

import SpotlightCard from "@/common/components/elements/SpotlightCard";
import { CareerGroupProps, CareerProps } from "@/common/types/careers";

const parseMonth = (value: string) => {
  const [year, month] = value.split("-").map(Number);
  return new Date(year, month - 1, 1);
};

const getDurationInMonths = (start: string, end: string | null) => {
  const startDate = parseMonth(start);
  const endDate = end ? parseMonth(end) : new Date();

  return Math.max(
    1,
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      endDate.getMonth() -
      startDate.getMonth() +
      1,
  );
};

const formatDuration = (start: string, end: string | null, locale: string) => {
  const totalMonths = getDurationInMonths(start, end);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (locale === "en") {
    const yearText = years === 1 ? "yr" : "yrs";
    const monthText = months === 1 ? "mo" : "mos";
    return [
      years > 0 ? `${years} ${yearText}` : null,
      months > 0 || years === 0 ? `${months} ${monthText}` : null,
    ]
      .filter(Boolean)
      .join(" ");
  }

  return [
    years > 0 ? `${years} thn` : null,
    months > 0 || years === 0 ? `${months} bln` : null,
  ]
    .filter(Boolean)
    .join(" ");
};

const CareerCard = ({
  company,
  logo,
  location,
  location_type,
  type,
  start_date,
  end_date,
  link,
  positions,
  is_pinned,
  pin_tag,
  pin_tag_en,
}: CareerGroupProps) => {
  const locale = useLocale();
  const isEnglish = locale === "en";

  const typeMap: Record<string, string> = {
    Contract: isEnglish ? "Contract" : "Kontrak",
    Freelance: isEnglish ? "Freelance" : "Pekerja Lepas",
    "Part-time": isEnglish ? "Part-time" : "Paruh Waktu",
    "Full-time": isEnglish ? "Full-time" : "Purnawaktu",
    Internship: isEnglish ? "Internship" : "Magang",
  };
  const locationTypeMap: Record<string, string> = {
    Hybrid: isEnglish ? "Hybrid" : "Gabungan",
    Remote: isEnglish ? "Remote" : "Jarak jauh",
    Onsite: isEnglish ? "On-site" : "Di lokasi",
  };

  const displayType = type ? typeMap[type] || type : null;
  const displayLocationType = location_type
    ? locationTypeMap[location_type] || location_type
    : null;

  return (
    <SpotlightCard className="relative flex flex-col gap-5 p-5 sm:p-6">
      {is_pinned && (
        <div className="absolute right-0 top-0 flex max-w-[70%] items-center gap-1 rounded-bl-xl rounded-tr-xl bg-primary px-2.5 py-1 text-[10px] font-semibold text-neutral-900 sm:text-xs">
          <PinIcon size={13} className="shrink-0" />
          <span className="truncate">
            {(isEnglish ? pin_tag_en : pin_tag) ||
              (isEnglish
                ? "Application Development"
                : "Berkaitan dengan Application Development")}
          </span>
        </div>
      )}

      {/* Organization header */}
      <div className={`flex items-start gap-4 ${is_pinned ? "pt-4 sm:pt-2" : ""}`}>
        {logo ? (
          <Image
            width={56}
            height={56}
            src={logo}
            alt={`${company} logo`}
            className="h-12 w-12 shrink-0 rounded-lg border border-neutral-200 bg-white object-contain p-1 dark:border-neutral-700 dark:bg-neutral-800 sm:h-14 sm:w-14"
          />
        ) : (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 sm:h-14 sm:w-14">
            <CompanyIcon size={28} className="text-neutral-500" />
          </div>
        )}

        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {link ? (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-base font-semibold text-neutral-900 hover:underline dark:text-neutral-100 sm:text-lg"
              >
                {company}
              </Link>
            ) : (
              <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 sm:text-lg">
                {company}
              </h3>
            )}
          </div>

          <p className="text-xs text-neutral-500 dark:text-neutral-400 sm:text-sm">
            {displayType && (
              <>
                {displayType}
                <span className="px-1">·</span>
              </>
            )}
            {formatDuration(start_date, end_date, locale)}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 sm:text-sm">
            {displayLocationType && (
              <>
                {displayLocationType}
                <span className="px-1">·</span>
              </>
            )}
            {location}
          </p>
        </div>
      </div>

      {/* Position timeline */}
      <div className="relative ml-6 border-l border-neutral-200 pl-6 dark:border-neutral-700 sm:ml-7 sm:pl-8">
        {positions.map((position, index) => (
          <CareerPosition
            key={`${position.position}-${position.start_date}-${index}`}
            position={position}
            locale={locale}
            groupType={type}
            groupLocationType={location_type}
            isLast={index === positions.length - 1}
          />
        ))}
      </div>
    </SpotlightCard>
  );
};

const CareerPosition = ({
  position,
  locale,
  groupType,
  groupLocationType,
  isLast,
}: {
  position: CareerProps;
  locale: string;
  groupType?: string;
  groupLocationType?: "Onsite" | "Remote" | "Hybrid";
  isLast: boolean;
}) => {
  const isEnglish = locale === "en";
  const dateFnsLocale = isEnglish ? enLocale : idLocale;
  const startFormatted = format(parseMonth(position.start_date), "MMM yyyy", {
    locale: dateFnsLocale,
  });
  const endFormatted = position.end_date
    ? format(parseMonth(position.end_date), "MMM yyyy", { locale: dateFnsLocale })
    : isEnglish
      ? "Present"
      : "Saat ini";
  const sameMonth =
    Boolean(position.end_date) && position.start_date === position.end_date;
  const dateRange = sameMonth
    ? startFormatted
    : `${startFormatted} - ${endFormatted}`;

  const typeMap: Record<string, string> = {
    Contract: isEnglish ? "Contract" : "Kontrak",
    Freelance: isEnglish ? "Freelance" : "Pekerja Lepas",
    "Part-time": isEnglish ? "Part-time" : "Paruh Waktu",
    "Full-time": isEnglish ? "Full-time" : "Purnawaktu",
    Internship: isEnglish ? "Internship" : "Magang",
  };
  const locationTypeMap: Record<string, string> = {
    Hybrid: isEnglish ? "Hybrid" : "Gabungan",
    Remote: isEnglish ? "Remote" : "Jarak jauh",
    Onsite: isEnglish ? "On-site" : "Di lokasi",
  };
  const displayResponsibilities =
    isEnglish && position.responsibilities_en?.length
      ? position.responsibilities_en
      : position.responsibilities;
  const isCurrent = !position.end_date;

  return (
    <div className={`relative ${isLast ? "pb-0" : "pb-6 sm:pb-7"}`}>
      <span
        className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-[2.5px] border-white shadow-sm dark:border-neutral-900 sm:-left-[37px] ${isCurrent ? "bg-primary" : "bg-neutral-400 dark:bg-neutral-500"}`}
        aria-hidden="true"
      />

      <div className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="text-sm font-semibold leading-snug text-neutral-900 dark:text-neutral-100 sm:text-base">
            {position.position}
          </h4>
          {isCurrent && (
            <span className="rounded-md bg-sky-100 px-2 py-0.5 text-[10px] font-medium text-sky-800 dark:bg-sky-950/60 dark:text-sky-300">
              {isEnglish ? "Present" : "Saat ini"}
            </span>
          )}
        </div>

        <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-sm">
          {dateRange} <span className="px-1">·</span>
          {formatDuration(position.start_date, position.end_date, locale)}
        </p>
        {(position.type !== groupType ||
          position.location_type !== groupLocationType) && (
          <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-sm">
            {typeMap[position.type] || position.type}
            <span className="px-1">·</span>
            {locationTypeMap[position.location_type]}
          </p>
        )}

        {displayResponsibilities && displayResponsibilities.length > 0 && (
          <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-sm">
            {displayResponsibilities.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start gap-2">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CareerCard;
