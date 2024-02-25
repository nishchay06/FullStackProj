import { useEffect, useState } from "react"
import axios from "axios"
import Entry from "./Entry"

export default function NationalLeaderboard() {
  const [data, setData] = useState([])
  async function getData() {
    const res = await axios.get("http://localhost:3000/leaderboard/" + "IN")
    return res.data
  }
  useEffect(() => {
    getData()
      .then((res) => {
        setData(res)
      })
      .catch((error) => {
        console.error(error)
        setData([])
      })
  }, [])
  return (
    <>
      <h1>National Leaderboard</h1>
      {data.map((entry) => {
        return <Entry {...entry} />
      })}
    </>
  )
}
