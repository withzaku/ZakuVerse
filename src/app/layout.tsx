import type { Metadata } from "next";
import { Suspense } from "react";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@/components/Analytics";
import { Clarity } from "@/components/Clarity";
import { AppShell } from "@/components/layout/AppShell";
import { absoluteUrl, createAlternates, createSocialImages, siteConfig } from "@/lib/seo";
import { createGlobalSchemaGraph, serializeSchema } from "@/lib/schema";
import "../styles/globals.css";

const fontSans = Montserrat({
  variable: "--font-sans-zv",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const defaultSocialImages = createSocialImages();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  icons: {
    icon: [
      { url: "/favico.png?v=20260419a", type: "image/png" },
    ],
    shortcut: "/favico.png?v=20260419a",
    apple: [{ url: "/favico.png?v=20260419a", type: "image/png" }],
    other: [
      { rel: "manifest", url: "/favicon_io/site.webmanifest" },
      { rel: "icon", url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
  publisher: siteConfig.name,
  category: "technology",
  alternates: createAlternates("/"),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: defaultSocialImages,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.creatorHandle,
    images: defaultSocialImages.map((image) => image.url),
  },
  verification: {
    google: "BCaGI_n10mMF2g0e4aN9UZxQ0oTOM252W2KF9RDl2FM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchemaGraph = createGlobalSchemaGraph();

  return (
    <html
      lang="en"
      className={`${fontSans.variable} dark`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <Script id="zakuverse-schema-graph" type="application/ld+json" strategy="beforeInteractive">
          {serializeSchema(globalSchemaGraph)}
        </Script>
      </head>
      <body className="min-h-screen bg-background text-white antialiased">
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Clarity />
        <AppShell>{children}</AppShell>
        <SpeedInsights />
      </body>
    </html>
  );
}
