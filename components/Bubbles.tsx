"use client";

import { useEffect, useState } from "react";

type Bubble = {
  left: string;
  size: number;
  duration: string;
  delay: string;
};

function makeBubbles(count: number): Bubble[] {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    size: 6 + Math.random() * 22,
    duration: `${8 + Math.random() * 10}s`,
    delay: `${-Math.random() * 12}s`,
  }));
}

export default function Bubbles({ count = 16 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    setBubbles(makeBubbles(count));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="animate-rise absolute -bottom-10 rounded-full border border-white/45 bg-white/30"
          style={{
            left: b.left,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
