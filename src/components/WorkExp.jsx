import React from 'react'
import {EXPERIENCES} from "../constants"
import { motion } from 'framer-motion'
const WorkExp = () => {
  return (
    <section className='pt-20' id='work'>
        <motion.h2
         initial={{opacity: 0, y: -20 }}
         whileInView={{opacity: 1, y: 0}}
         transition={{duration: 1}}
        className='text-center text-5xl  tracking-tighter font-extrabold bg-gradient-to-b from-slate-300 to-gray-900 text-transparent bg-clip-text'>Work Experience</motion.h2>
        <motion.div
         initial={{opacity: 0 }}
         whileInView={{opacity: 1}}
         transition={{duration: 1 , delay: 0.5}}
        className='space-y-8 p-10'>
            {EXPERIENCES.map((exp,index) => (
                <motion.div
                initial={{opacity: 0, x: -20 }}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1, delay:index*0.2}}
                key={index} className='rounded-xl border border-stone-50/30 bg-white/10 p-4'>
                    <h3 className='text-2xl font-semibold'>{exp.title}</h3>
                    <p className='text-xl mt-1'>{exp.company}</p>
                    <p className='text-sm text-stone-300 mt-1'>{exp.duration}</p>
                    <p className='mt-2 text-base '>{exp.description}</p>
                </motion.div>
            ))}
        </motion.div>
    </section>
  )
}

export default WorkExp