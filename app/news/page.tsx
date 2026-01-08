"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsCard } from "@/components/news-card"
import { Button } from "@/components/ui/button"

const newsItems = [
  {
    id: "1",
    category: "notice",
    date: "2025.12.02",
    title: "2025-26 뮤지컬 <은하철도의 밤> 1차 티켓 오픈 안내",
    excerpt:
      "뮤지컬 <은하철도의 밤> 1차 티켓 오픈 안내입니다. 공연기간은 2025년 12월 23일(토) ~ 2026년 3월 9일(일)이며, 뮤지컬 <은하철도의 밤> 최고의 지지를 보내주신 관객분들께 감사드리며...",
  },
  {
    id: "2",
    category: "press",
    date: "2025.09.05",
    title: "연극 '보이즈 인 더 밴드', 배우 백석광 정상출연 등 개막 공지 공개 27일 개막",
    excerpt:
      "2025.09.05부터 10.23까지 공연 [더뮤지컬 김햇빛] 연극 '보이즈 인 더 밴드'가 9월 27일 개막한다. 제작사 오피니언 엔터테인먼트는 이번 공연에서...",
  },
  {
    id: "3",
    category: "notice",
    date: "2025.08.15",
    title: "뮤지컬 <포쉬> 캐스팅 공지",
    excerpt: "뮤지컬 <포쉬>의 캐스팅 소식을 전해드립니다. 이번 공연에는 실력파 배우들이 대거 참여하여...",
  },
  {
    id: "4",
    category: "press",
    date: "2025.07.20",
    title: "오피니언엔터테인먼트, 하반기 라인업 공개",
    excerpt: "오피니언엔터테인먼트가 2025년 하반기 공연 라인업을 공개했다. 화제작들이 대거 포함되어 있어...",
  },
]

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "notice" | "press">("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 7

  const filteredNews =
    activeCategory === "all" ? newsItems : newsItems.filter((item) => item.category === activeCategory)

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const paginatedNews = filteredNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-8">News</h1>

          {/* Category Filter */}
          <div className="flex gap-4 mb-12">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => {
                setActiveCategory("all")
                setCurrentPage(1)
              }}
            >
              전체
            </Button>
            <Button
              variant={activeCategory === "notice" ? "default" : "outline"}
              onClick={() => {
                setActiveCategory("notice")
                setCurrentPage(1)
              }}
            >
              공지사항
            </Button>
            <Button
              variant={activeCategory === "press" ? "default" : "outline"}
              onClick={() => {
                setActiveCategory("press")
                setCurrentPage(1)
              }}
            >
              보도자료
            </Button>
          </div>

          {/* News List */}
          <div className="space-y-4 mb-12">
            {paginatedNews.map((item) => (
              <NewsCard key={item.id} {...item} />
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
