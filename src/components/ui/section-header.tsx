interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
        {title}
      </h2>
      <p className="text-[#8888a0] text-lg">{subtitle}</p>
    </div>
  );
}
