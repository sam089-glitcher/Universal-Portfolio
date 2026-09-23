import type { Metadata } from "next";
import { DevelopmentSite } from "@/components/development-site";

export const metadata: Metadata = {
  title: "Saumitra Misra | Software Engineer & AI Enthusiast",
  description:
    "Software engineering, Java & Python development, full stack systems, and generative AI solutions by Saumitra Misra.",
  keywords: [
    "Saumitra Misra",
    "Software Engineer",
    "Java Developer",
    "Python Developer",
    "Full Stack Developer",
    "AI/ML",
    "Prompt Engineering",
    "Vertex AI",
    "GLA University",
  ],
  openGraph: {
    title: "Saumitra Misra | Software Engineer & AI Enthusiast",
    description:
      "Scalable web applications, backend systems, AI-powered solutions and developer-focused products using modern software technologies.",
    images: ["/Assets/Heaven.png"],
  },
};

export default function DevelopmentPage() {
  return <DevelopmentSite />;
}
