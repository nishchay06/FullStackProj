import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalLeaderboard from "./assets/components/GlobalLeaderboard.jsx"
import Landing from "./assets/components/Landing.jsx"
import NationalLeaderboard from "./assets/components/NationalLeaderboard.jsx"
import User from "./assets/components/User.jsx"

function App() {
  return (
    <BrowserRouter>
      <Landing />
      <Routes>
        <Route path='/landing' element={<Landing />} />
        <Route path='/global' element={<GlobalLeaderboard />} />
        <Route path='/national' element={<NationalLeaderboard />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
