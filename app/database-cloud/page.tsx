import type { Metadata } from "next";
import { DatabaseCloudSite } from "@/components/database-cloud-site";

export const metadata: Metadata = {
  title: "Saumitra Misra | Database & Cloud Engineering",
  description:
    "Database architecture, SQL systems, DBMS modeling, backend infrastructure, and cloud systems by Saumitra Misra.",
  keywords: [
    "Saumitra Misra",
    "Database Management",
    "SQL",
    "DBMS",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Cloud Engineering",
    "Google Cloud",
    "AWS",
    "GLA University",
  ],
  openGraph: {
    title: "Saumitra Misra | Database & Cloud Engineering",
    description:
      "I design, manage and work with databases, SQL systems, backend infrastructure and cloud technologies to build reliable and scalable applications.",
    images: ["/Assets/Heaven.png"],
  },
};

export default function DatabaseCloudPage() {
  return <DatabaseCloudSite />;
}
