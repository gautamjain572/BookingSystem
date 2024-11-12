import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import Title from './Title'
import MovieCrad from './MovieCrad'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../api/apiHelpers'
import Swiperjs from './Swiperjs'

const Homepage = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then((data) => setMovies(data.movies)).catch((err) => console.log(err))
  }, [])

  return (
    <div className='mt-6'>
      <div className='flex justify-center'>
        {/* <img src={assets.poster} alt="" /> */}
        {/* <Carousel /> */}
        <Swiperjs />
      </div>

      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'RELEASES'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 gap-y-6'>
        {
          movies?.slice(0,5)?.map((item,index) => (
            <MovieCrad key={index} id={item._id} posterUrl={item.posterUrl} title={item.title} description={item.description} />
          ))
        }
        {/* <MovieCrad image={assets.pi1} name={'movie name'} price={'20'} />
            <MovieCrad image={assets.pi2} name={'movie name'} price={'20'} />
            <MovieCrad image={assets.pi3} name={'movie name'} price={'20'} />
            <MovieCrad image={assets.pi4} name={'movie name'} price={'20'} />
            <MovieCrad image={assets.pi5} name={'movie name'} price={'20'} /> */}
      </div>

      <div className='flex justify-center my-5'>
        <Link to='/movies'>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>View All Movies</button>
        </Link>
      </div>
    </div>
  )
}

export default Homepage