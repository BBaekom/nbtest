import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export interface ArtistCardProps {
  id: string
  name: string
  nameEn?: string
  role?: string
  imageUrl: string
}

export function ArtistCard({ id, name, nameEn, role, imageUrl }: ArtistCardProps) {
  return (
    <Link href={`/artist/${id}`}>
      <Card className="group overflow-hidden border-0 bg-card hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          {nameEn && <p className="text-xs text-muted-foreground mb-1">{nameEn}</p>}
          <h3 className="font-semibold text-foreground">{name}</h3>
          {role && <p className="text-sm text-muted-foreground mt-1">{role}</p>}
        </div>
      </Card>
    </Link>
  )
}
