import React from 'react';
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const testimonialsData = [
    {
        title: 'Daniel Gomez',
        icon: <CiStar />
    },
    {
        title: 'Stephen Savier',
        icon: <CiStar />
    },
    {
        title: 'Robin Savier',
        icon: <CiStar />
    }
];

function Testimonials() {
    return (
        <div className='flex flex-col px-10 py-12 justify-center items-center '>
            <p className='text-redprimary font-veneer text-xl'>Testimonios</p>
            <h1 className='text-4xl py-5 text-center font-semibold'>Comentarios de nuestros <span className='text-redprimary font-veneer font-normal '>Clientes</span> </h1>
            <div className=" md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    testimonialsData.map((item, index) => {
                        return (
                            <blockquote key={index + 1} className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                                <div className="flex items-center gap-4">
                                    <img
                                        alt="Man"
                                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                        className="h-14 w-14 rounded-full object-cover"
                                    />

                                    <div>
                                        <div className="flex justify-center gap-0.5 text-redprimary">
                                            {item.icon}
                                            {item.icon}
                                            {item.icon}
                                            {item.icon}
                                        </div>

                                        <p className="mt-0.5 text-lg font-medium text-gray-900">{item.title}</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-gray-700">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                                    consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                                    error officiis atque voluptates magnam!
                                </p>
                            </blockquote>
                        )
                    })
                }
            </div>
        </div>


    );
}


export default Testimonials;
