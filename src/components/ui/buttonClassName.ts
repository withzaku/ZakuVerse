import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "gradient";
export type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border border-primary bg-primary text-black hover:bg-[#46ea78] hover:border-[#46ea78]",
  secondary: "border border-white/55 bg-transparent text-white hover:border-white/85 hover:bg-white/6",
  gradient: "border border-primary bg-primary text-black hover:bg-[#46ea78] hover:border-[#46ea78]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-[0.76rem]",
  md: "h-11 px-6 text-[0.78rem]",
  lg: "h-12 px-8 text-[0.82rem]",
};

export function buttonClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    "font-sans inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-[0.08em] transition-all duration-300 will-change-transform",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}
