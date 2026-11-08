import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

import Image from "@/common/components/elements/Image";
import { ProfileItem } from "@/common/types/tiktok";

function StatItem({ count, label }: { count: number; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-lg font-bold text-dark dark:text-light">
        {count.toLocaleString("id-ID")}
      </span>
      <span className="text-sm text-neutral-600 dark:text-neutral-300">
        {label}
      </span>
    </div>
  );
}

export default function ProfileHeader({
  avatar_large_url,
  follower_count,
  following_count,
  profile_deep_link,
  username,
  bio_description,
  display_name,
  likes_count,
  video_count,
}: ProfileItem) {
  const t = useTranslations("ContentsPage");
  const locale = useLocale();

  const followingLabel = locale === "en" ? "Following" : "Mengikuti";
  const followersLabel = locale === "en" ? "Followers" : "Pengikut";
  const likesLabel = locale === "en" ? "Likes" : "Suka";
  const videosLabel = locale === "en" ? "Videos" : "Video";

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row ">
        <Image
          src={avatar_large_url || "/images/tiktok/marga-avatar.png"}
          className="rounded-full object-cover border-2 border-neutral-300 dark:border-neutral-700 shadow-md"
          alt={display_name || "TikTok Profile"}
          width={120}
          height={120}
        />
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-wrap items-baseline gap-2">
            <h2 className="text-2xl font-bold text-primary">{display_name || "MARGA INFO"}</h2>
            <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              @{username?.replace(/^@/, "")}
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-5 py-2 md:grid-cols-4">
            <StatItem count={following_count} label={followingLabel} />
            <StatItem count={follower_count} label={followersLabel} />
            <StatItem count={likes_count} label={likesLabel} />
            <StatItem count={video_count} label={videosLabel} />
          </div>
          <p className="w-3/4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 md:w-full">
            {bio_description || "Edukasi teknologi, robot otomasi, dan wawasan terkini 🚀"}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 md:flex-col">
        <Image
          src={"/images/tiktok.png"}
          width={230}
          className="hidden rounded-lg bg-neutral-900 p-2 md:block"
          height={230}
          alt="Tiktok Icon"
        />
        <div className="flex flex-col items-center gap-2 md:items-end">
          <Link
            href={profile_deep_link || "https://www.tiktok.com/@mangat.info"}
            target="_blank"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-dark transition-all duration-300 hover:scale-105"
          >
            {t("open_tiktok")}
          </Link>
          <button className="text-[10px] text-neutral-600 dark:text-neutral-400">
            {t("view")}{" "}
            <Link
              href="https://www.tiktok.com/legal/page/row/privacy-policy/"
              target="_blank"
              className="underline transition duration-300 hover:text-dark dark:hover:text-light"
            >
              {t("privacy_policy")}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
