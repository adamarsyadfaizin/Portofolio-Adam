import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill, BsRobot, BsEye, BsGearFill } from "react-icons/bs";
import { TbBeach, TbBrandFramerMotion } from "react-icons/tb";
import { FaNpm, FaGolang } from "react-icons/fa6";
import {
  SiCss as SiCss3,
  SiExpress,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiLaravel,
  SiPhp,
  SiRedux,
  SiVuedotjs,
  SiFirebase,
  SiReactrouter,
  SiReacthookform,
  SiReacttable,
  SiMysql,
  SiMongodb,
  SiAstro,
  SiBun,
  SiYarn,
  SiNestjs,
  SiSupabase,
  SiJest,
  SiDocker,
  SiKotlin,
  SiJetpackcompose,
  SiZod,
  SiShadcnui,
  SiAxios,
  SiPython,
  SiDart,
  SiFlutter,
  SiGit,
  SiGooglechrome,
} from "react-icons/si";
import { RiShieldKeyholeFill } from "react-icons/ri";

export type SkillProps = {
  [key: string]: {
    icon: JSX.Element;
    background: string;
    color: string;
    isActive?: boolean;
  };
};

const iconSize = 26;

export const STACKS: SkillProps = {
  // --- User's Real Skills (Active) ---
  PHP: {
    icon: <SiPhp size={iconSize} />,
    background: "bg-indigo-600",
    color: "text-indigo-400",
    isActive: true,
  },
  JavaScript: {
    icon: <SiJavascript size={iconSize} />,
    background: "bg-yellow-400",
    color: "text-yellow-400",
    isActive: true,
  },
  Python: {
    icon: <SiPython size={iconSize} />,
    background: "bg-blue-600",
    color: "text-yellow-400",
    isActive: true,
  },
  "Dart (Flutter)": {
    icon: <SiFlutter size={iconSize} />,
    background: "bg-cyan-500",
    color: "text-cyan-400",
    isActive: true,
  },
  HTML: {
    icon: <SiHtml5 size={iconSize} />,
    background: "bg-orange-500",
    color: "text-orange-500",
    isActive: true,
  },
  CSS: {
    icon: <SiCss3 size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  Laravel: {
    icon: <SiLaravel size={iconSize} />,
    background: "bg-red-600",
    color: "text-red-600",
    isActive: true,
  },
  PostgreSQL: {
    icon: <BiLogoPostgresql size={iconSize} />,
    background: "bg-blue-600",
    color: "text-blue-500",
    isActive: true,
  },
  MySQL: {
    icon: <SiMysql size={iconSize} />,
    background: "bg-cyan-700",
    color: "text-cyan-700",
    isActive: true,
  },
  Firebase: {
    icon: <SiFirebase size={iconSize} />,
    background: "bg-amber-500",
    color: "text-amber-500",
    isActive: true,
  },
  "Git & GitHub": {
    icon: <SiGithub size={iconSize} />,
    background: "bg-slate-800",
    color: "text-neutral-50",
    isActive: true,
  },
  Git: {
    icon: <SiGit size={iconSize} />,
    background: "bg-orange-600",
    color: "text-orange-600",
    isActive: false,
  },
  GitHub: {
    icon: <SiGithub size={iconSize} />,
    background: "bg-slate-800",
    color: "text-neutral-50",
    isActive: false,
  },

  // --- Other Stacks (Inactive, preserved for project tags) ---
  Automation: {
    icon: <BsGearFill size={iconSize} />,
    background: "bg-teal-600",
    color: "text-teal-500",
    isActive: false,
  },
  "Chrome Extension": {
    icon: <SiGooglechrome size={iconSize} />,
    background: "bg-amber-600",
    color: "text-amber-500",
    isActive: false,
  },
  "Computer Vision": {
    icon: <BsEye size={iconSize} />,
    background: "bg-indigo-600",
    color: "text-indigo-400",
    isActive: false,
  },
  "Data Processing/Automation": {
    icon: <BsRobot size={iconSize} />,
    background: "bg-purple-600",
    color: "text-purple-400",
    isActive: false,
  },
  "Application Development": {
    icon: <SiJavascript size={iconSize} />,
    background: "bg-yellow-600",
    color: "text-yellow-400",
    isActive: false,
  },
  "Machine Learning": {
    icon: <BsRobot size={iconSize} />,
    background: "bg-purple-600",
    color: "text-purple-400",
    isActive: false,
  },
  Cybersecurity: {
    icon: <RiShieldKeyholeFill size={iconSize} />,
    background: "bg-red-600",
    color: "text-red-500",
    isActive: true,
  },

  Dart: {
    icon: <SiDart size={iconSize} />,
    background: "bg-sky-500",
    color: "text-sky-500",
    isActive: false,
  },
  Flutter: {
    icon: <SiFlutter size={iconSize} />,
    background: "bg-cyan-500",
    color: "text-cyan-400",
    isActive: false,
  },
  Bootstrap: {
    icon: <BsFillBootstrapFill size={iconSize} />,
    background: "bg-violet-600",
    color: "text-violet-600",
    isActive: false,
  },
  TailwindCSS: {
    icon: <SiTailwindcss size={iconSize} />,
    background: "bg-sky-400",
    color: "text-sky-400",
    isActive: false,
  },
  TypeScript: {
    icon: <SiTypescript size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: false,
  },
  "Vue.js": {
    icon: <SiVuedotjs size={iconSize} />,
    background: "bg-green-400",
    color: "text-green-400",
    isActive: false,
  },
  "React.js": {
    icon: <SiReact size={iconSize} />,
    background: "bg-cyan-400",
    color: "text-cyan-400",
    isActive: false,
  },
  Vite: {
    icon: <SiVite size={iconSize} />,
    background: "bg-purple-500",
    color: "text-purple-500",
    isActive: false,
  },
  "Astro.js": {
    icon: <SiAstro size={iconSize} />,
    background: "bg-violet-600",
    color: "text-violet-600",
    isActive: false,
  },
  "Shadcn UI": {
    icon: <SiShadcnui size={iconSize} />,
    background: "bg-neutral-800",
    color: "text-neutral-800",
    isActive: false,
  },
  "NextAuth.js": {
    icon: <RiShieldKeyholeFill size={iconSize} />,
    background: "bg-slate-800",
    color: "text-slate-800",
    isActive: false,
  },
  TanStack: {
    icon: <TbBeach size={iconSize} />,
    background: "bg-amber-500",
    color: "text-amber-500",
    isActive: false,
  },
  "React Table": {
    icon: <SiReacttable size={iconSize} />,
    background: "bg-rose-600",
    color: "text-rose-600",
    isActive: false,
  },
  "React Hook Form": {
    icon: <SiReacthookform size={iconSize} />,
    background: "bg-pink-500",
    color: "text-pink-500",
    isActive: false,
  },
  "React Router": {
    icon: <SiReactrouter size={iconSize} />,
    background: "bg-red-500",
    color: "text-red-500",
    isActive: false,
  },
  Axios: {
    icon: <SiAxios size={iconSize} />,
    background: "bg-violet-600",
    color: "text-violet-600",
    isActive: false,
  },
  Zod: {
    icon: <SiZod size={iconSize} />,
    background: "bg-blue-600",
    color: "text-blue-600",
    isActive: false,
  },
  "Framer Motion": {
    icon: <TbBrandFramerMotion size={iconSize} />,
    background: "bg-yellow-400",
    color: "text-yellow-400",
    isActive: false,
  },
  Redux: {
    icon: <SiRedux size={iconSize} />,
    background: "bg-violet-500",
    color: "text-violet-500",
    isActive: false,
  },
  Prisma: {
    icon: <SiPrisma size={iconSize} />,
    background: "bg-teal-500",
    color: "text-teal-500",
    isActive: false,
  },
  "Next.js": {
    icon: <SiNextdotjs size={iconSize} />,
    background: "bg-neutral-800",
    color: "text-neutral-50",
    isActive: false,
  },
  "Node.js": {
    icon: <SiNodedotjs size={iconSize} />,
    background: "bg-green-600",
    color: "text-green-600",
    isActive: false,
  },
  "Express.js": {
    icon: <SiExpress size={iconSize} />,
    background: "bg-neutral-800",
    color: "text-neutral-800",
    isActive: false,
  },
  "Nest.js": {
    icon: <SiNestjs size={iconSize} />,
    background: "bg-rose-600",
    color: "text-rose-600",
    isActive: false,
  },
  Go: {
    icon: <FaGolang size={iconSize} />,
    background: "bg-sky-500",
    color: "text-sky-500",
    isActive: false,
  },
  Kotlin: {
    icon: <SiKotlin size={iconSize} />,
    background: "bg-violet-600",
    color: "text-violet-600",
    isActive: false,
  },
  "Jetpack Compose": {
    icon: <SiJetpackcompose size={iconSize} />,
    background: "bg-cyan-800",
    color: "text-cyan-800",
    isActive: false,
  },
  PostgreSql: {
    icon: <BiLogoPostgresql size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: false,
  },
  MySql: {
    icon: <SiMysql size={iconSize} />,
    background: "bg-cyan-700",
    color: "text-cyan-700",
    isActive: false,
  },
  MongoDb: {
    icon: <SiMongodb size={iconSize} />,
    background: "bg-green-600",
    color: "text-green-600",
    isActive: false,
  },
  Supabase: {
    icon: <SiSupabase size={iconSize} />,
    background: "bg-emerald-500",
    color: "text-emerald-500",
    isActive: false,
  },
  Jest: {
    icon: <SiJest size={iconSize} />,
    background: "bg-pink-600",
    color: "text-pink-600",
    isActive: false,
  },
  Docker: {
    icon: <SiDocker size={iconSize} />,
    background: "bg-blue-600",
    color: "text-blue-500",
    isActive: false,
  },
  AI: {
    icon: <BsRobot size={iconSize} />,
    background: "bg-fuchsia-700",
    color: "text-fuchsia-700",
    isActive: false,
  },
  Npm: {
    icon: <FaNpm size={iconSize} />,
    background: "bg-red-700",
    color: "text-red-500",
    isActive: false,
  },
  Yarn: {
    icon: <SiYarn size={iconSize} />,
    background: "bg-violet-800",
    color: "text-sky-400",
    isActive: false,
  },
  bun: {
    icon: <SiBun size={iconSize} />,
    background: "bg-orange-100",
    color: "text-yellow-50",
    isActive: false,
  },
  Github: {
    icon: <SiGithub size={iconSize} />,
    background: "bg-slate-800",
    color: "text-neutral-50",
    isActive: false,
  },
};

STACKS["Tailwind CSS"] = STACKS.TailwindCSS;
STACKS["React"] = STACKS["React.js"];
STACKS["NextJS"] = STACKS["Next.js"];
STACKS["Nextjs"] = STACKS["Next.js"];

STACKS["CyberSec"] = STACKS.Cybersecurity;
STACKS["cybersec"] = STACKS.Cybersecurity;
STACKS["Keamanan siber"] = STACKS.Cybersecurity;
STACKS["Keamanan Siber"] = STACKS.Cybersecurity;
STACKS["Pengembangan Web"] = STACKS.HTML;
STACKS["Pengembangan Aplikasi"] = STACKS["Application Development"];
STACKS["Manajemen Proyek"] = STACKS.Git;

STACKS["Machine Learning"] = STACKS["Data Processing/Automation"];
STACKS["machine learning"] = STACKS["Data Processing/Automation"];
STACKS["application development"] = STACKS["Application Development"];
