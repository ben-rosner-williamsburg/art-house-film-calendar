import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface FilmCardProps {
  title: string
  director: string
  date: string
  time: string
  venue: string
  imageUrl: string
}

export function FilmCard({ title, director, date, time, venue, imageUrl }: FilmCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image src={imageUrl} alt={title} width={600} height={400} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Directed by {director}</p>
        <p className="mt-2">
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Time:</strong> {time}
        </p>
        <p>
          <strong>Venue:</strong> {venue}
        </p>
      </CardContent>
    </Card>
  )
}

