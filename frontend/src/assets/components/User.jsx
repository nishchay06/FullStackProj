import axios from "axios"
import { getName } from "country-list"
import { useEffect, useState } from "react"

export default function User() {
  const id = "ed997299-d55d-4395-9d2e-cf0ed2372ae9"
  const path = "http://localhost:3000/user/"
  const [rank, setRank] = useState(0)
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  async function getData(url) {
    try {
      const response = await axios.get(url)
      const data = await response.data
      setRank(data.rank)
      setUser(data.user)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getData(path + id)
  }, [])
  return (
    <>
      {loading ? (
        <p>Loading... </p>
      ) : (
        <UserDetails
          rank={rank}
          name={user.Name}
          score={user.score}
          country={user.country}
        />
      )}
    </>
  )
}

function UserDetails({ rank, name, score, country }) {
  return (
    <div>
      <h1>User</h1>
      <p>Rank: {rank}</p>
      <p>Name: {name}</p>
      <p>Score: {score}</p>
      <p>Country: {getName(country)}</p>
    </div>
  )
}
