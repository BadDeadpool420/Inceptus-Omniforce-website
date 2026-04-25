import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ProjectsGrid from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Inceptus Omniforce",
  description:
    "Browse all Inceptus Omniforce projects — AI tools, 3D experiences, and open-source utilities.",
  openGraph: {
    title: "Projects | Inceptus Omniforce",
    description:
      "Browse all Inceptus Omniforce projects — AI tools, 3D experiences, and open-source utilities.",
    url: "https://www.inceptusomniforce.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <ProjectsGrid />
      <Footer />
    </main>
  );
}
