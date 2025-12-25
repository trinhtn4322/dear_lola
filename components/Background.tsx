
import React, { useEffect, useState } from 'react';

const Background: React.FC = () => {
  const [bubbles, setBubbles] = useState<{ id: number; left: string; size: string; duration: string; delay: string }[]>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 20 + 10}px`,
      duration: `${Math.random() * 5 + 5}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-gradient-to-b from-sky-400 via-blue-500 to-blue-800">
      {/* Snowflakes (Water style) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`snow-${i}`}
            className="absolute rounded-full bg-white blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Bubbles */}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}

      {/* Coral & Seaweed Decorations at Bottom */}
      <div className="absolute bottom-0 w-full h-32 flex justify-around items-end opacity-60">
        <div className="w-12 h-48 bg-emerald-600 rounded-t-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="w-16 h-32 bg-orange-500 rounded-t-full rotate-12 animate-float" style={{ animationDelay: '1s' }} />
        <div className="w-10 h-40 bg-pink-400 rounded-t-full -rotate-12 animate-float" style={{ animationDelay: '2s' }} />
        <div className="w-14 h-56 bg-emerald-500 rounded-t-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
};

export default Background;
