import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CarouselSlides() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const slider = React.useRef(null);

    const goToPrev = () => {
        if (slider.current) {
            slider.current.slickPrev();
        }
    };

    const goToNext = () => {
        if (slider.current) {
            slider.current.slickNext();
        }
    };
    const imagesUrl = [
        '/food1.jpg',
        '/pizza.jpg',
        '/pollo.jpg'

    ]
    return (
        <div className='w-full'>
            <div id="default-carousel" className="relative">
                <Slider ref={slider} {...settings}>
                    {imagesUrl.map((imageUrl, index) => (
                        <div
                            className="overflow-hidden relative h-[20rem] sm:h-[22rem] xl:h-[24rem] 2xl:h-[26rem]"
                            key={index}
                        >
                            <img
                                src={imageUrl}
                                alt={`Imagen ${index + 1}`}
                                className="block absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                    ))}
                </Slider>

                <button
                    type="button"
                    onClick={goToPrev}
                    className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                >
                    <img src='/iconmonstr-angel-left-thin.svg' />
                </button>
                <button
                    type="button"
                    className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    onClick={goToNext}
                >
                    <img src='/iconmonstr-angel-right-thin.svg' />
                </button>
            </div>
        </div>
    )
}

export default CarouselSlides
