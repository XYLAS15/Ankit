import React from 'react'
import {EDUCATION} from '../constants'
import { motion } from 'framer-motion'
const Education = () => {
  return (
    <section className='py-8' id='education'>
        <motion.h2
         initial={{opacity: 0, y: -20 }}
         whileInView={{opacity: 1, y: 0}}
         transition={{duration: 1}}
        className='mb-4 text-center text-5xl font-extrabold bg-gradient-to-b from-slate-300 to-gray-900 text-transparent bg-clip-text'>EDUCATION</motion.h2>
        {EDUCATION.map((EDUCATION,index) => (
            <motion.div
            initial={{opacity: 0, x: -20 }}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1 , delay: index*0.5 }}
            key={index} className='mb-6 p-10'>
                <h3 className='text-xl font-semibold'>{EDUCATION.degree}</h3>
                <p className='text-lg mt-2'>{EDUCATION.institution}</p>
                <p className='text-sm mt-2 text-stone-300'>{EDUCATION.duration}</p>
                <p className='mt-2'>{EDUCATION.description}</p>
            </motion.div>
        ))}

    </section>
  )
}

export default Education