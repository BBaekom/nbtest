import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export interface NewsCardProps {
  id: string
  category: "notice" | "press"
  date: string
  title: string
  excerpt: string
}

export function NewsCard({ id, category, date, title, excerpt }: NewsCardProps) {
  return (
    <Link href={`/news/${id}`}>
      <Card className="group p-6 hover:shadow-lg transition-all duration-300 border">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted-foreground">{date}</p>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
          <div className="flex items-center text-primary text-sm font-medium mt-2">
            <span>자세히 보기</span>
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  )
}
