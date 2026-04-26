import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MascotContent from "./MascotContent";

export const metadata: Metadata = {
  title: "Nova — Mascot | Inceptus Omniforce",
  description:
    "Meet Nova, the AI Guardian of Inceptus Omniforce. Explore her lore, abilities, and the story behind the Omniforce symbol.",
  openGraph: {
    title: "Nova — Mascot | Inceptus Omniforce",
    description:
      "Meet Nova, the AI Guardian of Inceptus Omniforce — lore, abilities, and the story of the Omniforce symbol.",
    url: "https://www.inceptusomniforce.com/mascot",
  },
};

export default function MascotPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <MascotContent />
      <Footer />
    </main>
  );
}
