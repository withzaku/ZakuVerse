"use client";

import { useRouter, usePathname } from "next/navigation";
import { navigateWithTransition } from "@/lib/pageTransition";

type TransitionLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onBeforeNavigate?: () => void;
};

export function TransitionLink({
  href,
  children,
  className,
  onBeforeNavigate,
}: TransitionLinkProps) {
  const router   = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (href === pathname) return;
    onBeforeNavigate?.();
    navigateWithTransition(href, (dest) => router.push(dest));
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
