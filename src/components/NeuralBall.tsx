"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export type NeuralBallMotion = {
  tiltX: number;
  tiltZ: number;
  floatShift: number;
  spinBoost: number;
};

type NeuralBallProps = {
  motionRef: React.MutableRefObject<NeuralBallMotion>;
};

export function NeuralBall({ motionRef }: NeuralBallProps) {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionMediaQuery.matches) {
      if (frameRef.current) {
        frameRef.current.style.transform = "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)";
      }
      return;
    }

    let rafId = 0;

    const animate = (time: number) => {
      if (frameRef.current) {
        const elapsed = time * 0.001;
        const motion = motionRef.current;

        /* Continuous Y spin — base + scroll-driven boost */
        const rotateY = elapsed * (22 + motion.spinBoost * 35);

        /* Scroll-driven X tilt (gives a "rolling into position" feel) */
        const rotateX = motion.tiltX * 14 + Math.sin(elapsed * 1.15) * 2.4;

        /* Continuous Z drift — slowly tilts for organic feel */
        const rotateZ = Math.sin(elapsed * 0.42) * (5 + motion.tiltZ * 12);

        /* Floating bob — sine wave + scroll-driven float shift */
        const bob = Math.sin(elapsed * 1.5) * 10 + motion.floatShift * 48;

        /* Subtle breathing scale */
        const scale = 1 + Math.sin(elapsed * 1.1) * 0.016;

        frameRef.current.style.transform =
          `translate3d(0, ${bob}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
      }

      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [motionRef]);

  return (
    <div className="relative h-full w-full [perspective:1200px]">
      <div
        ref={frameRef}
        className="relative h-full w-full will-change-transform"
      >
        <Image
          src="/hero/Hero_section_img-Photoroom.png"
          alt="ZakuVerse hero orb"
          fill
          priority
          className="object-contain drop-shadow-[0_0_60px_rgba(92,255,143,0.45)]"
          sizes="(max-width: 640px) 76vw, 52vw"
        />
      </div>
    </div>
  );
}
