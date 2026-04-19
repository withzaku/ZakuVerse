import { gsap } from "gsap";
import { fadeIn, scaleIn, slideUp } from "@/lib/gsap";

type HeroIntroTargets = {
  root: HTMLElement;
  title: HTMLElement;
  subtitle: HTMLElement;
  cta: HTMLElement;
  scene: HTMLElement;
};

type HeroParallaxTargets = {
  root: HTMLElement;
  content: HTMLElement;
  scene: HTMLElement;
};

export function runHeroIntroAnimation(targets: HeroIntroTargets) {
  const tweens: gsap.core.Tween[] = [];

  tweens.push(
    fadeIn(targets.root, {
      duration: 1.1,
      ease: "power2.out",
    }),
  );

  tweens.push(
    slideUp(targets.title, {
      delay: 0.12,
      duration: 0.9,
    }),
  );

  tweens.push(
    slideUp(targets.subtitle, {
      delay: 0.22,
      duration: 0.9,
    }),
  );

  tweens.push(
    fadeIn(targets.scene, {
      delay: 0.18,
      duration: 1.15,
    }),
  );

  tweens.push(
    scaleIn(targets.cta, {
      delay: 0.4,
      duration: 0.82,
    }),
  );

  return () => {
    tweens.forEach((tween) => {
      tween.scrollTrigger?.kill();
      tween.kill();
    });
  };
}

export function setupHeroParallax({ root, content, scene }: HeroParallaxTargets) {
  if (
    typeof window === "undefined" ||
    !window.matchMedia("(pointer: fine)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return () => {};
  }

  const onPointerMove = (event: PointerEvent) => {
    const bounds = root.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    gsap.to(content, {
      x: x * 4,
      y: y * 3,
      duration: 1,
      ease: "power3.out",
      overwrite: true,
    });

    gsap.to(scene, {
      x: x * -6,
      y: y * -5,
      duration: 1.1,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const onPointerLeave = () => {
    gsap.to([content, scene], {
      x: 0,
      y: 0,
      duration: 1.1,
      ease: "power3.out",
      overwrite: true,
    });
  };

  root.addEventListener("pointermove", onPointerMove, { passive: true });
  root.addEventListener("pointerleave", onPointerLeave);

  return () => {
    root.removeEventListener("pointermove", onPointerMove);
    root.removeEventListener("pointerleave", onPointerLeave);
  };
}
