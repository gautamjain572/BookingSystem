import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails, newBooking } from '../api/apiHelpers';
import Title from './Title';

const Booking = () => {
    const [movie, setMovie] = useState();
    const [input, setInput] = useState({seatNumber:"",date:""})
    const id = useParams().id;

    useEffect(() => {
        getMovieDetails(id)
            .then((res) => setMovie(res.movie))
            .catch((err) => console.log(err))
    }, [id])

    const onChange = (e) => {
        setInput((prevState) => ({...prevState,[e.target.name]:e.target.value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        newBooking({...input,movie:movie._id})
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    return (
        <div>
            {
                movie &&
                <>
                    <div className='flex justify-center'>
                        <Title text1={'BOOK TICKETS : '} text2={movie.title} />
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex flex-col pt-3 w-1/2 m-auto'>
                            <img className='w-4/5 h-[300px]' src={movie.posterUrl} alt="" />
                            <p className='pt-2'>{movie.description}</p>
                            <p className='font-bold mt-1'>Starrer:{movie.actors.map((actor) => " " + actor + " ")}</p>
                            <p className='font-bold mt-2'>Release Date: {new Date(movie.releaseDate).toDateString()}</p>
                        </div>
                        <div className='w-1/2 pt-3'>
                            <form onSubmit={handleSubmit}>
                                <div className='p-5 m-auto flex flex-col gap-2'>
                                    <label htmlFor="">Seat Number</label>
                                    <input className='border' onChange={onChange} value={input.seatNumber} type={"number"} name="seatNumber" id="" />
                                    <label htmlFor="">Booking Date</label>
                                    <input className='border'  onChange={onChange} value={input.date} type={"date"} name="date" id="" />
                                    <button className='mt-3 p-2 bg-[#f84464] rounded-full' type='submit'>Book Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Booking