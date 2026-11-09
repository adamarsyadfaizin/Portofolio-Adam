"use client";

import { useTranslations } from "next-intl";
import { HiOutlineBriefcase as CareerIcon } from "react-icons/hi";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { CAREER_GROUPS } from "@/common/constants/carreers";

import CareerCard from "./CareerCard";

const CareerList = () => {
  const t = useTranslations("AboutPage.career");
  const visibleGroups = CAREER_GROUPS.filter((group) => group.isShow);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title={t("title")} icon={<CareerIcon />} />
        <SectionSubHeading>
          <p>{t("sub_title")}</p>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {visibleGroups.map((group) => (
          <CareerCard key={group.company} {...group} />
        ))}
      </div>
    </section>
  );
};

export default CareerList;
