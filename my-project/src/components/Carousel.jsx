import React, { useState } from 'react'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Carousel = () => {

    const slides = [
        'https://assetscdn1.paytm.com/images/catalog/view_item/2924477/1730804115536.jpg?format=webp&imwidth=1750',
        'https://assetscdn1.paytm.com/images/catalog/view_item/2898114/1729245222121.jpg?format=webp&imwidth=1750',
        'https://assetscdn1.paytm.com/images/catalog/view_item/2914703/1730522419071.jpg?format=webp&imwidth=1750'
    ]

    const [current , setCurrent] = useState(0);

    const prevSlide = () => {
        if (current === 0) {
            setCurrent(slides.length - 1)
        }
        else{
            setCurrent(current - 1)
        }
    }
    const nextSlide = () => {
        if (current === slides.length - 1) {
            setCurrent(0)
        }
        else{
            setCurrent(current + 1)
        }
    }

    return (
        <div className='w-full m-auto overflow-hidden relative'>
            <div className={`flex transition ease-in-out duration-40 translate-x-[${ current * 100}%]` }>
                {slides.map((item, key) => {
                    return (
                        <img key={key} src={item} alt="" />
                    )
                })}
            </div>
            <div className='absolute top-0 h-full w-full flex justify-between px-10 text-2xl text-white'>
                <button onClick={prevSlide}><FaArrowCircleLeft /></button>
                <button onClick={nextSlide}><FaArrowCircleRight /></button>
            </div>
        </div>
    )
}

export default Carousel