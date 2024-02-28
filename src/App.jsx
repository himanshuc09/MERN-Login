import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import Header from "./components/Header"

export default function App() {
  return <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
}
