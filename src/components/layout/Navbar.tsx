"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/methodology", label: "Methodology" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.5 17.5l1.57 1.57M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.5 6.5l1.57-1.57" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 1 0 11.5 11.5Z" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof document === "undefined") {
      return "light";
    }

    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

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

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(nextTheme);
    localStorage.setItem("zv-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <header className="sticky top-0 z-50 pt-4 sm:pt-5">
      <Container>
        <div
          className={cn(
            "rounded-full border px-5 sm:px-6",
            "backdrop-blur-xl transition-all duration-500",
            theme === "dark"
              ? isScrolled
                ? "border-primary/45 bg-black/80 shadow-[0_0_35px_rgba(51,221,102,0.16)]"
                : "border-primary/25 bg-[linear-gradient(90deg,rgba(51,221,102,0.12)_0%,rgba(0,0,0,0.72)_22%,rgba(0,0,0,0.72)_78%,rgba(51,221,102,0.12)_100%)]"
              : isScrolled
                ? "border-primary/45 bg-white/92 shadow-[0_0_30px_rgba(16,125,64,0.16)]"
                : "border-primary/30 bg-[linear-gradient(90deg,rgba(51,221,102,0.2)_0%,rgba(255,255,255,0.95)_20%,rgba(255,255,255,0.95)_80%,rgba(51,221,102,0.2)_100%)]",
          )}
        >
          <div className="flex h-14 items-center justify-between">
            <TransitionLink
              href="/"
              className={cn(
                "font-sans text-sm font-semibold uppercase tracking-[0.16em]",
                theme === "dark" ? "text-white" : "text-black",
              )}
              onBeforeNavigate={closeMenu}
            >
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
                        ? `${theme === "dark" ? "text-white" : "text-black"} after:absolute after:-bottom-[0.82rem] after:left-0 after:h-[2px] after:w-full after:bg-primary after:content-['']`
                        : theme === "dark"
                          ? "text-white/74 hover:text-white"
                          : "text-black/68 hover:text-black",
                    )}
                  >
                    {item.label}
                  </TransitionLink>
                  {index < navItems.length - 1 ? <span className="text-primary/85">•</span> : null}
                </div>
              ))}
              <button
                type="button"
                onClick={toggleTheme}
                className={cn(
                  "ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
                  theme === "dark"
                    ? "border-primary/35 text-white hover:border-primary"
                    : "border-primary/45 text-black hover:border-primary",
                )}
                aria-label="Toggle dark and light theme"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                <span className="sr-only">{theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}</span>
              </button>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={toggleTheme}
                className={cn(
                  "font-sans inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
                  theme === "dark"
                    ? "border-primary/35 text-white hover:border-primary"
                    : "border-primary/45 text-black hover:border-primary",
                )}
                aria-label="Toggle dark and light theme"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                <span className="sr-only">{theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={cn(
                  "font-sans inline-flex h-9 items-center justify-center rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
                  theme === "dark"
                    ? "border-primary/35 text-white hover:border-primary"
                    : "border-primary/45 text-black hover:border-primary",
                )}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                Menu
              </button>
            </div>
          </div>

          <div
            className={cn(
              "grid overflow-hidden transition-all duration-300 md:hidden",
              isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <nav
              className={cn(
                "min-h-0 space-y-2 rounded-2xl border p-3 backdrop-blur-xl",
                theme === "dark" ? "border-primary/30 bg-black/88" : "border-primary/30 bg-white/92",
              )}
            >
              {navItems.map((item) => (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  onBeforeNavigate={closeMenu}
                  className={cn(
                    "block rounded-xl border px-3 py-2 text-sm font-medium transition-colors duration-200",
                    pathname === item.href
                      ? theme === "dark"
                        ? "border-primary/55 bg-primary/12 text-white"
                        : "border-primary/55 bg-primary/15 text-black"
                      : theme === "dark"
                        ? "border-primary/20 text-white/80 hover:border-primary/45 hover:text-white"
                        : "border-primary/20 text-black/80 hover:border-primary/45 hover:text-black",
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
