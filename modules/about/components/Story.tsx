import Image from "@/common/components/elements/Image";
import { useTranslations } from "next-intl";

const Story = () => {
  const t = useTranslations("AboutPage");

  const paragraphData = [
    { index: 1 },
    { index: 2 },
    { index: 3 },
    { index: 4 },
  ];

  return (
    <section className="space-y-4 leading-7 text-neutral-800 dark:text-neutral-300">
      {paragraphData.map((paragraph) => {
        const text = t(`resume.paragraph_${paragraph.index}`);
        if (!text) return null;
        return <div key={paragraph.index}>{text}</div>;
      })}
      <div className="pt-2">
        <Image
          src="/images/signature.png"
          alt="Adam Arsyad"
          width={130}
          height={65}
          className="dark:invert dark:brightness-200"
        />
      </div>
    </section>
  );
};

export default Story;
