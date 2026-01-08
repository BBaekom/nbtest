import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { ArtistCard } from "@/components/artist-card"
import { NewsCard } from "@/components/news-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Sample data - replace with actual data fetching
const heroSlides = [
  {
    id: "1",
    title: "은하철도의 밤",
    imageUrl: "/theater-production-poster-night-train.jpg",
  },
  {
    id: "2",
    title: "포쉬",
    imageUrl: "/theatrical-performance-poster-modern.jpg",
  },
  {
    id: "3",
    title: "보이즈인더밴드",
    imageUrl: "/boys-in-band-theater-poster-yellow.jpg",
  },
  {
    id: "4",
    title: "펑크록",
    imageUrl: "/punk-rock-theater-poster-red.jpg",
  },
]

const featuredProductions = [
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
]

const featuredArtists = [
  {
    id: "1",
    name: "고은성",
    nameEn: "Koh Eun Sung",
    imageUrl: "/korean-actor-portrait-professional.jpg",
  },
  {
    id: "2",
    name: "김태한",
    nameEn: "Kim Bitnam",
    imageUrl: "/placeholder-268s8.png",
  },
  {
    id: "3",
    name: "양민호",
    nameEn: "Edward Min",
    imageUrl: "/korean-actor-portrait-young-male.jpg",
  },
  {
    id: "4",
    name: "김애슬",
    nameEn: "Kim Joon Ha",
    imageUrl: "/placeholder-9v4u6.png",
  },
  {
    id: "5",
    name: "김준석",
    nameEn: "Kim Joon Sik",
    imageUrl: "/korean-actor-portrait-professional-male.jpg",
  },
  {
    id: "6",
    name: "김은호",
    nameEn: "Kim Sun Ho",
    imageUrl: "/korean-actor-portrait-white-shirt.jpg",
  },
]

const newsItems = [
  {
    id: "1",
    category: "notice",
    date: "2025.12.02",
    title: "2025-26 뮤지컬 <은하철도의 밤> 1차 티켓 오픈 안내",
    excerpt:
      "뮤지컬 <은하철도의 밤> 1차 티켓 오픈 안내입니다. 공연기간은 2025년 12월 23일(토) ~ 2026년 3월 9일(일)이며...",
  },
  {
    id: "2",
    category: "press",
    date: "2025.09.05",
    title: "연극 '보이즈 인 더 밴드', 배우 백석광 정상출연 등 개막 공지 공개 27일 개막",
    excerpt: "2025.09.05부터 10.23까지 공연 [더뮤지컬 김햇빛] 연극 '보이즈 인 더 밴드'가 9월 27일 개막한다...",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero Carousel */}
        <HeroCarousel slides={heroSlides} />

        {/* Notice Section */}
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Notice */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Notice</h2>
                  <Link href="/news?category=notice">
                    <Button variant="ghost" size="sm">
                      더보기 →
                    </Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {newsItems
                    .filter((item) => item.category === "notice")
                    .map((item) => (
                      <NewsCard key={item.id} {...item} />
                    ))}
                </div>
              </div>

              {/* Press */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Press</h2>
                  <Link href="/news?category=press">
                    <Button variant="ghost" size="sm">
                      더보기 →
                    </Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {newsItems
                    .filter((item) => item.category === "press")
                    .map((item) => (
                      <NewsCard key={item.id} {...item} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artist Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Artist</h2>
              <Link href="/artist">
                <Button variant="outline">전체보기</Button>
              </Link>
            </div>

            {/* Horizontal scrolling carousel on mobile, grid on desktop */}
            <div className="overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex md:grid md:grid-cols-6 gap-4 md:gap-6 pb-4 md:pb-0">
                {featuredArtists.map((artist) => (
                  <div key={artist.id} className="flex-shrink-0 w-40 md:w-auto">
                    <ArtistCard {...artist} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Actor's Studio Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Actor's Studio</h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">더블케이 연극학교</h3>
                <p className="text-primary-foreground/90 leading-relaxed mb-6">
                  더블케이 연극학교는 신인배우를 육성하는 교육기관이며, 연극 연기, 뮤지컬 연기, 카메라 연기 등
                  배우로서의 자질을 교육하는 공연계의 프로페셔널한 교육기관입니다. 또한 프로덕션입니다.
                </p>
                <Link href="/actors-studio">
                  <Button variant="secondary" size="lg">
                    자세히 보기
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-video bg-primary-foreground/10 rounded-lg overflow-hidden">
                <img src="/theater-students-group-photo.jpg" alt="Actor's Studio" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Instagram</h2>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">팔로우하기</Button>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                  <img
                    src={`/theater-performance-scene-.jpg?key=5qqle&height=300&width=300&query=theater+performance+scene+${i}`}
                    alt={`Instagram post ${i}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Section */}
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">YouTube</h2>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">구독하기</Button>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative aspect-video bg-background rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img
                    src={`/theater-video-thumbnail-.jpg?key=hzxdx&height=360&width=640&query=theater+video+thumbnail+${i}`}
                    alt={`YouTube video ${i}`}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
