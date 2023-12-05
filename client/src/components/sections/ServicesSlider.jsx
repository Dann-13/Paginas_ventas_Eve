import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHamburger, FaHotdog, FaPizzaSlice, FaDrumstickBite, FaBacon, FaCheese, FaGlassWhiskey } from "react-icons/fa";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../index.css'
// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const serviceData = [
    {
        title: 'Hambueguesas',
        icon: <FaHamburger />,
        button: <Link to='/'>
            Explora Nuestras Hamburguesas
        </Link>
        
    },
    {
        title: 'Salchipapas',
        button: <Link to='/'></Link>
    },
    {
        title: 'Hot Dogs',
        button: <Link to='/'></Link>
    },
    {
        title: 'Pollo',
        button: <Link to='/'></Link>
    },
    {
        title: 'Tacos Y Burritos',
        button: <Link to='/'></Link>
    },
    {
        title: 'Sandwiches',
        button: <Link to='/'></Link>
    },
    {
        title: 'Hambueguesas',
        button: <Link to='/'></Link>
    },
    {
        title: 'Bebidas',
        button: <Link to='/'></Link>
    },
]
export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                mousewheel={
                    {
                        forceToAxis:true
                    }
                }
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    serviceData.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <p className='font-veneer text-4xl'>{item.title}</p>
                                <div className='flex gap-3 justify-center items-center rounded-lg bg-brownPrimary text-white text-sm p-2 mt-2'>
                                    {item.icon}
                                    {item.button}
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </>
    );
}
