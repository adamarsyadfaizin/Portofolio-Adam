"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  BsListCheck as ResponsibilityIcon,
  BsBuildings as CompanyIcon,
  BsLightbulb as LearnIcon,
} from "react-icons/bs";
import { HiChevronRight as ChevronIcon } from "react-icons/hi";
import { HiOutlineRocketLaunch as ImpactIcon } from "react-icons/hi2";
import { TbPinnedFilled as PinIcon } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import { format } from "date-fns";
import { id as idLocale, enUS as enLocale } from "date-fns/locale";

import SpotlightCard from "@/common/components/elements/SpotlightCard";
import { CareerProps } from "@/common/types/careers";

const CareerCard = ({
  position,
  company,
  logo,
  location,
  start_date,
  end_date,
  link,
  type,
  location_type,
  responsibilities,
  lessons_learned,
  impact,
  is_pinned,
  pin_tag,
}: CareerProps) => {
  const [isShowDetails, setIsShowDetails] = useState(false);

  const locale = useLocale();

  const startDate = new Date(start_date);
  const endDate = end_date ? new Date(end_date) : new Date();

  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;
  const durationYears = Math.floor(totalMonths / 12);
  const durationMonths = totalMonths % 12;

  const yearText =
    locale === "en" ? `yr${durationYears > 1 ? "s" : ""}` : "thn";
  const monthText =
    locale === "en" ? `mo${durationMonths > 1 ? "s" : ""}` : "bln";

  let durationText = "";
  if (durationYears > 0) {
    durationText += `${durationYears} ${yearText} `;
  }
  if (durationMonths > 0 || durationYears === 0) {
    durationText += `${durationMonths} ${monthText}`;
  }

  const hideText = locale === "en" ? "Hide" : "Sembunyikan";
  const showText = locale === "en" ? "Show" : "Tampilkan";
  const detailsText = locale === "en" ? "details" : "detail";

  const learnedLabel =
    locale === "en" ? "What I Learned" : "Apa yang saya pelajari";
  const impactLabel = locale === "en" ? "Impact" : "Dampak";
  const responsibilityLabel = locale === "en" ? "Responsibilities" : "Tugas";

  const dateFnsLocale = locale === "en" ? enLocale : idLocale;
  const startFormatted = format(startDate, "MMM yyyy", {
    locale: dateFnsLocale,
  });
  const endFormatted = end_date
    ? format(endDate, "MMM yyyy", { locale: dateFnsLocale })
    : locale === "en"
      ? "Present"
      : "Saat ini";

  const typeMap: Record<string, string> = {
    Contract: locale === "en" ? "Contract" : "Kontrak",
    Freelance: locale === "en" ? "Freelance" : "Pekerja Lepas",
    "Part-time": locale === "en" ? "Part-time" : "Paruh Waktu",
    "Full-time": locale === "en" ? "Full-time" : "Penuh Waktu",
    Internship: locale === "en" ? "Internship" : "Magang",
  };

  const locationTypeMap: Record<string, string> = {
    Hybrid: locale === "en" ? "Hybrid" : "Gabungan",
    Remote: locale === "en" ? "Remote" : "Jarak jauh",
    Onsite: locale === "en" ? "Onsite" : "Di lokasi",
  };

  const displayType = typeMap[type] || type;
  const displayLocationType = locationTypeMap[location_type] || location_type;

  return (
    <SpotlightCard className="relative flex flex-col items-start gap-5 p-6 sm:flex-row">
      {is_pinned && (
        <div className="absolute right-0 top-0 z-10 flex items-center gap-x-1 rounded-bl-lg rounded-tr-xl bg-primary px-2.5 py-1 text-xs font-semibold text-neutral-900 shadow-sm">
          <PinIcon size={14} className="shrink-0" />
          <span>{pin_tag || "Berkaitan dengan Application Development"}</span>
        </div>
      )}
      {logo ? (
        <Image
          width={60}
          height={60}
          src={logo}
          alt={company}
          className={`h-[60px] w-[60px] shrink-0 rounded-lg border-[1.5px] border-neutral-300 bg-white object-contain p-1 dark:border-neutral-700 dark:bg-neutral-800 ${is_pinned ? "mt-4 sm:mt-0" : ""}`}
        />
      ) : (
        <div
          className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-lg border-[1.5px] border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 ${is_pinned ? "mt-4 sm:mt-0" : ""}`}
        >
          <CompanyIcon size={32} className="text-neutral-500" />
        </div>
      )}

      <div className={`w-full space-y-1 ${is_pinned ? "pt-1 sm:pt-0 sm:pr-48 md:pr-0" : ""}`}>
        <h5>{position}</h5>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-col gap-2 md:flex-row">
            {link ? (
              <Link href={link} target="_blank">
                <span className="cursor-pointer hover:text-neutral-900 hover:underline hover:dark:text-neutral-50">
                  {company}
                </span>
              </Link>
            ) : (
              <span className="font-medium text-neutral-800 dark:text-neutral-200">
                {company}
              </span>
            )}
            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span>{location}</span>
          </div>

          <div className="flex flex-col gap-2 text-[13px] md:flex-row">
            <div className="flex gap-1 text-neutral-600 dark:text-neutral-400">
              <span>{startFormatted}</span> - <span>{endFormatted}</span>
            </div>

            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span className="text-neutral-500">{durationText}</span>

            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              {displayType}
            </span>

            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              {displayLocationType}
            </span>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setIsShowDetails(!isShowDetails)}
              className="-ml-1 flex items-center justify-center gap-x-1 transition duration-300 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-300"
            >
              <motion.span
                animate={{ rotate: isShowDetails ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="inline-block"
              >
                <ChevronIcon size={18} />
              </motion.span>
              <p className="text-sm font-medium">
                {isShowDetails ? hideText : showText} {detailsText}
              </p>
            </button>

            <AnimatePresence>
              {isShowDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 py-3 leading-normal text-neutral-600 dark:text-neutral-400">
                    {/* Responsibilities Section */}
                    {responsibilities && responsibilities.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 font-semibold text-primary">
                          <ResponsibilityIcon size={16} />
                          <span className="text-xs uppercase tracking-wider">
                            {responsibilityLabel}
                          </span>
                        </div>
                        <ul className="space-y-1 text-xs leading-relaxed opacity-90">
                          {responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="font-bold text-neutral-700 dark:text-neutral-300">
                                ✓
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Lessons Learned & Impact Grid */}
                    <div className="grid grid-cols-1 gap-4 dark:border-neutral-800 sm:grid-cols-2 md:mt-4 md:border-t md:border-neutral-200 md:pt-4">
                      {/* What I Learned */}
                      {lessons_learned && lessons_learned.length > 0 && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 font-semibold text-primary">
                            <LearnIcon size={16} />
                            <span className="text-xs uppercase tracking-wider">
                              {learnedLabel}
                            </span>
                          </div>
                          <ul className="space-y-1 text-xs leading-relaxed opacity-90">
                            {lessons_learned.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <span className="font-bold text-neutral-700 dark:text-neutral-300">
                                  ✓
                                </span>{" "}
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Impact */}
                      {impact && impact.length > 0 && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 font-semibold text-primary dark:text-primary">
                            <ImpactIcon size={16} />
                            <span className="text-xs uppercase tracking-wider ">
                              {impactLabel}
                            </span>
                          </div>
                          <ul className="space-y-1 text-xs leading-relaxed opacity-90">
                            {impact.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <span className="font-bold text-neutral-700 dark:text-neutral-300">
                                  ✓
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default CareerCard;
