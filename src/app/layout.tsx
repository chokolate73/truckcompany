import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D&V Services Portal",
  description:
    "D&V Services Inc. — Professional trucking and freight company based in Gurnee, IL. FTL, LTL, Flatbed, and Refrigerated shipping across all 48 contiguous US states since 2016.",
  openGraph: {
    title: "D&V Services Portal",
    description:
      "Professional trucking and logistics portal for D&V Services Inc., connecting shippers with reliable FTL, LTL, and refrigerated freight solutions across the United States.",
    url: "https://dv-fleet-flow.base44.app",
    siteName: "D&V Services Portal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D&V Services Portal",
    description:
      "Professional trucking and logistics portal for D&V Services Inc., connecting shippers with reliable FTL, LTL, and refrigerated freight solutions across the United States.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-inter">{children}</body>
    </html>
  );
}
