"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 pt-4 sm:pt-5">
      <Container>
        <div
          className={cn(
            "rounded-full border px-5 sm:px-6",
            "backdrop-blur-xl transition-all duration-500",
            isScrolled
              ? "border-primary/45 bg-black/80 shadow-[0_0_35px_rgba(51,221,102,0.16)]"
              : "border-primary/25 bg-[linear-gradient(90deg,rgba(51,221,102,0.12)_0%,rgba(0,0,0,0.72)_22%,rgba(0,0,0,0.72)_78%,rgba(51,221,102,0.12)_100%)]",
          )}
        >
          <div className="flex h-14 items-center justify-between">
            <TransitionLink href="/" className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-white" onBeforeNavigate={closeMenu}>
              ZakuVerse
            </TransitionLink>

            <nav className="hidden items-center gap-3 md:flex">
              {navItems.map((item, index) => (
                <div key={item.href} className="flex items-center gap-3">
                  <TransitionLink
                    href={item.href}
                    onBeforeNavigate={closeMenu}
                    className={cn(
                      "relative px-1 text-[1.08rem] font-medium transition-colors duration-300",
                      pathname === item.href
                        ? "text-white after:absolute after:-bottom-[0.82rem] after:left-0 after:h-[2px] after:w-full after:bg-primary after:content-['']"
                        : "text-white/74 hover:text-white",
                    )}
                  >
                    {item.label}
                  </TransitionLink>
                  {index < navItems.length - 1 ? <span className="text-primary/85">•</span> : null}
                </div>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="font-sans inline-flex h-9 items-center justify-center rounded-full border border-primary/35 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-primary md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              Menu
            </button>
          </div>

          <div
            className={cn(
              "grid overflow-hidden transition-all duration-300 md:hidden",
              isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <nav className="min-h-0 space-y-2 rounded-2xl border border-primary/30 bg-black/88 p-3 backdrop-blur-xl">
              {navItems.map((item) => (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  onBeforeNavigate={closeMenu}
                  className={cn(
                    "block rounded-xl border px-3 py-2 text-sm font-medium transition-colors duration-200",
                    pathname === item.href
                      ? "border-primary/55 bg-primary/12 text-white"
                      : "border-primary/20 text-white/80 hover:border-primary/45 hover:text-white",
                  )}
                >
                  {item.label}
                </TransitionLink>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
