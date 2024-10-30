import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Homepage from "./components/Homepage"
import Movies from "./components/Movies"
import Admin from "./components/Admin"
import Auth from "./components/Auth"

function App() {

  return (
    <div>
      <Header />
    <section>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </section>
    </div>
  )
}

export default App
