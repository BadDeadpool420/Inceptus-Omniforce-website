import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LearnContent from "./LearnContent";

export const metadata: Metadata = {
  title: "Learn AI | Inceptus Omniforce",
  description:
    "Master AI from first principles to deploying autonomous agents. Structured courses, hands-on labs, and curated resources for every level.",
  openGraph: {
    title: "Learn AI | Inceptus Omniforce",
    description:
      "Master AI from first principles to deploying autonomous agents — courses, labs, and resources for every level.",
    url: "https://www.inceptusomniforce.com/learn",
  },
};

export default function LearnPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LearnContent />
      <Footer />
    </main>
  );
}
