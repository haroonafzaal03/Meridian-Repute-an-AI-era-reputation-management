const verticalLines = [
  { left: "12%", height: "22vh", duration: "9s", delay: "0s", opacity: 0.6 },
  { left: "38%", height: "18vh", duration: "12s", delay: "3.5s", opacity: 0.5 },
  { left: "64%", height: "24vh", duration: "10.5s", delay: "6s", opacity: 0.55 },
  { left: "88%", height: "20vh", duration: "13.5s", delay: "1.8s", opacity: 0.45 },
];

const horizontalLines = [
  { top: "18%", width: "22vw", duration: "15s", delay: "2s", opacity: 0.5 },
  { top: "55%", width: "18vw", duration: "17s", delay: "7s", opacity: 0.45 },
  { top: "82%", width: "24vw", duration: "14s", delay: "4.5s", opacity: 0.5 },
];

const dots = [
  { top: "22%", left: "20%", duration: "4s", delay: "0.5s" },
  { top: "60%", left: "72%", duration: "5s", delay: "2s" },
  { top: "40%", left: "45%", duration: "6s", delay: "3.2s" },
  { top: "78%", left: "30%", duration: "4.5s", delay: "1.4s" },
  { top: "10%", left: "68%", duration: "5.5s", delay: "2.7s" },
];

/** Fixed, decorative background: drifting light streams, travelling pulse lines, flickering dots. */
export function AmbientEnergy() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-50 motion-reduce:hidden"
    >
      <div className="absolute -top-[20%] -left-[20%] h-[60%] w-[140%] [animation:stream-move_26s_ease-in-out_infinite] [background:linear-gradient(100deg,transparent_42%,rgba(26,26,26,0.035)_50%,transparent_58%)]" />
      <div className="absolute -right-[20%] -bottom-[20%] h-[60%] w-[140%] [animation:stream-move-2_32s_ease-in-out_infinite] [background:linear-gradient(100deg,transparent_44%,rgba(26,26,26,0.028)_50%,transparent_56%)]" />

      {verticalLines.map((l, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 w-px [animation:pulse-travel-v_linear_infinite] [background:linear-gradient(180deg,transparent,rgba(26,26,26,0.55),transparent)]"
          style={{
            left: l.left,
            height: l.height,
            animationDuration: l.duration,
            animationDelay: l.delay,
          }}
        />
      ))}

      {horizontalLines.map((l, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 h-px [animation:pulse-travel-h_linear_infinite] [background:linear-gradient(90deg,transparent,rgba(26,26,26,0.5),transparent)]"
          style={{
            top: l.top,
            width: l.width,
            animationDuration: l.duration,
            animationDelay: l.delay,
          }}
        />
      ))}

      {dots.map((d, i) => (
        <div
          key={`d-${i}`}
          className="absolute h-0.5 w-0.5 rounded-full bg-ink [animation:flicker_ease-in-out_infinite]"
          style={{
            top: d.top,
            left: d.left,
            animationDuration: d.duration,
            animationDelay: d.delay,
          }}
        />
      ))}
    </div>
  );
}
