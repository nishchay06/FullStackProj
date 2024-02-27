import axios from "axios"
import { getName } from "country-list"
import { useEffect, useState } from "react"

export default function User() {
  const path = "http://localhost:3000/user/"
  const [id, setId] = useState(null)
  const [rank, setRank] = useState(0)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function getData(url) {
    try {
      const response = await axios.get(url)
      const data = await response.data
      setError(null)
      setRank(data.rank)
      setUser(data.user)
    } catch (error) {
      console.error(error)
      setError("No User Found...")
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    setLoading(true)
    getData(path + id)
  }, [id])
  return (
    <>
      {loading ? (
        <p>Loading... </p>
      ) : error ? (
        <>
          {id != null ? <p>{error}</p> : null}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h1>User</h1>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setId(e.target[0].value)
                }}
              >
                <input
                  style={{
                    position: "relative",
                    height: "30px",
                    width: "200px",
                    borderRadius: "5px",
                    border: "1px solid #000",
                    padding: "5px",
                    margin: "5px",
                  }}
                  type='text'
                  placeholder='Enter ID...'
                />
                <button
                  style={{
                    position: "relative",
                    height: "30px",
                    width: "200px",
                    borderRadius: "5px",
                    border: "1px solid #000",
                    padding: "5px",
                    margin: "5px",
                  }}
                  type='submit'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h1>User</h1>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setId(e.target[0].value)
                }}
              >
                <input
                  style={{
                    position: "relative",
                    height: "30px",
                    width: "200px",
                    borderRadius: "5px",
                    border: "1px solid #000",
                    padding: "5px",
                    margin: "5px",
                  }}
                  type='text'
                  placeholder='Enter ID...'
                />
                <button
                  style={{
                    position: "relative",
                    height: "30px",
                    width: "200px",
                    borderRadius: "5px",
                    border: "1px solid #000",
                    padding: "5px",
                    margin: "5px",
                  }}
                  type='submit'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <UserDetails
            rank={rank}
            name={user.Name}
            score={user.score}
            country={user.country}
          />
        </div>
      )}
    </>
  )
}

function UserDetails({ rank, name, score, country }) {
  return (
    <div>
      <p>Rank: {rank}</p>
      <p>Name: {name}</p>
      <p>Score: {score}</p>
      <p>Country: {getName(country)}</p>
    </div>
  )
}
