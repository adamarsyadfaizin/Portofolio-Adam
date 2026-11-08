export interface GlassIconProps {
  name: string;
  icon: JSX.Element;
  background: string;
  badge?: "app_dev" | "cyber_sec" | "both";
}

const GlassIcon: React.FC<GlassIconProps> = ({
  name,
  icon,
  background,
  badge,
}: GlassIconProps) => {
  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        aria-label={name}
        className="group relative h-[2.6em] w-[2.6em] bg-transparent outline-none [-webkit-tap-highlight-color:transparent] [perspective:24em] [transform-style:preserve-3d] md:h-[3em] md:w-[3em]"
      >
        {badge === "cyber_sec" && (
          <span className="absolute -right-2 -top-2 z-20 flex h-4 items-center rounded-full bg-red-600 px-1.5 text-[9px] font-bold text-white shadow-md ring-1 ring-white/20">
            Cyber
          </span>
        )}
        {badge === "app_dev" && (
          <span className="absolute -right-2 -top-2 z-20 flex h-4 items-center rounded-full bg-amber-400 px-1.5 text-[9px] font-bold text-neutral-900 shadow-md ring-1 ring-white/20">
            App
          </span>
        )}
        {badge === "both" && (
          <span className="absolute -right-2 -top-2 z-20 flex h-4 items-center rounded-full bg-gradient-to-r from-amber-400 to-red-500 px-1.5 text-[9px] font-bold text-white shadow-md ring-1 ring-white/20">
            Dual
          </span>
        )}

        <span
          className={`absolute left-0 top-0 block h-full w-full origin-[100%_100%] rotate-[15deg] rounded-[1.25em] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)] ${background}`}
        ></span>

        <span
          className="absolute left-0 top-0 flex h-full w-full origin-[80%_50%] transform rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] backdrop-blur-[0.75em] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] [-webkit-backdrop-filter:blur(0.75em)] group-hover:[transform:translateZ(2em)]"
          style={{
            boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
          }}
        >
          <span
            className="m-auto flex h-[1.5em] w-[1.5em] items-center justify-center"
            aria-hidden="true"
          >
            {icon}
          </span>
        </span>

        <span className="absolute left-0 right-0 top-full translate-y-0 whitespace-nowrap text-center text-xs leading-[2] opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover:opacity-100 group-hover:[transform:translateY(20%)]">
          {name}
        </span>
      </button>
    </div>
  );
};

export default GlassIcon;
