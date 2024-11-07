import React from 'react'
import { useState, useEffect } from 'react'
import Title from './Title'
import MovieCrad from './MovieCrad'
import { getAllMovies } from '../api/apiHelpers'

const Movies = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then((data) => setMovies(data.movies)).catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'MOVIES'} />
          {/* product sort  */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Realvent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map products  */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6'>
        {
          movies?.map((item,index) => (
            <MovieCrad key={index} id={item._id} posterUrl={item.posterUrl} title={item.title} description={item.description} />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Movies