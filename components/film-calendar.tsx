"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { filmScreenings } from "@/lib/mock-data"

export function FilmCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const screeningDates = filmScreenings.map(screening => new Date(screening.date))

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
      modifiers={{ hasScreening: screeningDates }}
      modifiersStyles={{
        hasScreening: { fontWeight: 'bold', backgroundColor: 'rgba(0, 100, 0, 0.1)' }
      }}
    />
  )
}

