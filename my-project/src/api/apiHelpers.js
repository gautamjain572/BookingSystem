import axios from 'axios';

export const getAllMovies = async () => {
    const res = await axios.get("/movie").catch((err) => console.log(err));
    if (res.status !== 200) {
        return console.log("No Data");
    }
    const data = await res.data;
    return data;
}

export const sendUserAuth = async (data) => {
    const res = await axios
    .post(`/api/${data.signup === 'Login' ? 'Login' : 'signup'}`,{
        name: data.name,
        email: data.email,
        password : data.password
    }).catch((err) => console.log(err));

    if (res.status !== 200 && res.status !== 201) {
        console.log("Invalid Request");
    }
    const resData = await res.data;
    return resData;
}

export const adminLogin = async (data) => {
    const res = await axios
    .post( '/admin/login',{
        email: data.email,
        password : data.password
    }).catch((err) => console.log(err));

    if (res.status !== 200) {
        console.log("Invalid Request");
    }
    const resData = await res.data;
    return resData;
}

export const getMovieDetails = async (id) => {
    const res = await axios.get(`/movie/${id}`)
    .catch((err) => console.log(err))
    if (res.status !== 200) {
        return console.log("error");
    }
    const resData = await res.data;
    return resData;
}

export const newBooking = async (data) => {
    const res = await axios.post('/booking' , {
        movie:data.movie,
        seatNumber: data.seatNumber,
        date: data.date,
        user:localStorage.getItem("userId")
    })
    .catch((err) => console.log(err))
    if (res.status !== 200) {
        return console.log("error");
    }
    const resData = await res.data;
    return resData;
}

export const getUserBooking = async () => {
    const id = localStorage.getItem("userId")
    const res = await axios.get(`/api/booking/${id}`)
    .catch((err) => console.log(err))
    if (res.status !== 200) {
        return console.log("error");
    }
    const resData = await res.data;
    return resData;
}

export const getUserDetails = async () => {
    const id = localStorage.getItem("userId");
    const res = await axios.get(`/api/${id}`)
    .catch((err) => console.log(err))
    if (res.status !== 200) {
        return console.log("error");
    }
    const resData = await res.data;
    return resData;
}