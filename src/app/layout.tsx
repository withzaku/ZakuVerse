import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { AppShell } from "@/components/layout/AppShell";
import { absoluteUrl, createAlternates, createSocialImages, siteConfig } from "@/lib/seo";
import { createGlobalStructuredData, serializeJsonLd } from "@/lib/structuredData";
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
  const globalStructuredData = createGlobalStructuredData();
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

  return (
    <html
      lang="en"
      className={`${fontSans.variable} dark`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-white antialiased">
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="beforeInteractive"
            />
            <Script id="google-analytics" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
        {globalStructuredData.map((entry, index) => (
          <script
            key={`structured-data-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serializeJsonLd(entry) }}
          />
        ))}
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
