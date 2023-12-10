import React, { useRef, useState } from 'react';
//import framer-motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants/variants'
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
        icon: <FaHamburger />,
        button: <Link to='/'>
            Descubre nuestras Salchipapas
        </Link>
    },
    {
        title: 'Hot Dogs',
        icon: <FaHotdog />,
        button: <Link to='/hotdogs'>
            Conoce nuestros Hot Dogs
        </Link>
    },
    {
        title: 'Pollo',
        icon: <FaDrumstickBite />,
        button: <Link to='/pollo'>
            Descubre nuestras opciones de Pollo
        </Link>
    },
    {
        title: 'Tacos Y Burritos',
        icon: <FaBacon />,
        button: <Link to='/tacos-burritos'>
            Explora Tacos y Burritos
        </Link>
    },
    {
        title: 'Sandwiches',
        icon: <FaCheese />,
        button: <Link to='/sandwiches'>
            Descubre nuestros Sandwiches
        </Link>
    },
    {
        title: 'Pizzas',
        icon: <FaPizzaSlice />,
        button: <Link to='/pizzas'>
            Explora nuestras Pizzas
        </Link>
    },
    {
        title: 'Bebidas',
        icon: <FaGlassWhiskey />,
        button: <Link to='/'>
            Descrubre nuestras Bebidas
        </Link>
    },
]
export default function ServicesSlider() {
    const [activeSlide, setActiveSlide] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveSlide(index);
    };

    const handleMouseLeave = () => {
        setActiveSlide(null);
    };

    return (
        <div id='servicesSlider'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                mousewheel={
                    {
                        forceToAxis: true
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
                style={{
                    background: 'url("/food4.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}
            >
                {
                    serviceData.map((item, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                className={index === activeSlide ? 'bg-black bg-opacity-80 ' : 'bg-transparent'}
                            >
                                <p className='font-veneer text-4xl text-white'>{item.title}</p>


                                {index === activeSlide && (
                                    <motion.div
                                        variants={fadeIn("down", 0.1)}
                                        initial="hidden"
                                        animate="show"
                                        className="flex gap-3 justify-center items-center rounded-lg bg-brownPrimary text-white text-sm p-2 mt-2">
                                        {item.icon}
                                        {item.button}
                                    </motion.div>
                                )}


                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    );
}
