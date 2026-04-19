"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  ctaLabel: string;
  page: string;
};

export function TrackedLink({ href, className, children, ctaLabel, page }: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackCTAClick(ctaLabel, page);
      }}
    >
      {children}
    </Link>
  );
}
