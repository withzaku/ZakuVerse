import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="relative border-t border-primary/20 bg-black/92">
      <Container className="py-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="type-label text-white/72">ZakuVerse</p>
            <p className="mt-3 max-w-md text-sm text-white/62">Where Code, AI &amp; Biology Converge.</p>
          </div>
          <div className="font-sans flex items-center gap-6 text-sm font-medium text-white/72">
            <Link href="/about" className="transition-colors hover:text-white">
              About
            </Link>
            <Link href="/services" className="transition-colors hover:text-white">
              Services
            </Link>
            <Link href="/ai-search-optimization" className="transition-colors hover:text-white">
              AI SEO
            </Link>
            <Link href="/case-studies" className="transition-colors hover:text-white">
              Case Studies
            </Link>
            <Link href="/methology" className="transition-colors hover:text-white">
              Methology
            </Link>
            <Link href="/portfolio" className="transition-colors hover:text-white">
              Portfolio
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
