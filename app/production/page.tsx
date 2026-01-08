"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductionCard } from "@/components/production-card"
import { Button } from "@/components/ui/button"

const productions = [
  {
    id: "1",
    title: "은하철도의 밤",
    year: "2025",
    category: "연극",
    imageUrl: "/theater-production-poster-night-train.jpg",
  },
  {
    id: "2",
    title: "어서 세븐의 법칙",
    subtitle: "2025 Carnival 20",
    year: "2025",
    category: "연극",
    imageUrl: "/theatrical-poster-abstract-silhouette.jpg",
  },
  {
    id: "3",
    title: "포쉬",
    year: "2025",
    category: "연극",
    imageUrl: "/theatrical-performance-poster-modern.jpg",
  },
  {
    id: "4",
    title: "보이즈인더밴드",
    year: "2025",
    category: "연극",
    imageUrl: "/boys-in-band-theater-poster-yellow.jpg",
  },
  {
    id: "5",
    title: "펑크록",
    year: "2025",
    category: "연극",
    imageUrl: "/punk-rock-theater-poster-red.jpg",
  },
  {
    id: "6",
    title: "시련",
    year: "2025",
    category: "연극",
    imageUrl: "/theatrical-drama-poster-forest-path.jpg",
  },
  {
    id: "7",
    title: "캠프 세븐",
    year: "2025",
    category: "연극",
    imageUrl: "/placeholder.svg?height=600&width=400",
  },
  {
    id: "8",
    title: "보이즈인더밴드",
    year: "2024",
    category: "연극",
    imageUrl: "/placeholder.svg?height=600&width=400",
  },
  {
    id: "9",
    title: "캠프",
    year: "2024",
    category: "연극",
    imageUrl: "/placeholder.svg?height=600&width=400",
  },
]

export default function ProductionPage() {
  const [activeTab, setActiveTab] = useState<"productions" | "management">("productions")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const totalPages = Math.ceil(productions.length / itemsPerPage)

  const paginatedProductions = productions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Tabs */}
          <div className="flex gap-8 mb-12 border-b border-border">
            <button
              onClick={() => setActiveTab("productions")}
              className={`pb-4 text-lg font-semibold transition-colors ${
                activeTab === "productions"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Our Productions
            </button>
            <button
              onClick={() => setActiveTab("management")}
              className={`pb-4 text-lg font-semibold transition-colors ${
                activeTab === "management"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              General Management
            </button>
          </div>

          {/* Productions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {paginatedProductions.map((production) => (
              <ProductionCard key={production.id} {...production} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              이전
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              다음
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
