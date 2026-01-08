"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ActorsStudioPage() {
  const [activeTab, setActiveTab] = useState<"about" | "history" | "workshop">("about")

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
              onClick={() => setActiveTab("history")}
              className={`pb-4 text-lg font-semibold transition-colors ${
                activeTab === "history"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              History
            </button>
            <button
              onClick={() => setActiveTab("workshop")}
              className={`pb-4 text-lg font-semibold transition-colors ${
                activeTab === "workshop"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Workshop
            </button>
          </div>

          {/* Content */}
          {activeTab === "about" && (
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-8">Actor's Studio</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      더블케이 연극학교는 2016년 공연, 드라마 등 엔터테인먼트 콘텐츠 기획, 제작 및 매니지먼트를 목적으로
                      설립된 회사입니다. 뮤지컬 &#x3C;인터뷰&#x3E;, &#x3C;스모크&#x3E;, &#x3C;핸섬&#x3E; 등 양질의
                      뮤지컬 공연을 연극 &#x3C;여름&#x3E;, &#x3C;인형의집&#x3E;, &#x3C;시련&#x3E;, &#x3C;큰새&#x3E; 등
                      고전 연극부터 현대 작품까지 제작을 통해 제작실력을 쌓아왔습니다.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      공연을 넘는 배우들을 선택하는 박스 등장의 통신과 연극 아니도 연극 수는 연극을 이달과, 파악을 기술
                      현장을 이용록 소프네와 강식에 설정 장면네지 연극 페이지 선택을 수원네 프로덕트를 개발되고.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      더블케이 연극학교는 신인 연기자들의 육성 교육, 공연제작 창작공간 이자네셔 때래어 레전드에 있었네
                      연극의 무대를 교육을 고 있습니다.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Actor's Studio Group"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Actor's Studio Group Indoor"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Curriculum Section */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-foreground mb-8">신청자격</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>연극에 대한 열정과 연극배우, 뮤지컬, 영상배우, 공연제작자를 꿈꾸는 분</li>
                  <li>연기 전공은 물론 수료한 자발 기능</li>
                </ul>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-foreground mb-8">신청방법 및 일정</h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    * 모든 일정과 수업내용은 사정에 따라 변경될 수 있습니다.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">6-7월</h3>
                      <p className="text-sm text-muted-foreground">온라인 접수</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">7-8월</h3>
                      <p className="text-sm text-muted-foreground">면접 및 서류심사</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">8-9월</h3>
                      <p className="text-sm text-muted-foreground mb-2">실습 보입팅 (수시)</p>
                      <p className="text-xs text-muted-foreground">교육비 1/3 입금 후 시작하기</p>
                      <p className="text-xs text-muted-foreground">교육비 2/3 입금 후 시작하기</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">9-10월</h3>
                      <p className="text-sm text-muted-foreground">최종 전형</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">11-2월</h3>
                      <p className="text-sm text-muted-foreground">실습 및 공연</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">3월 이후</h3>
                      <p className="text-sm text-muted-foreground">
                        현장 연기 과정으로 이동
                        <br />
                        워크샵 참석 및 교육수연와
                        <br />
                        학습 종료
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "history" && (
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-8">History</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">연혁 내용이 여기에 표시됩니다.</p>
              </div>
            </div>
          )}

          {activeTab === "workshop" && (
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-8">Workshop</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">워크샵 정보가 여기에 표시됩니다.</p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
