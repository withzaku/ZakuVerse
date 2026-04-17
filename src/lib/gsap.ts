import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

let initialized = false;

export function initGSAP() {
  if (initialized || typeof window === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  initialized = true;
}

export function setupLenisScrollSync(lenis: Lenis) {
  initGSAP();

  const updateScrollTrigger = () => {
    ScrollTrigger.update();
  };

  const tickerCallback = (time: number) => {
    lenis.raf(time * 1000);
  };

  const refreshHandler = () => {
    lenis.resize();
    ScrollTrigger.update();
  };

  lenis.on("scroll", updateScrollTrigger);
  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);
  ScrollTrigger.addEventListener("refresh", refreshHandler);

  return () => {
    ScrollTrigger.removeEventListener("refresh", refreshHandler);
    gsap.ticker.remove(tickerCallback);
    lenis.off("scroll", updateScrollTrigger);
  };
}

export function fadeIn(target: gsap.TweenTarget, vars: gsap.TweenVars = {}) {
  initGSAP();

  return gsap.fromTo(
    target,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      duration: 0.95,
      ease: "power2.out",
      ...vars,
    },
  );
}

export function slideUp(target: gsap.TweenTarget, vars: gsap.TweenVars = {}) {
  initGSAP();

  return gsap.fromTo(
    target,
    { autoAlpha: 0, y: 18 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      ...vars,
    },
  );
}

export function stagger(targets: gsap.TweenTarget, vars: gsap.TweenVars = {}) {
  initGSAP();

  return gsap.fromTo(
    targets,
    { autoAlpha: 0, y: 18 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.95,
      ease: "power3.out",
      stagger: 0.14,
      ...vars,
    },
  );
}

export function scaleIn(target: gsap.TweenTarget, vars: gsap.TweenVars = {}) {
  initGSAP();

  return gsap.fromTo(
    target,
    { autoAlpha: 0, scale: 0.97 },
    {
      autoAlpha: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      ...vars,
    },
  );
}
