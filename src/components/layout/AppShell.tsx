"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransitionOverlay } from "@/components/layout/PageTransitionOverlay";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 bg-black" />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(circle_at_8%_8%,rgba(51,221,102,0.22),rgba(0,0,0,0)_34%),radial-gradient(circle_at_92%_46%,rgba(41,214,99,0.25),rgba(0,0,0,0)_32%),radial-gradient(circle_at_28%_92%,rgba(39,146,73,0.12),rgba(0,0,0,0)_38%)]"
      />

      {/* overlay sits at z-40, below Navbar z-50 — header stays frozen */}
      <PageTransitionOverlay />

      {!isHome ? <Navbar /> : null}
      <main className="relative z-10 flex-1">{children}</main>
      {!isHome ? <Footer /> : null}
    </div>
  );
}
