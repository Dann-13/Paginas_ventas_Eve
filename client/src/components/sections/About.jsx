import React from "react";
import Boy from "../Icons/Boy";
//import framer-motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants/variants'
import { useInView } from 'react-intersection-observer';

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true, // La animación solo se activará una vez
      });
    return (
        <div className="flex flex-col justify-center items-center py-20 px-10 md:flex-row md:px-20">
            <div className="">
                <motion.h1 
                ref={ref}
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="text-4xl py-5 font-bold">Sabores Exquisitos Entregados en el Momento y <span className="text-brownPrimary">Lugar Justo</span></motion.h1>
                <motion.p 
                ref={ref}
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="text-descriptionPrimary">
                    En FlashFood, entendemos que la buena comida es más que solo sabor; es una experiencia. Ofrecemos momentos de sabor excepcional, entregados justo cuando y donde los necesitas.
                    Nuestros restaurantes en Pasto están aquí para satisfacer los paladares locales y ofrecer autenticidad y frescura en cada bocado.
                    Ordena ahora y descubre por qué nuestros platos son el equilibrio perfecto entre tradición y modernidad.
                    ¡Haz tu pedido ahora y deja que FlashFood lleve la delicia a tu puerta!
                </motion.p>
            </div>
            <motion.div
            ref={ref}
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            >
                <Boy width={3000} />
            </motion.div>
        </div>
    )
}