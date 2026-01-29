"use client";
import { motion } from "framer-motion"; // or "motion/react"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GhostSwarm({ count = 12 }: { count?: number }) {
  const [ghostData, setGhostData] = useState<any[]>([]);

  useEffect(() => {
    const data = Array.from({ length: count }).map(() => ({
      startY: Math.random() * 80,
      driftY: Math.random() * 80,
      duration: 10 + Math.random() * 15,
      size: 50 + Math.random() * 150,
    }));
    setGhostData(data);
  }, [count]);

  return (
    <>
      {ghostData.map((ghost, i) => (
        <motion.div
          // biome-ignore lint/suspicious/noArrayIndexKey: got nothing else
          key={i}
          className="absolute top-0 right-0 w-screen pointer-events-none"
          initial={{ x: "110vw", y: `${ghost.startY}vh`, opacity: 0 }}
          animate={{
            x: "40vw",
            opacity: [0.4, 0.2, 0],
            y: [null, `${ghost.driftY}vh`],
          }}
          transition={{
            duration: ghost.duration,
            repeat: Infinity,
            delay: i * 1,
            ease: "linear",
          }}
        >
          <Image
            src="/img/ghostbyte_logo_black.svg"
            alt="Ghost"
            width={ghost.size}
            height={ghost.size}
            className="grayscale opacity-50 "
          />
        </motion.div>
      ))}
    </>
  );
}
