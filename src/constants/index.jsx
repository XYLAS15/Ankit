import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";
import pp from "../assets/pp.png";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "ANKIT BHATTACHARYYA.",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate Fullstack developer with a knack for creating beautiful and functional user interfaces, also interested in AI/ML. I like transforming ideas into engaging web experiences for others.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: pp,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: "https://cdn.dribbble.com/userupload/14317752/file/original-dcce36cc9f67e306e75e8afa1306ee1b.png?resize=1200x900",
    githubLink: "https://github.com/XYLAS15/feedback-form",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: "https://external-preview.redd.it/i-made-a-native-weather-application-lively-weather-with-v0-nWhDjzFCePCswyijw_gi4dgG3vgs_0fnxGAeLzxCYrc.png?format=pjpg&auto=webp&s=d0dcaf92e5e2241e3551cd9492b6370b649759e1",
    githubLink: "https://weather-ngkjhlx5h-xylas15s-projects.vercel.app/",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: "https://cdn.dribbble.com/userupload/16897055/file/original-d1c39937fde161b31388515bb72eb46f.png?resize=1200x900",
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: "https://i.pinimg.com/736x/8b/37/be/8b37be007d5ecfee65983b0184ed6296.jpg",
    githubLink: "https://github.com/XYLAS15/Threads-clone",
  },
];

export const BIO = [
  "Hello there! I'm Ankit, completed my undergraduate degree in Computer Science and Engineering  in 2024. Eager to embark on my professional journey, Currently Working at TCS (Tata Consultancy Services), Also I am actively seeking entry-level opportunities in Software Development roles at reputable companies.",

"My skills span the realm of web development, where I've honed my expertise in React, MongoDB, Node.js, Next.js, and JavaScript. I thrive on crafting efficient and innovative solutions to real-world challenges, and I'm excited about the prospect of contributing to cutting-edge projects.",

"Let's connect and explore how my passion for coding and problem-solving can align with the dynamic needs of your team. Open to opportunities and always ready to learn and grow in the ever-evolving tech landscape!"
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "System Engineer",
    company: "TCS(Tata Consultency Services)",
    duration: "December 2024 - Present",
    description:
     "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
 
];

export const EDUCATION = [
  
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "University of Engineering & Management Kolkata, India",
    duration: "September 2020 - June 2024",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
  {
    degree: "High School",
    institution: "Kanchrapara Harneet High School",
    duration: "September 2018 - June 2020",
    description:
      "Focused on mathematics, science, and social studies. Completed academic projects, participated in extracurricular activities, and participated in competitions. Graduated with a high grade.",
  }
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=100012128026517",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/xylas10/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/XYLAS15",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/XYLAS15",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/ankit-bhattacharyya-4b02001a4/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
