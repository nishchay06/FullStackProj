import { useNavigate } from "react-router-dom"

export default function Landing() {
  const navigate = useNavigate()
  return (
    <>
      <button
        onClick={() => {
          navigate("/global")
        }}
      >
        Global Leaderboard
      </button>
      <button
        onClick={() => {
          navigate("/national")
        }}
      >
        National Leaderboard
      </button>
      <button
        onClick={() => {
          navigate("/user")
        }}
      >
        User
      </button>
    </>
  )
}
