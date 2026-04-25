import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inceptus Omniforce | AI & Project Hub",
  description:
    "The official hub for Inceptus Omniforce — a showcase of cutting-edge projects and an AI learning center. Currently under construction.",
  keywords: ["AI", "projects", "showcase", "learning", "technology", "Inceptus Omniforce"],
  authors: [{ name: "Inceptus Omniforce" }],
  openGraph: {
    title: "Inceptus Omniforce | AI & Project Hub",
    description: "A showcase of cutting-edge projects and an AI learning center.",
    type: "website",
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
