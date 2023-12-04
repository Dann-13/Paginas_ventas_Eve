import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <a
                        href="/"
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img src='/logo.png'  width={300}/>
                    </a>
                    <div className="mt-6 lg:max-w-sm">
                        <p className="text-gray-800 font-nunito">
                            FlashFood © 2023
                            Todos los derechos reservados
                            Desarrollado por FlashDev
                        </p>

                    </div>
                </div>
                <div>
                    <p className="text-[26px] font-bold tracking-wide text-gray-900 font-veneer">
                        Contactanos
                    </p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Phone:</p>
                        <a
                            href="tel:850-123-5021"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            850-123-5021
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <a
                            href="mailto:info@lorem.mail"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            info@lorem.mail
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Address:</p>
                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Our address"
                            title="Our address"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            312 Lovely Street, NY
                        </a>
                    </div>
                </div>
                <div>
                    <span className="text-[26px] font-bold tracking-wide text-gray-900 font-veneer">
                        Siguenos
                    </span>
                    <div className="flex items-center mt-1 space-x-3">
                        <a
                            href="/"
                            className="text-brownPrimary transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <FaInstagram  className='text-4xl'/>
                        </a>
                        <a
                            href="/"
                            className="text-brownPrimary transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                           <FaTwitter className='text-4xl' />
                        </a>
                        <a
                            href="/"
                            className="text-brownPrimary transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <FaFacebook className='text-4xl' />
                        </a>
                        <a
                            href="/"
                            className="text-brownPrimary  transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <FaYoutube className='text-4xl' />
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
                        spare ribs salami.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
