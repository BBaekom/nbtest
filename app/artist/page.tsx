"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArtistCard } from "@/components/artist-card"
import { Button } from "@/components/ui/button"

const artists = [
  {
    id: "1",
    name: "고은성",
    nameEn: "Koh Eun Sung",
    role: "배우",
    imageUrl: "/korean-actor-portrait-professional.jpg",
  },
  {
    id: "2",
    name: "김태한",
    nameEn: "Kim Bitnam",
    role: "배우",
    imageUrl: "/placeholder-268s8.png",
  },
  {
    id: "3",
    name: "양민호",
    nameEn: "Edward Min",
    role: "배우",
    imageUrl: "/korean-actor-portrait-young-male.jpg",
  },
  {
    id: "4",
    name: "김애슬",
    nameEn: "Kim Joon Ha",
    role: "배우",
    imageUrl: "/placeholder-9v4u6.png",
  },
  {
    id: "5",
    name: "김준석",
    nameEn: "Kim Joon Sik",
    role: "배우",
    imageUrl: "/korean-actor-portrait-professional-male.jpg",
  },
  {
    id: "6",
    name: "김은호",
    nameEn: "Kim Sun Ho",
    role: "배우",
    imageUrl: "/korean-actor-portrait-white-shirt.jpg",
  },
  {
    id: "7",
    name: "박민준",
    nameEn: "Park Min Jun",
    role: "배우",
    imageUrl: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "8",
    name: "백거림",
    nameEn: "Baek Ki Hum",
    role: "배우",
    imageUrl: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "9",
    name: "손유동",
    nameEn: "Son Yoo Dong",
    role: "배우",
    imageUrl: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "10",
    name: "신윤희",
    nameEn: "Sin Eun Ho",
    role: "배우",
    imageUrl: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "11",
    name: "윤소희",
    nameEn: "Yoon Sohe",
    role: "배우",
    imageUrl: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "12",
    name: "윤예혁",
    nameEn: "Yoo Yea Baek",
    role: "배우",
    imageUrl: "/placeholder.svg?height=400&width=300",
  },
]

export default function ArtistPage() {
  const [activeTab, setActiveTab] = useState<"actor" | "creator">("actor")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const totalPages = Math.ceil(artists.length / itemsPerPage)

  const paginatedArtists = artists.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Tabs */}
          <div className="flex gap-8 mb-12 border-b border-border">
            <button
              onClick={() => setActiveTab("actor")}
              className={`pb-4 text-lg font-semibold transition-colors ${
                activeTab === "actor"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Actor
            </button>
            <button
              onClick={() => setActiveTab("creator")}
              className={`pb-4 text-lg font-semibold transition-colors ${
                activeTab === "creator"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Creator
            </button>
          </div>

          {/* Artists Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {paginatedArtists.map((artist) => (
              <ArtistCard key={artist.id} {...artist} />
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
