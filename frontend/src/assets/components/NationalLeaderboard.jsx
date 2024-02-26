import { useEffect, useState } from "react"
import axios from "axios"
import Entry from "./Entry"
import GetCountry from "./GetCountry"

export default function NationalLeaderboard() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCountry, setSelectedCountry] = useState("IN")

  async function getData() {
    try {
      const path = "http://localhost:3000/leaderboard/" + selectedCountry
      const res = await axios.get(path)
      setData(res.data)
    } catch (err) {
      console.error("Error fetching past week's data:", err)
      setData([])
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (selectedCountry) getData()
  }, [selectedCountry])

  return loading ? (
    <>Loading...</>
  ) : (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h1>National Leaderboard (All-Time)</h1>
        <GetCountry onSelect={setSelectedCountry} />
      </div>

      {data.map((entry) => {
        return <Entry {...entry} />
      })}
    </>
  )
}
