import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className="pt-20 px-4" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-5xl font-extrabold bg-gradient-to-b from-slate-300 to-gray-900 text-transparent bg-clip-text lg:text-6xl"
      >
        PROJECTS
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl  shadow-xl"
          >
            {/* Image */}
            <motion.img
              onClick={() => toggleCard(project.id)}
              className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={project.image}
              alt={project.name}
            />

            {/* Project Details */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-4 text-center text-white 
              ${
                activeCard === project.id
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } md:group-hover:opacity-100 md:pointer-events-auto transition-opacity duration-500`}
              onClick={(e) => e.stopPropagation()} // Prevent click from propagating to the card
            >
              <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
              <p className="mb-6 text-sm sm:text-base">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
              >
                <div className="flex items-center gap-1">
                  <span>View on Github</span>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
