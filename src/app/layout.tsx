import type { Metadata } from "next";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import MobileStickyBar from "@/components/MobileStickyBar";
import ApplyModal from "@/components/ApplyModal";
import QuoteModal from "@/components/QuoteModal";

export const metadata: Metadata = {
  title: "D&V Services Portal",
  description:
    "D&V Services Inc. - Professional trucking and freight company based in Gurnee, IL. FTL, LTL, Flatbed, and Refrigerated shipping across all 48 contiguous US states since 2016.",
  openGraph: {
    title: "D&V Services Portal",
    description:
      "Professional trucking and logistics portal for D&V Services Inc., connecting shippers with reliable FTL, LTL, and refrigerated freight solutions across the United States.",
    url: "https://dv-fleet-flow.base44.app",
    siteName: "D&V Services Portal",
    type: "website",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "D&V Services Inc. - Professional Trucking & Freight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D&V Services Portal",
    description:
      "Professional trucking and logistics portal for D&V Services Inc., connecting shippers with reliable FTL, LTL, and refrigerated freight solutions across the United States.",
    images: ["/images/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-inter pb-20 lg:pb-0">
        {children}
        <BackToTop />
        <MobileStickyBar />
        <ApplyModal />
        <QuoteModal />
      </body>
    </html>
  );
}
