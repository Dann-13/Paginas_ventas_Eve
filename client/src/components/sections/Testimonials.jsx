import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

const serviceData = [
    {
        title: 'Daniel Gomez',
        button: <Link to='/'>Explora Nuestras Hamburguesas</Link>
    },
    {
        title: 'Stephen Savier',
        button: <Link to='/'>Explora Nuestras Hamburguesas</Link>
    }
];

function Testimonials() {
    return (
        <div className='flex'>
            <p>Testimonios</p>
        </div>
    );
}

export default Testimonials;
