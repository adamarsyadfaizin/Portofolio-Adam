import { ProfileItem, VideoItem } from "@/common/types/tiktok";
import { ProjectItem } from "@/common/types/projects";
import { AchievementItem } from "@/common/types/achievements";
import { MessageProps } from "@/common/types/chat";

export const MOCK_TIKTOK_PROFILE: ProfileItem = {
  avatar_large_url: "/images/tiktok/marga-avatar.png",
  username: "mangat.info",
  display_name: "MARGA INFO",
  follower_count: 4417,
  following_count: 219,
  likes_count: 814,
  video_count: 15,
  bio_description:
    "Edukasi teknologi, robot otomasi, dan wawasan terkini 🚀 | MARGA INFO",
  profile_deep_link: "https://www.tiktok.com/@mangat.info",
};

export const MOCK_TIKTOK_VIDEOS: VideoItem[] = [
  {
    id: "v1",
    title: "in another life october 2026 Indonesia Qualified",
    cover_image_url: "/images/tiktok/v1.png",
    share_url: "https://www.tiktok.com/@mangat.info",
    embed_html: "",
    embed_link: "",
    width: 720,
    height: 1280,
    view_count: 292,
    like_count: 45,
    comment_count: 6,
    share_count: 3,
    create_time: Date.now() - 86400000 * 2,
  },
  {
    id: "v2",
    title: "2026 masih input manual CKG?, pake robot dong😅",
    cover_image_url: "/images/tiktok/v2.png",
    share_url: "https://www.tiktok.com/@mangat.info",
    embed_html: "",
    embed_link: "",
    width: 720,
    height: 1280,
    view_count: 1073,
    like_count: 128,
    comment_count: 14,
    share_count: 25,
    create_time: Date.now() - 86400000 * 4,
  },
  {
    id: "v3",
    title: "Hati-Hati Lur Penipuan👉",
    cover_image_url: "/images/tiktok/v3.png",
    share_url: "https://www.tiktok.com/@mangat.info",
    embed_html: "",
    embed_link: "",
    width: 720,
    height: 1280,
    view_count: 4312,
    like_count: 389,
    comment_count: 42,
    share_count: 65,
    create_time: Date.now() - 86400000 * 7,
  },
  {
    id: "v4",
    title: "Reaksi & Ekspresi Seru Seputar Teknologi",
    cover_image_url: "/images/tiktok/v4.png",
    share_url: "https://www.tiktok.com/@mangat.info",
    embed_html: "",
    embed_link: "",
    width: 720,
    height: 1280,
    view_count: 1017,
    like_count: 112,
    comment_count: 18,
    share_count: 12,
    create_time: Date.now() - 86400000 * 10,
  },
  {
    id: "v5",
    title: "Probabilitas Indonesia Gagal Memanfaatkan Bonus Demografi adalah sebesar 99% berdasarkan analisis resiko terukur dengan metode kuantitatif",
    cover_image_url: "/images/tiktok/v5.png",
    share_url: "https://www.tiktok.com/@mangat.info",
    embed_html: "",
    embed_link: "",
    width: 720,
    height: 1280,
    view_count: 1286,
    like_count: 145,
    comment_count: 21,
    share_count: 33,
    create_time: Date.now() - 86400000 * 14,
  },
  {
    id: "v6",
    title: "PSG VS INTER MILAN",
    cover_image_url: "/images/tiktok/v6.png",
    share_url: "https://www.tiktok.com/@mangat.info",
    embed_html: "",
    embed_link: "",
    width: 720,
    height: 1280,
    view_count: 6625,
    like_count: 610,
    comment_count: 54,
    share_count: 88,
    create_time: Date.now() - 86400000 * 20,
  },
];

export const MOCK_PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "CKG Helper — Healthcare Data Entry Automation",
    slug: "ckg-helper",
    description:
      "Tools automasi yang dikembangkan untuk membantu staf Puskesmas Garum dalam proses entri data Cek Kesehatan Gratis (CKG) melalui website Sehat Indonesiaku.",
    description_en:
      "An automation tool developed to help Puskesmas Garum staff with Free Health Check (CKG) data entry through the Sehat Indonesiaku website.",
    image: "/images/projects/ckg-helper.png",
    link_demo: "",
    link_github: "https://github.com/adamarsyadfaizin/ckg-helper-releases/releases",
    stacks: ["Python", "Automation"],
    content: `### Overview

CKG Helper adalah tools automasi yang dikembangkan untuk membantu staf Puskesmas Garum dalam proses entri data Cek Kesehatan Gratis (CKG) melalui website Sehat Indonesiaku.

### Tujuan

- Membantu staf dalam menjalankan proses entri data CKG.
- Mengotomatisasi bagian dari proses entri data yang berulang.
- Menyediakan solusi perangkat lunak berdasarkan kebutuhan operasional Puskesmas Garum.`,
    content_en: `### Overview

CKG Helper is an automation tool developed to help Puskesmas Garum staff with the Free Health Check (CKG) data-entry process through the Sehat Indonesiaku website.

### Goals

- Assist staff with the CKG data-entry process.
- Automate repetitive parts of data entry.
- Provide a software solution based on Puskesmas Garum's operational needs.`,
    is_show: true,
    is_featured: true,
    featured_tag: "Real Case",
  },
  {
    id: 2,
    title: "CORDS AI Application — Computer Vision for Fisheries",
    slug: "cords-app",
    description:
      "Berkontribusi dalam pengembangan aplikasi CORDS berbasis computer vision untuk platform perikanan cerdas, mencakup deteksi ikan, segmentasi, dan identifikasi spesies.",
    description_en:
      "Contributed to the CORDS computer vision application for a smart fisheries platform, covering fish detection, segmentation, and species identification.",
    image: "/images/projects/cords-app.png",
    link_demo: "",
    link_github: "",
    stacks: ["Python", "Computer Vision"],
    content: `### Overview

CORDS merupakan aplikasi berbasis computer vision untuk platform perikanan cerdas. Saya berkontribusi dalam pengembangan aplikasi ini sebagai Application Developer di MLabs.

### Ruang Lingkup Kontribusi

- Deteksi ikan.
- Segmentasi objek ikan.
- Identifikasi spesies ikan.

Repositori proyek bersifat privat.`,
    content_en: `### Overview

CORDS is a computer vision application for a smart fisheries platform. I contributed to its development as an Application Developer at MLabs.

### Contribution Areas

- Fish detection.
- Fish segmentation.
- Species identification.

The project repository is private.`,
    is_show: true,
    is_featured: true,
    featured_tag: "Professional Contribution",
  },
  {
    id: 3,
    title: "SkinSight — Smart Skin Health Analysis",
    slug: "skinsight",
    description:
      "Aplikasi mobile yang membantu mengidentifikasi permasalahan kulit wajah melalui pemindaian visual serta menyajikan timeline perawatan dan pemantauan progres.",
    description_en:
      "A mobile application that helps identify facial skin concerns through visual scanning and provides a treatment timeline and progress tracking.",
    image: "/images/projects/skinsight.png",
    link_demo: "",
    link_github: "https://github.com/orgs/SkinSight-DeteksiMasalahKulitWajah/repositories",
    stacks: ["Dart (Flutter)", "Flutter", "Python"],
    content: `### Overview

SkinSight adalah aplikasi mobile yang dikembangkan untuk membantu mengidentifikasi permasalahan kulit wajah melalui pemindaian visual. Hasil pemindaian digunakan sebagai dasar penyusunan timeline perawatan dan pemantauan progres kondisi kulit.

### Peran

Saya bertanggung jawab sebagai Project Manager, mengoordinasikan tim beranggotakan 5 orang, mengatur pembagian tugas, dan memantau progres pengembangan aplikasi.`,
    content_en: `### Overview

SkinSight is a mobile application designed to help identify facial skin concerns through visual scanning. Scan results are used to create a treatment timeline and monitor progress over time.

### Role

I serve as the Project Manager, coordinating a 5-member team, assigning tasks, and monitoring the application's development progress.`,
    is_show: true,
    is_featured: true,
    featured_tag: "Academic Project",
  },
  {
    id: 4,
    title: "Ransomware Proof of Concept (PoC)",
    slug: "ransomware-poc",
    description:
      "PoC untuk mempelajari mekanisme ransomware dan pengujian keamanan di lingkungan terisolasi.",
    description_en:
      "A proof of concept for studying ransomware mechanisms and security testing in an isolated environment.",
    image: "/images/projects/ransomware-poc.png",
    link_demo: "",
    link_github: "https://github.com/adamarsyadfaizin/My-Collection-Malicious-Program",
    stacks: ["Python", "Cybersecurity", "Git & GitHub"],
    content: `### Overview

Proyek Proof of Concept (PoC) untuk mempelajari mekanisme ransomware dan pengujian keamanan di lingkungan terisolasi.

Seluruh eksperimen dilakukan untuk tujuan pembelajaran pada lingkungan uji yang terkontrol.`,
    content_en: `### Overview

A proof of concept created to study ransomware mechanisms and security testing in an isolated environment.

All experiments are intended for learning and are conducted in a controlled test environment.`,
    is_show: true,
    is_featured: false,
  },
  {
    id: 5,
    title: "Berlima Guest House — Room Booking Platform",
    slug: "berlima-guest-house",
    description:
      "Pengembangan website Berlima Guest House sebagai proyek tim, dengan koordinasi pengembangan oleh Project Manager dan tim beranggotakan 4 orang.",
    description_en:
      "Development of the Berlima Guest House website as a team project, coordinated by a Project Manager with a 4-member team.",
    image: "/images/projects/berlima-guest-house.png",
    link_demo: "",
    link_github: "https://github.com/adamarsyadfaizin/PBL-Team1",
    stacks: ["Laravel", "PHP", "HTML", "CSS", "JavaScript"],
    content: `### Overview

Website Berlima Guest House dikembangkan sebagai proyek tim. Saya berperan sebagai Project Manager dengan mengoordinasikan 4 anggota tim, mengatur pembagian tugas, dan memantau progres pengembangan website.

### Tech Stack

- Laravel
- PHP
- HTML, CSS, dan JavaScript`,
    content_en: `### Overview

The Berlima Guest House website was developed as a team project. I served as Project Manager, coordinating 4 team members, assigning tasks, and monitoring the website development progress.

### Tech Stack

- Laravel
- PHP
- HTML, CSS, and JavaScript`,
    is_show: true,
    is_featured: false,
  },
  {
    id: 6,
    title: "APK Invitation Analysis",
    slug: "apk-invitation-analysis",
    description:
      "Reverse engineering APK undangan pernikahan mencurigakan untuk mempelajari struktur dan perilaku aplikasinya.",
    description_en:
      "Reverse engineering of a suspicious wedding invitation APK to study its structure and application behavior.",
    image: "/images/placeholder.webp",
    link_demo: "",
    link_github: "https://github.com/adamarsyadfaizin/APK-UNDANGAN-ANALYSIS",
    stacks: ["Reverse Engineering"],
    content: `### Overview

Analisis reverse engineering terhadap APK undangan pernikahan mencurigakan untuk mempelajari struktur internal dan perilaku aplikasinya.

Repositori: [APK-UNDANGAN-ANALYSIS](https://github.com/adamarsyadfaizin/APK-UNDANGAN-ANALYSIS).`,
    content_en: `### Overview

Reverse engineering analysis of a suspicious wedding invitation APK to study its internal structure and application behavior.

Repository: [APK-UNDANGAN-ANALYSIS](https://github.com/adamarsyadfaizin/APK-UNDANGAN-ANALYSIS).`,
    is_show: true,
    is_featured: false,
  },
];

export const MOCK_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 1,
    name: "Belajar Dasar AI",
    slug: "belajar-dasar-ai",
    issuing_organization: "Dicoding Indonesia",
    category: "Certification",
    type: "dicoding",
    credential_id: "53XEMQDK9PRN",
    url_credential: "https://www.dicoding.com/certificates/53XEMQDK9PRN",
    issue_date: "2026-10-27",
    expiration_date: "2029-10-27",
    image: "/images/achievements/dicoding-ai.png",
    is_show: true,
  },
  {
    id: 2,
    name: "Belajar Dasar Pemrograman Web",
    slug: "belajar-dasar-pemrograman-web",
    issuing_organization: "Dicoding Indonesia",
    category: "Certification",
    type: "dicoding",
    credential_id: "4EXGJKV0EXRL",
    url_credential: "https://www.dicoding.com/certificates/4EXGJKV0EXRL",
    issue_date: "2026-09-28",
    expiration_date: "2029-09-28",
    image: "/images/achievements/dicoding-web.png",
    is_show: true,
  },
  {
    id: 3,
    name: "UI/UX Design Bootcamp",
    slug: "ui-ux-design-bootcamp",
    issuing_organization: "SpecialSkill Indonesia",
    category: "Certification",
    type: "SpecialSkill",
    credential_id: "SSB50G044",
    url_credential: "https://specialskill.id/certificate/SSB50G044",
    issue_date: "2026-05-22",
    expiration_date: "2028-05-22",
    image: "/images/achievements/specialskill-uiux.png",
    is_show: true,
  },
  {
    id: 4,
    name: "Code Generation and Optimization Using IBM Granite",
    slug: "code-generation-and-optimization-using-ibm-granite",
    issuing_organization: "IBM",
    category: "Badge",
    type: "IBM",
    url_credential:
      "https://www.credly.com/org/ibm/badge/code-generation-and-optimization-using-ibm-granite",
    issue_date: "2025-05-15",
    image: "/images/achievements/ibm-granite.png",
    is_show: true,
  },
];

export const MOCK_ACHIEVEMENT_CATEGORIES = ["Certification", "Badge"];

export const MOCK_ACHIEVEMENT_TYPES = ["IBM", "SpecialSkill", "dicoding"];

export const MOCK_MESSAGES: MessageProps[] = [
  {
    id: "m-1",
    name: "Adam Arsyad",
    email: "adam@example.com",
    image: "/images/satria.jpg",
    message: "Halo! Selamat datang di website portofolio saya 🙌",
    created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
    is_show: true,
    is_reply: false,
  },
  {
    id: "m-2",
    name: "Visitor",
    email: "visitor@example.com",
    image: "https://api.dicebear.com/7.x/bottts/svg?seed=Visitor",
    message: "Keren banget websitenya! Tampilannya sangat responsif dan animasinya halus.",
    created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
    is_show: true,
    is_reply: false,
  },
];

export const MOCK_WAKATIME_STATS = {
  start_date: new Date(Date.now() - 7 * 86400000).toISOString(),
  end_date: new Date().toISOString(),
  last_update: new Date().toISOString(),
  best_day: {
    date: new Date(Date.now() - 2 * 86400000).toISOString().split("T")[0],
    text: "6 hrs 42 mins",
  },
  human_readable_daily_average: "4 hrs 15 mins",
  human_readable_total: "29 hrs 45 mins",
  languages: [
    { name: "TypeScript", percent: 45.2, text: "13 hrs 26 mins" },
    { name: "JavaScript", percent: 24.8, text: "7 hrs 22 mins" },
    { name: "CSS", percent: 14.5, text: "4 hrs 18 mins" },
    { name: "HTML", percent: 9.3, text: "2 hrs 46 mins" },
    { name: "JSON", percent: 4.1, text: "1 hr 13 mins" },
    { name: "Markdown", percent: 2.1, text: "37 mins" },
  ],
  editors: [
    { name: "VS Code", percent: 92.4, text: "27 hrs 30 mins" },
    { name: "Cursor", percent: 7.6, text: "2 hrs 15 mins" },
  ],
};

export const MOCK_WAKATIME_ALL_TIME = {
  text: "482 hrs 15 mins",
  total_seconds: 1736100,
};

export const MOCK_MONKEYTYPE_DATA = {
  username: "SatriaAxel",
  addedAt: 1690000000000,
  xp: 28450,
  typingStats: {
    completedTests: 1420,
    startedTests: 1650,
    timeTyping: 7420,
  },
  personalBests: {
    time: {
      "15": [{ wpm: 104.2, acc: 98.4, timestamp: Date.now() - 86400000 * 3 }],
      "30": [{ wpm: 98.7, acc: 97.9, timestamp: Date.now() - 86400000 * 8 }],
      "60": [{ wpm: 92.5, acc: 96.8, timestamp: Date.now() - 86400000 * 15 }],
      "120": [{ wpm: 86.1, acc: 95.2, timestamp: Date.now() - 86400000 * 25 }],
    },
    words: {
      "10": [{ wpm: 110.5, acc: 100.0, timestamp: Date.now() - 86400000 * 4 }],
      "25": [{ wpm: 101.3, acc: 98.1, timestamp: Date.now() - 86400000 * 10 }],
      "50": [{ wpm: 94.8, acc: 97.5, timestamp: Date.now() - 86400000 * 18 }],
      "100": [{ wpm: 88.2, acc: 96.0, timestamp: Date.now() - 86400000 * 30 }],
    },
  },
  allTimeLbs: {
    time: {
      "15": { rank: 1420, total: 54000, top: "2.6" },
      "60": { rank: 2150, total: 62000, top: "3.4" },
    },
  },
};

export const MOCK_CODEWARS_DATA = {
  id: "6af0221bf48cdca5c1c72c82",
  username: "adamarsyadfaizin",
  name: "adamarsyadfaizin",
  honor: 148,
  clan: "Indonesia",
  leaderboardPosition: 3820,
  skills: ["TypeScript", "JavaScript", "React"],
  ranks: {
    overall: {
      rank: -5,
      name: "5 kyu",
      color: "yellow",
      score: 340,
    },
    languages: {
      typescript: { rank: -5, name: "5 kyu", color: "yellow", score: 220 },
      javascript: { rank: -6, name: "6 kyu", color: "yellow", score: 120 },
    },
  },
  codeChallenges: {
    totalAuthored: 2,
    totalCompleted: 64,
  },
};

export const MOCK_UMAMI_STATS = {
  websiteStats: {
    pageviews: 14820,
    visitors: 5240,
    visits: 6890,
    countries: 28,
    events: 840,
  },
  pageviews: [
    { x: "2024-01-01", y: 450 },
    { x: "2024-01-02", y: 520 },
    { x: "2024-01-03", y: 610 },
    { x: "2024-01-04", y: 580 },
    { x: "2024-01-05", y: 740 },
    { x: "2024-01-06", y: 820 },
    { x: "2024-01-07", y: 910 },
  ],
  sessions: [
    { x: "2024-01-01", y: 210 },
    { x: "2024-01-02", y: 260 },
    { x: "2024-01-03", y: 310 },
    { x: "2024-01-04", y: 290 },
    { x: "2024-01-05", y: 370 },
    { x: "2024-01-06", y: 410 },
    { x: "2024-01-07", y: 460 },
  ],
};
