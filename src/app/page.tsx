"use client";

import Portfolio from "@/components/Portfolio";

export default function HomePage() {
  return <Portfolio />;
}

export const metadata = {
  title: "Portfolio Website",
  description: "Created by Matthew Yau.",
  openGraph: {
    title: "Portfolio Website",
    description: "Created by Matthew Yau.",
    url: "https://matthewyau.com",
    siteName: "Portfolio",
    locale: "en_US",
    type: "website",
  },
};
