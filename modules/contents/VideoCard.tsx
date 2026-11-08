"use client";

import Link from "next/link";
import { FiPlay as ViewIcon } from "react-icons/fi";
import Image from "@/common/components/elements/Image";
import { VideoItem } from "@/common/types/tiktok";

const formatViewCount = (count: number) => {
  return count.toLocaleString("id-ID");
};

export default function VideoCard({
  share_url,
  cover_image_url,
  width,
  height,
  view_count,
}: VideoItem) {
  return (
    <Link
      href={share_url || "https://www.tiktok.com/@mangat.info"}
      target="_blank"
      className="group relative block w-full overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md"
    >
      <Image
        src={cover_image_url}
        className="aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
        alt="TikTok Thumbnail"
        loading="lazy"
        width={width || 720}
        height={height || 1280}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="absolute bottom-2 left-2 flex items-center gap-1 font-medium text-white drop-shadow-md">
        <ViewIcon size={16} />
        <span className="text-sm font-semibold">
          {formatViewCount(view_count)}
        </span>
      </div>
    </Link>
  );
}
