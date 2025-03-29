"use client";

import React, { useRef, useState } from "react";

const DogWithParticles = () => {
  const [particles, setParticles] = useState<
    { x: number; y: number; id: number }[]
  >([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particleId = useRef(0);
  const lastSpawnTime = useRef(0);

  const spawnParticle = (x: number, y: number) => {
    const id = particleId.current++;
    setParticles((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 600);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastSpawnTime.current < 40) return;
    lastSpawnTime.current = now;

    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawnParticle(x, y);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-42 h-42 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg mb-6"
    >
      <img
        src="/images/heen.gif"
        alt="Heen"
        className="w-full h-full object-cover pointer-events-none"
      />

      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute text-sm animate-sparkle pointer-events-none select-none"
          style={{ left: p.x, top: p.y }}
        >
          ✨
        </span>
      ))}
    </div>
  );
};

export default DogWithParticles;
