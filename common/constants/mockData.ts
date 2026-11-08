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
    title: "CKG Helper Software — Healthcare Data Entry Automation System",
    slug: "ckg-helper",
    description:
      "Sistem otomatisasi berbasis Python dan Chrome Extension yang dikembangkan untuk mempercepat proses administrasi dan entri data massal bagi program Pemeriksaan Kesehatan Gratis (CKG) di Puskesmas Garum.",
    image: "/images/projects/ckg-helper.png",
    link_demo: "https://sehatindonesiaku.kemkes.go.id/",
    link_github: "https://github.com/adamarsyadfaizin/ckg-helper-releases/releases",
    stacks: ["Python", "Automation", "Chrome Extension"],
    content: `### Overview

CKG Helper Software adalah sistem otomatisasi yang dikembangkan untuk mempercepat proses administrasi dan entri data bagi program Pemeriksaan Kesehatan Gratis (CKG). Sistem ini memungkinkan staf untuk memproses data peserta secara massal menggunakan berkas Excel, kemudian mengotomatiskan pendaftaran serta penginputan hasil pemeriksaan ke dalam platform layanan CKG Kementerian Kesehatan.

Dengan demikian, staf medis tidak perlu lagi memasukkan data secara manual dan berulang untuk setiap peserta. CKG Helper mendukung layanan CKG Umum maupun CKG Sekolah, dirancang untuk menangani berbagai skenario data maupun kendala yang mungkin muncul selama proses entri data berlangsung.

### Fitur Utama
- **Batch Excel Processing:** Memproses ratusan data peserta secara massal langsung dari template berkas Excel.
- **Automated Registration & Results:** Mengotomatiskan registrasi pasien dan input hasil pemeriksaan secara akurat ke platform Sehat IndonesiaKu (ASIK).
- **Multi-Service Support:** Mendukung alur kerja CKG Umum dan CKG Sekolah dengan penyesuaian parameter dinamis.
- **Smart Error Handling:** Menangani berbagai skenario ketidaksesuaian data secara cerdas dan aman.

### Dampak
Mengurangi waktu penginputan hingga lebih dari 80%, mengeliminasi beban manual petugas fasilitas kesehatan primer, dan mencegah kesalahan pengetikan rekam medis.`,
    is_show: true,
    is_featured: true,
    featured_tag: "Real Case",
  },
  {
    id: 2,
    title: "CORDS APP — Fish Enumeration & Measurement",
    slug: "cords-app",
    description:
      "Aplikasi kecerdasan buatan berbasis Computer Vision dan Deep Learning untuk mendeteksi, mengklasifikasikan jenis ikan, serta mengestimasi ukuran tubuh ikan secara otomatis dan presisi melalui input visual.",
    image: "/images/projects/cords-app.png",
    link_demo: "",
    link_github: "",
    stacks: ["Python", "Computer Vision", "Data Processing/Automation", "AI"],
    content: `### Overview

CORDS APP adalah aplikasi berbasis kecerdasan buatan yang dirancang untuk mendeteksi dan mengklasifikasikan jenis ikan serta mengestimasi ukuran tubuh ikan secara otomatis melalui input gambar atau rekaman video real-time.

Aplikasi ini memanfaatkan teknologi Data Processing/Automation, Deep Learning, Computer Vision, serta teknologi pengembangan aplikasi lainnya untuk menghasilkan analisis ikan secara otomatis, efisien, dan terukur. Proyek ini dikembangkan bersama MLabs.

### Kemampuan Utama
- **Real-Time Fish Detection:** Model AI mendeteksi posisi ikan dan bounding box secara cepat pada live feed kolam/akuarium.
- **Species Classification:** Mengidentifikasi ragam jenis ikan secara otomatis (Koi, Ikan Mas, Goldfish, dll).
- **Automated Size Measurement:** Mengukur estimasi panjang tubuh ikan (dalam cm) tanpa kontak langsung.
- **Monitoring & Metrics Dashboard:** Menyajikan visualisasi data, penghitungan jumlah total ikan, serta ringkasan ukuran real-time.

### Status Repositori
Private Repository (MLabs).`,
    is_show: true,
    is_featured: true,
    featured_tag: "Real Case",
  },
  {
    id: 3,
    title: "SkinSight — Smart Skin Health Analysis",
    slug: "skinsight",
    description:
      "Aplikasi mobile berbasis Data Processing/Automation untuk mendeteksi dan mengidentifikasi permasalahan kulit wajah melalui pemindaian visual, dilengkapi treatment timeline serta pelacak progres perawatan.",
    image: "/images/projects/skinsight.png",
    link_demo: "",
    link_github: "https://github.com/orgs/SkinSight-DeteksiMasalahKulitWajah/repositories",
    stacks: ["Dart (Flutter)", "Flutter", "Data Processing/Automation", "Python"],
    content: `### Overview

SkinSight adalah aplikasi mobile berbasis data processing/automation yang dirancang untuk mendeteksi dan mengidentifikasi permasalahan kulit wajah melalui pemindaian visual. Proyek ini dikembangkan dalam lingkup riset terapan di Politeknik Negeri Malang.

Berdasarkan hasil pemindaian, aplikasi akan menyusun treatment timeline yang berisi rekomendasi perawatan serta tahapan perkembangan kondisi kulit untuk membantu pengguna memantau proses perbaikannya secara mandiri.

### Fitur Utama
- **Visual Skin Scanning:** Kuis singkat dan pemindaian foto wajah untuk menganalisis temuan visual kulit.
- **Treatment Timeline:** Rekomendasi tahapan perawatan terstruktur yang dipersonalisasi sesuai jenis kulit.
- **Skin Journey Tracker:** Grafik pemantauan berkala untuk mencatat dan mengevaluasi efektivitas perawatan kulit.
- **Modern Clean Interface:** Pengalaman pengguna yang nyaman dan responsif dibangun menggunakan Flutter.`,
    is_show: true,
    is_featured: true,
    featured_tag: "Berkaitan dengan Application Development",
  },
  {
    id: 4,
    title: "Ransomware Proof of Concept (PoC)",
    slug: "ransomware-poc",
    description:
      "Riset Proof of Concept (PoC) untuk mempelajari mekanisme enkripsi ransomware, perilaku payload, dan pengujian mitigasi keamanan siber di lingkungan sandbox terisolasi.",
    image: "/images/projects/ransomware-poc.png",
    link_demo: "",
    link_github: "https://github.com/adamarsyadfaizin/My-Collection-Malicious-Program",
    stacks: ["Python", "Cybersecurity", "Git & GitHub"],
    content: `### Overview

Membuat riset Proof of Concept (PoC) non-malicious untuk mempelajari mekanisme kerja ransomware dan pengujian keamanan siber di lingkungan terisolasi (sandbox).

### Ruang Lingkup Riset
- **Analisis Alur Enkripsi:** Mempelajari arsitektur kriptografi dan pertukaran kunci yang digunakan malware ransomware.
- **Pengujian Keamanan Endpoint:** Mengevaluasi efektivitas deteksi sistem proteksi dan perilaku payload saat runtime.
- **Strict Isolated Environment:** Seluruh aktivitas pengujian dijalankan pada virtual machine terisolasi tanpa akses jaringan eksternal untuk tujuan edukasi dan pertahanan siber.`,
    is_show: true,
    is_featured: true,
    featured_tag: "Berkaitan dengan CyberSec",
  },
  {
    id: 5,
    title: "Berlima Guest House — Room Booking Platform",
    slug: "berlima-guest-house",
    description:
      "Pengembangan website pemesanan kamar untuk Berlima Guest House di Kota Batu, Jawa Timur, sebagai solusi digital untuk mempermudah proses pemesanan kamar dan informasi reservasi.",
    image: "/images/projects/berlima-guest-house.png",
    link_demo: "",
    link_github: "https://github.com/adamarsyadfaizin/PBL-Team1",
    stacks: ["Laravel", "PHP", "HTML", "CSS", "JavaScript"],
    content: `### Overview

Pengembangan website pemesanan kamar untuk Berlima Guest House, sebuah usaha penginapan yang berlokasi di Kota Batu, Jawa Timur. Website ini dikembangkan sebagai solusi digital untuk mempermudah proses pemesanan kamar dan diperkenalkan langsung kepada pemilik usaha Berlima Guest House.

### Fitur Utama
- **Katalog Kamar Digital:** Menampilkan tipe kamar, tarif, dan fasilitas lengkap dengan tampilan visual yang menarik.
- **Sistem Reservasi:** Mempermudah calon tamu dalam merencanakan masa menginap dan memesan kamar secara langsung.
- **Desain Responsif:** Desain website yang adaptif dan cepat diakses melalui berbagai perangkat seluler dan desktop.`,
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
