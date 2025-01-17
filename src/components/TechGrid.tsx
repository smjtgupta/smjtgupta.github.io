import { TechIcon } from "./TechIcon";

export const TechGrid = ({
  items,
  className,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
}) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <div
          key={item.title}
          className="inline-flex items-center gap-2 py-2 px-1 outline outline-2 outline-white/10 rounded-lg hover:animate-pulse"
        >
          <TechIcon component={item.iconType} />
          <span className="font-semibold">{item.title}</span>
        </div>
      ))}
    </div>
  );
};
