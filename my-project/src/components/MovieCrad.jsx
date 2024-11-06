import React from 'react'

const MovieCrad = ({ title, releaseDate, posterUrl, id , description }) => {
    return (
        <div>
            <div className='text-gray-700 cursor-pointer'>
                <div className='overflow-hidden'>
                    <img src={posterUrl} className='hover:scale-110 transition ease-in-out' alt="" />
                </div>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-medium pt-3 pb-1 text-sm hover:text-[#f84464]'>{title}</p>
                        {/* <p className='text-sm font-medium'>{new Date(releaseDate).toLocaleDateString()}</p> */}
                        <p className='text-sm'>{description}</p>
                    </div>
                    <div className='mt-3'>
                        <button className='border rounded-md border-black px-2 py-1 text-sm hover:bg-[#f84464] hover:text-white transition-all duration-500'>Book Ticket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCrad