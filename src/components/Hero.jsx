import React from "react";
import { HERO } from "../constants";
import img2 from "../assets/img2.jpeg";
import { motion } from "framer-motion";

const typingAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1, // Reveal letters one by one
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center pt-16">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        {/* Typing Animation for HERO.name */}
        <motion.h2
          variants={typingAnimation}
          initial="hidden"
          animate="visible"
          className="my-8 p-2 text-3xl font-bold bg-gradient-to-b from-slate-300 to-gray-900 text-transparent bg-clip-text md:text-5xl"
        >
          {HERO.name.split("").map((letter, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">{HERO.greet}</p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="rounded-3xl"
            src={img2}
            width={400}
            height={300}
            alt="img2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
