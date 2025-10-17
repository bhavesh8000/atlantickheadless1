import { motion } from 'motion/react';

interface Bubble {
  id: number;
  size: number;
  duration: number;
  delay: number;
  x: string;
  opacity: number;
}

const bubbles: Bubble[] = [
  { id: 1, size: 80, duration: 20, delay: 0, x: '10%', opacity: 0.1 },
  { id: 2, size: 60, duration: 15, delay: 2, x: '20%', opacity: 0.08 },
  { id: 3, size: 100, duration: 25, delay: 4, x: '40%', opacity: 0.12 },
  { id: 4, size: 70, duration: 18, delay: 1, x: '60%', opacity: 0.09 },
  { id: 5, size: 90, duration: 22, delay: 3, x: '75%', opacity: 0.1 },
  { id: 6, size: 50, duration: 16, delay: 5, x: '85%', opacity: 0.07 },
  { id: 7, size: 110, duration: 28, delay: 2, x: '30%', opacity: 0.11 },
  { id: 8, size: 65, duration: 19, delay: 4, x: '50%', opacity: 0.08 },
];

export function FloatingBubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-primary to-[#e95f33]"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.x,
            bottom: -bubble.size,
            opacity: bubble.opacity,
          }}
          animate={{
            y: [0, -1200],
            x: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
