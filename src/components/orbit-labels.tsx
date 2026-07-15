type OrbitItem = {
  name: string;
  color: string;
};

/** Positions a set of labels evenly around a circle, radiating from the center of a relatively-positioned parent. */
export function OrbitLabels({
  items,
  radiusPercent = 48,
}: {
  items: OrbitItem[];
  radiusPercent?: number;
}) {
  return (
    <>
      {items.map((item, i) => {
        const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2;
        const top = 50 + radiusPercent * Math.sin(angle);
        const left = 50 + radiusPercent * Math.cos(angle);
        const delay = `${(i % 5) * 0.5}s`;
        const drift = ["drift-a", "drift-b", "drift-c"][i % 3];
        const duration = ["7s", "8.5s", "9.5s"][i % 3];

        return (
          <div
            key={item.name}
            className="absolute flex items-center gap-2 whitespace-nowrap [transform:translate(-50%,-50%)]"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animation: `${drift} ${duration} ease-in-out infinite`,
              animationDelay: delay,
            }}
          >
            <span
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{ backgroundColor: item.color, boxShadow: `0 0 6px ${item.color}` }}
            />
            <span
              className="text-[10px] font-normal tracking-[0.22em]"
              style={{ color: item.color }}
            >
              {item.name.toUpperCase()}
            </span>
          </div>
        );
      })}
    </>
  );
}
