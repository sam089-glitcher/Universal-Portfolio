import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saumitra-misra.vercel.app"),
  title: "Saumitra Misra | Graphic Designer & UI Designer",
  description:
    "Portfolio of Saumitra Misra, a graphic designer, UI designer, frontend designer, and B.Tech CSE student at GLA University.",
  keywords: [
    "Saumitra Misra",
    "graphic designer",
    "UI designer",
    "frontend designer",
    "portfolio",
    "GLA University",
  ],
  openGraph: {
    title: "Saumitra Misra | Graphic Designer & UI Designer",
    description:
      "Bold visual systems, social creatives, UI design, frontend design, and event identities.",
    images: ["/Assets/Heaven.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background font-sans text-foreground">{children}</body>
    </html>
  );
}
