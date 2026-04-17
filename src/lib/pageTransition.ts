import gsap from "gsap";

let overlayEl: HTMLDivElement | null = null;
let isAnimating = false;

/** Called by PageTransitionOverlay on mount to register the DOM element */
export function registerTransitionOverlay(el: HTMLDivElement | null) {
  overlayEl = el;
}

/**
 * Smooth 3-step page transition:
 * 1. Overlay fades IN  (400ms) — page content hides
 * 2. router.push fires at the peak
 * 3. Brief paint delay (80ms), then overlay fades OUT (550ms)
 */
export function navigateWithTransition(
  href: string,
  push: (href: string) => void,
) {
  if (!overlayEl || isAnimating) {
    push(href);
    return;
  }

  isAnimating = true;

  gsap.fromTo(
    overlayEl,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      duration: 0.42,
      ease: "power2.inOut",
      onComplete: () => {
        push(href);

        /* Small delay lets the new page paint before we start the fade-out */
        setTimeout(() => {
          if (!overlayEl) return;
          gsap.to(overlayEl, {
            autoAlpha: 0,
            duration: 0.55,
            ease: "power2.inOut",
            onComplete: () => {
              isAnimating = false;
            },
          });
        }, 80);
      },
    },
  );
}
