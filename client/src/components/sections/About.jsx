import React, { useEffect, useRef } from "react";
import Boy from "../icons/Boy";
//import framer-motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants/variants'
//import useInView react-intersection-observer
import { useInView } from 'react-intersection-observer';

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    useEffect(() => {
        if (inView) {
            // La animación se activará cuando el componente esté visible
        }
    }, [inView]);
    return (
        <div ref={ref} className=" flex flex-col px-5 py-12 md:px-16 md:flex-row items-center">
            <div>
                <motion.h1
                    variants={fadeIn("down", 0.7)}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="text-4xl py-2 font-semibold"><span className="text-redprimary font-veneer font-medium">FlashFood:</span>  Sabores Exquisitos Entregados en el Momento y Lugar Justo</motion.h1>
                <motion.p
                    variants={fadeIn("up", 0.7)}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}>
                    En FlashFood, entendemos que la buena comida es más que solo sabor; es una experiencia. Ofrecemos momentos de sabor excepcional, entregados justo cuando y donde los necesitas.

                    ¡Haz tu pedido ahora y deja que FlashFood lleve la delicia a tu puerta!
                </motion.p>
            </div>
            <motion.div
                variants={fadeIn("left", 0.7)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="md:w-[1200px]">
                <Boy />
            </motion.div>
        </div>
    )
}