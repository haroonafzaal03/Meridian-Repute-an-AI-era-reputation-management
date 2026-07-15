const nodes = [
  [60, 80],
  [180, 140],
  [150, 260],
  [320, 90],
  [430, 160],
  [560, 110],
  [670, 180],
  [400, 290],
  [260, 330],
  [540, 320],
  [670, 280],
  [120, 220],
  [620, 60],
] as const;

const edges = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [4, 7],
  [7, 8],
  [8, 2],
  [7, 9],
  [9, 10],
  [10, 6],
  [0, 11],
  [11, 2],
  [5, 12],
] as const;

/** Decorative constellation SVG used behind the testimonials and contact sections. */
export function NetworkGraph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 730 360"
      aria-hidden
      className={`pointer-events-none absolute opacity-40 [animation:network-drift_24s_ease-in-out_infinite] ${className}`}
    >
      <g stroke="var(--color-ink)" strokeWidth="0.6" opacity="0.35">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
          />
        ))}
      </g>
      <g fill="var(--color-ink)">
        {nodes.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.4" />
        ))}
      </g>
    </svg>
  );
}
