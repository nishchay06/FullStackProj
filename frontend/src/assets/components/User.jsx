import axios from "axios"
import { useEffect, useState } from "react"

export default function User() {
  const id = "0bcf33e0-42da-40ab-98f2-0c737b6a714b"
  const path = "http://localhost:3000/user/"
  const [rank, setRank] = useState(0)
  const [user, setUser] = useState({})
  async function getData(url) {
    const response = await axios.get(url)
    const data = await response.data
    setRank(data.rank)
    setUser(data.user)
  }
  useEffect(() => {
    getData(path + id)
  }, [])
  return (
    <Render
      rank={rank}
      Name={user.Name}
      Score={user.score}
      Country={user.country}
    />
  )
}

function Render({ rank, Name, Score, Country }) {
  return (
    <div>
      <h1>User</h1>
      <p>Rank: {rank}</p>
      <p>Name: {Name}</p>
      <p>Score: {Score}</p>
      <p>Country: {Country}</p>
    </div>
  )
}
