import { useTranslations } from "next-intl";

const Copyright = () => {
  const t = useTranslations("Footer");

  return (
    <div className="flex flex-col items-center justify-center gap-0.5 text-center text-xs text-neutral-600 dark:text-neutral-400">
      <p className="font-semibold tracking-wider">{t("copyright_1")}</p>
      <span className="font-medium text-neutral-500 dark:text-neutral-500">{new Date().getFullYear()}</span>
      <p className="font-medium">{t("copyright_2")}</p>
    </div>
  );
};

export default Copyright;
