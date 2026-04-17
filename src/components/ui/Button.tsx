"use client";

import { gsap } from "gsap";
import { useRef } from "react";
import { buttonClassName, type ButtonSize, type ButtonVariant } from "./buttonClassName";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  onPointerEnter,
  onPointerLeave,
  type = "button",
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handlePointerEnter: React.PointerEventHandler<HTMLButtonElement> = (event) => {
    onPointerEnter?.(event);
    if (!ref.current) {
      return;
    }
    gsap.to(ref.current, { y: -1, scale: 1.003, duration: 0.28, ease: "power2.out" });
  };

  const handlePointerLeave: React.PointerEventHandler<HTMLButtonElement> = (event) => {
    onPointerLeave?.(event);
    if (!ref.current) {
      return;
    }
    gsap.to(ref.current, { y: 0, scale: 1, duration: 0.28, ease: "power2.out" });
  };

  return (
    <button
      ref={ref}
      type={type}
      className={buttonClassName({ variant, size, className })}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      {...props}
    />
  );
}
