"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CompanyPage() {
  const [activeTab, setActiveTab] = useState<"about" | "ceo" | "contact">("about")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Tabs */}
          <div className="flex gap-8 mb-12 border-b border-border">
            <button
              onClick={() => setActiveTab("about")}
              className={`pb-4 text-lg font-semibold transition-colors ${
                activeTab === "about"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("ceo")}
              className={`pb-4 text-lg font-semibold transition-colors ${
                activeTab === "ceo"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              CEO
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`pb-4 text-lg font-semibold transition-colors ${
                activeTab === "contact"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Content */}
          {activeTab === "about" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block">
                      <svg viewBox="0 0 200 200" className="w-64 h-64">
                        <text x="50%" y="40%" textAnchor="middle" className="text-6xl font-bold fill-primary">
                          Opinion
                        </text>
                        <text x="50%" y="65%" textAnchor="middle" className="text-xl fill-primary">
                          ENTERTAINMENT
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    (주)오피니언엔터테인먼트는
                    <br />
                    참여과 소통으로 신뢰받는 콘텐츠를
                    <br />
                    만들어 나가겠습니다.
                  </h2>

                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      (주)오피니언엔터테인먼트(대표:김수은)는 2016년 공연, 드라마 등 엔터테인먼트 콘텐츠 기획, 제작 및
                      매니지먼트를 목적으로 설립된 회사입니다. 뮤지컬 &#x3C;인터뷰&#x3E;, &#x3C;스모크&#x3E;,
                      &#x3C;핸섬&#x3E;, &#x3C;더 개리슨&#x3E;, &#x3C;젠스미어&#x3E;, &#x3C;젠스&#x3E;, &#x3C;큰새&#x3E;
                      등 다양한 뮤지컬을 통해 작품 유치협력을 해왔습니다.
                    </p>

                    <p>
                      한편 매니지먼트를 통해 배우는 공연, 크리에이티브한 스태프들까지 다양한 분야에서 시너지를 낼 수
                      있는실적 있는 아티스트를 발굴하는 일에도 힘쓰고 있습니다. 또한 (주)오피니언엔터테인먼트는 2017년
                      뮤지컬 &#x3C;인터뷰&#x3E;의 오픈런트에 공연을 시작으로 &#x3C;돌아온드&#x3E; 멘션테일 공연, 뮤지컬
                      &#x3C;햄릿&#x3E;, &#x3C;인터뷰&#x3E;, &#x3C;스모크&#x3E;, &#x3C;핸스미어론림&#x3E; 인 예은다 중국
                      및 일본의 리이언스로 만들어 성시키기 위해 환급 전기 및 환급열을 해왔 시장에 소개하는 일에도 앞장서
                      있습니다.
                    </p>

                    <p>
                      2021년 6월 (주)더블케이엔터테인먼트에서 (주)오피니언엔터테인먼트로 사명을 바꾸며, 팀드라마, 영화
                      등 좀더 다양한 장르의 문화 콘텐츠 전문기업으로 사업을 확장해 나가고 있습니다.
                    </p>

                    <p>
                      앞으로도 (주)오피니언엔터테인먼트는 다양해지고 빠르게 변하는 엔터테인먼트 시장에서 가장 중요한
                      본질이 무엇인지 고민함이 고민하고, 관객들에게 신뢰를 줄 수 있는 문화콘텐츠를 만들어 나가는 일에
                      최선의 노력을 다하겠습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Partnership Section */}
              <div className="mt-20">
                <h3 className="text-2xl font-bold text-foreground mb-8">PARTNERSHIP WITH</h3>
                <div className="flex items-center justify-center p-12 bg-muted rounded-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">Partnership Logo</div>
                    <p className="text-sm text-muted-foreground">파트너사 로고가 여기에 표시됩니다</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ceo" && (
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-8">CEO</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">대표 인사말이 여기에 표시됩니다.</p>
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-8">Contact Us</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">오시는 길</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong>주소:</strong> 서울특별시 종로구 창경궁로 254
                    </p>
                    <p>
                      <strong>대표번호:</strong> 02-747-0507
                    </p>
                    <p>
                      <strong>팩스:</strong> 02-743-0509
                    </p>
                    <p>
                      <strong>이메일:</strong> dk@doublekint.com
                    </p>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
                  <p className="text-muted-foreground">지도가 여기에 표시됩니다</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
