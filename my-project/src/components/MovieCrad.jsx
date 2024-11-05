import React from 'react'
import Swiper from 'swiper';
import 'swiper/css';

const MovieCrad = (image,name,price) => {
    return (
        <div>
            <div className='text-gray-700 cursor-pointer'>
                <div className='overflow-hidden'>
                    <img src={image} className='hover:scale-110 transition ease-in-out' alt="" />
                </div>
                <p className='pt-3 pb-1 text-sm hover:text-[#dc9e41]'>{name}</p>
                <p className='text-sm font-medium'>{price}</p>
            </div>
        </div>
    )
}

export default MovieCrad