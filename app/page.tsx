import ClientPage from "./ClientPage"

export const metadata = {
  title: "Palace Woodwork - Custom Woodworking Solutions",
  description:
    "Crafting excellence in wood since 2009. We offer custom furniture, kitchen cabinets, and commercial woodworking services worldwide.",
  keywords: ["woodworking", "custom furniture", "kitchen cabinets", "millwork", "commercial woodworking"],
  openGraph: {
    title: "Palace Woodwork - Custom Woodworking Solutions",
    description:
      "Crafting excellence in wood since 2009. We offer custom furniture, kitchen cabinets, and commercial woodworking services worldwide.",
    url: "https://www.palacewoodwork.com", // Replace with your actual URL
    images: ["/placeholder.svg?height=500&width=600"], // Replace with your actual image URL
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Add more metadata as needed (e.g., canonical URL, alternate language versions)
}

export default function HomePage() {
  return <ClientPage />
}
