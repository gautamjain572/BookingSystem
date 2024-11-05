import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'
import MovieCrad from './MovieCrad'

const Homepage = () => {
  return (
    <div className='mt-6'>
      <div className='flex justify-center'>
        <img src={assets.poster} alt="" />
      </div>

      <div className='text-center py-8 text-3xl'>
      <Title text1={'LATEST'} text2={'RELEASES'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            <MovieCrad image={assets.pi1} name='movie name' price='20' />
      </div>
      
    </div>
  )
}

export default Homepage