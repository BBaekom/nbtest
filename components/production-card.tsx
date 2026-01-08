import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export interface ProductionCardProps {
  id: string
  title: string
  subtitle?: string
  year: string
  imageUrl: string
  category?: string
}

export function ProductionCard({ id, title, subtitle, year, imageUrl, category }: ProductionCardProps) {
  return (
    <Link href={`/production/${id}`}>
      <Card className="group overflow-hidden border-0 bg-card hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-[2/3] overflow-hidden bg-muted">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          {category && <p className="text-xs text-muted-foreground mb-1">{category}</p>}
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          {subtitle && <p className="text-sm text-muted-foreground mb-1">{subtitle}</p>}
          <p className="text-sm text-muted-foreground">{year}</p>
        </div>
      </Card>
    </Link>
  )
}
