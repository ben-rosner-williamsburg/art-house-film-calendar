import { FilmCalendar } from "@/components/film-calendar"
import { FilmCard } from "@/components/film-card"
import { filmScreenings } from "@/lib/mock-data"

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">NYC Art House Film Calendar</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Calendar</h2>
          <FilmCalendar />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Screenings</h2>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {filmScreenings.map((film) => (
              <FilmCard key={film.id} {...film} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

