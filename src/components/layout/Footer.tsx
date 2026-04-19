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
          <div className="font-sans flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-white/72">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-white">
              About
            </Link>
            <Link href="/services" className="transition-colors hover:text-white">
              Services
            </Link>
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>
            <Link href="/tools" className="transition-colors hover:text-white">
              Tools
            </Link>
            <Link href="/ai-search-optimization" className="transition-colors hover:text-white">
              AI SEO
            </Link>
            <Link href="/case-studies" className="transition-colors hover:text-white">
              Case Studies
            </Link>
            <Link href="/methodology" className="transition-colors hover:text-white">
              Methodology
            </Link>
            <Link href="/resources" className="transition-colors hover:text-white">
              Resources
            </Link>
            <Link href="/testimonials" className="transition-colors hover:text-white">
              Testimonials
            </Link>
            <Link href="/about/sikandar" className="transition-colors hover:text-white">
              Author
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

