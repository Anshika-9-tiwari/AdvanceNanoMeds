type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
};

export default function SectionHeading({ eyebrow, title, text, centered = false }: Props) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <div className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-primary">{eyebrow}</div>}
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 opacity-70">{text}</p>}
    </div>
  );
}
