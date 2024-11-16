import React from "react";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, staggerChildren: 0.5},
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  }
}

const Skills = () => {
  return (
    <div className="container mx-auto" id="skills">
      <motion.h2
      initial={{opacity: 0, y: -20 }}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
      className="mb-12 mt-20 text-center text-6xl font-extrabold bg-gradient-to-b from-slate-300 to-gray-900 text-transparent bg-clip-text">
        Skills
      </motion.h2>
      <motion.div 
      initial = "hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{once: true}}
      className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30">
        {SKILLS.map((skills, index) => (
          <motion.div
          variants={itemVariants}
            key={index}
            className={`py-6 flex items-center ${
              index !== SKILLS.length - 1 ? "border-b border-stone-50/30" : ""
            }`}
          >
            {/* Display the icon */}
            <div className="flex items-center text-4xl">{skills.icon}</div>
            {/* Display the name */}
            <h3 className="ml-4 text-lg lg:text-xl ">{skills.name}</h3>
            <div className='text-md ml-auto font-semibold lg:text-xl '>
                <span>{skills.experience}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
