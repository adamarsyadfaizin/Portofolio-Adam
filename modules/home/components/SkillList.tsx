"use client";

import { useState } from "react";
import { BiCodeAlt as SkillsIcon, BiCodeAlt as AppDevIcon } from "react-icons/bi";
import { RiShieldKeyholeFill as CyberIcon } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import GlassIcon from "@/common/components/elements/GlassIcon";
import { STACKS } from "@/common/constants/stacks";

const SKILL_ROLES: Record<string, "app_dev" | "cyber_sec" | "both"> = {
  PHP: "app_dev",
  JavaScript: "app_dev",
  Python: "both",
  "Dart (Flutter)": "app_dev",
  HTML: "app_dev",
  CSS: "app_dev",
  Laravel: "app_dev",
  PostgreSQL: "app_dev",
  MySQL: "app_dev",
  Firebase: "app_dev",
  "Git & GitHub": "both",
  Cybersecurity: "cyber_sec",
};

const SkillList = () => {
  const t = useTranslations("HomePage");
  const [activeFilter, setActiveFilter] = useState<"all" | "app_dev" | "cyber_sec">("all");

  const allActiveSkills: Array<[string, { icon: JSX.Element; background: string; badge: "app_dev" | "cyber_sec" | "both" }]> =
    Object.entries(STACKS)
      .filter(([, value]) => value.isActive)
      .map(([name, value]) => [
        name,
        {
          icon: value.icon,
          background: value.background,
          badge: SKILL_ROLES[name] || "app_dev",
        },
      ]);

  const filteredSkills = allActiveSkills.filter(([, value]) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "app_dev") {
      return value.badge === "app_dev" || value.badge === "both";
    }
    if (activeFilter === "cyber_sec") {
      return value.badge === "cyber_sec" || value.badge === "both";
    }
    return true;
  });

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title={t("skills.title")} icon={<SkillsIcon />} />
        <SectionSubHeading>
          <p>{t("skills.sub_title")}</p>
        </SectionSubHeading>
      </div>

      {/* Filter / Highlight Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
            activeFilter === "all"
              ? "bg-neutral-900 text-white shadow-sm dark:bg-neutral-100 dark:text-neutral-900"
              : "border border-neutral-300 bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
          }`}
        >
          <span>Semua</span>
          <span className="rounded-full bg-neutral-300/40 px-1.5 py-0.2 text-[10px] dark:bg-neutral-700">
            {allActiveSkills.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter("app_dev")}
          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
            activeFilter === "app_dev"
              ? "bg-amber-400 text-neutral-950 shadow-md dark:bg-amber-400 dark:text-neutral-950"
              : "border border-amber-400/40 bg-amber-500/10 text-amber-700 hover:bg-amber-400/20 dark:border-amber-400/30 dark:text-amber-300 dark:hover:bg-amber-400/20"
          }`}
        >
          <AppDevIcon size={15} />
          <span>Application Development</span>
          <span className="rounded-full bg-amber-400/30 px-1.5 py-0.2 text-[10px]">
            {allActiveSkills.filter(([, v]) => v.badge === "app_dev" || v.badge === "both").length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter("cyber_sec")}
          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
            activeFilter === "cyber_sec"
              ? "bg-red-600 text-white shadow-md dark:bg-red-600 dark:text-white"
              : "border border-red-500/40 bg-red-500/10 text-red-700 hover:bg-red-500/20 dark:border-red-500/30 dark:text-red-300 dark:hover:bg-red-500/20"
          }`}
        >
          <CyberIcon size={14} />
          <span>CyberSec</span>
          <span className="rounded-full bg-red-500/30 px-1.5 py-0.2 text-[10px]">
            {allActiveSkills.filter(([, v]) => v.badge === "cyber_sec" || v.badge === "both").length}
          </span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="grid w-full grid-cols-4 gap-x-[1.2em] gap-y-[2.7em] py-2 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6"
        >
          {filteredSkills.map(([name, { icon, background, badge }], index) => (
            <GlassIcon
              key={index}
              name={name}
              icon={icon}
              background={background}
              badge={badge}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default SkillList;
