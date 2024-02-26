import { useEffect, useState } from "react"
import axios from "axios"
import Entry from "./Entry"
import { DayPicker } from "react-day-picker"
import { format } from "date-fns"
let footer = null
export default function GlobalLeaderboard() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date())

  const fetchPastWeeksData = async (date) => {
    try {
      const response = await axios.get("http://localhost:3000/leaderboard", {
        params: {
          selectedDate: format(date, "yyyy-MM-dd"),
        },
      })
      setData(response.data)
    } catch (error) {
      console.error("Error fetching past week's data:", error)
      setData([])
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (selectedDate) {
      fetchPastWeeksData(selectedDate)
      footer = <p>You picked {format(selectedDate, "PP")}.</p>
    }
  }, [selectedDate])

  const handleDateSelection = (date) => {
    setSelectedDate(date)
  }

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h1>Global Leaderboard</h1>
        <DayPicker
          mode='single'
          selected={selectedDate}
          onSelect={handleDateSelection}
          footer={footer}
        />
      </div>
      {data.map((entry) => (
        <Entry key={entry.UID} {...entry} />
      ))}
    </>
  )
}
