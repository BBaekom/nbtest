import Link from "next/link"
import { Instagram, Youtube, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Opinion</h3>
            <p className="text-sm text-muted-foreground">(주)오피니언엔터테인먼트</p>
            <p className="text-sm text-muted-foreground mt-2">
              서울특별시 종로구 창경궁로 254
              <br />
              대표번호: 02-747-0507
              <br />
              팩스: 02-743-0509
              <br />
              이메일: dk@doublekint.com
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">바로가기</h4>
            <div className="flex flex-col gap-2">
              <Link href="/company" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                이용약관
              </Link>
              <Link href="/company" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                개인정보처리방침
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">소셜 미디어</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            Copyright © 2026 (주)오피니언엔터테인먼트. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
