import { useEffect, useState } from "react";

const generateParticles = (count) => {
  return Array.from({ length: count }).map(() => ({
    id: Math.random().toString(36).substring(2),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    speed: Math.random() * 0.2 + 0.1,
    direction: Math.random() * Math.PI * 2,
    opacity: Math.random() * 0.5 + 0.2,
    color: `rgb(${Math.floor(Math.random() * 55 + 200)}, ${Math.floor(
      Math.random() * 50
    )}, 0)`,
  }));
};

const QuantumParticles = ({ particleCount = 100 }) => {
  const [particles, setParticles] = useState(generateParticles(particleCount));

  useEffect(() => {
    const update = () => {
      setParticles((prev) =>
        prev.map((p) => {
          let x = p.x + Math.cos(p.direction) * p.speed;
          let y = p.y + Math.sin(p.direction) * p.speed;

          let direction = p.direction;
          if (x < 0 || x > 100) direction = Math.PI - direction;
          if (y < 0 || y > 100) direction = -direction;

          return { ...p, x, y, direction };
        })
      );
    };

    const interval = setInterval(update, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 3}px ${p.size}px rgba(${p.color
              .match(/\d+/g)
              .join(", ")}, 0.3)`,
          }}
        />
      ))}
    </div>
  );
};

export default QuantumParticles;
