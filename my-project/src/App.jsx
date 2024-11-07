import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import TopHeader from "./components/TopHeader"
import Homepage from "./components/Homepage"
import Movies from "./components/Movies"
import Admin from "./components/Admin"
import Auth from "./components/Auth"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { adminActions, userActions } from "./store"
import Booking from "./components/Booking"
import Profile from "./components/Profile"


function App() {
  const dispatch = useDispatch();
  const isAdminLoggendIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggendIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(userActions.login());
    }
    else if (localStorage.getItem("adminId")) {
      dispatch(adminActions.login());
    }
  },[])

  return (
    <>
    <TopHeader/>
    <Header />
    <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/user" element={<Profile />} />
      </Routes>
    </section>
    </>
  )
}

export default App
