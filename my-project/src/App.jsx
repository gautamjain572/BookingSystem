import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import TopHeader from "./components/TopHeader"
import Homepage from "./components/Homepage"
import Movies from "./components/Movies"
import Admin from "./components/Admin"
import Auth from "./components/Auth"


function App() {

  return (
    <>
    <TopHeader/>
    <Header />
    <section>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </section>
    </>
  )
}

export default App
