import { Route, Routes } from "react-router"
import { Home } from "./pages/index"
// import {Navbar } from "./pages/components/Navbar"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
