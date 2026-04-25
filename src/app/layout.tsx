import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inceptusomniforce.com"),
  title: "Inceptus Omniforce | AI & Project Hub",
  description:
    "The official hub for Inceptus Omniforce — a showcase of cutting-edge projects and an AI learning center. Currently under construction.",
  keywords: ["AI", "projects", "showcase", "learning", "technology", "Inceptus Omniforce"],
  authors: [{ name: "Inceptus Omniforce" }],
  openGraph: {
    title: "Inceptus Omniforce | AI & Project Hub",
    description: "A showcase of cutting-edge projects and an AI learning center.",
    url: "https://www.inceptusomniforce.com",
    siteName: "Inceptus Omniforce",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inceptus Omniforce | AI & Project Hub",
    description: "A showcase of cutting-edge projects and an AI learning center.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#020617] text-slate-200">{children}</body>
    </html>
  );
}
