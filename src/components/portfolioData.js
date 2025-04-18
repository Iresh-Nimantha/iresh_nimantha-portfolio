// Import necessary assets
import react from "../assets/react.svg";
import tailwind from "../assets/tailwindcss.png";
import laravel from "../assets/laravel.png";
import framer from "../assets/framer.png";
import threejs from "../assets/Threejs.svg";
import vue from "../assets/vue.svg";

import expressjs from "../assets/expressjs.png";
import mongoDB from "../assets/mongodb.svg";
import nodejs from "../assets/nodejs.png";

import mysql from "../assets/mysql.svg";
import php from "../assets/php.svg";
import wordpress from "../assets/wordpress.svg";
import elementor from "../assets/elementor.svg";
import cssIcon from "../assets/css.svg";
import javascript from "../assets/js.svg";
import webgl from "../assets/webgl.svg";

// Import spotlight images
import spotlight1 from "../assets/spotlight1.png";
import spotlight2 from "../assets/spotlight1.png";
import spotlight3 from "../assets/spotlight1.png";
import spotlight4 from "../assets/spotlight1.png";
import spotlight5 from "../assets/spotlight1.png";
import spotlight6 from "../assets/spotlight1.png";

// Import project logos
import jobNexusLogo from "../assets/jobNexus.png";
import aswanna from "../assets/aswanna.png";

import ucmcLogo from "../assets/UCMC.png";
import portfolioLogo from "../assets/jobNexus.png";
import rcfmsLogo from "../assets/RCFMS.png";
import writeSphere from "../assets/WriteSphere.png";
import shoeStyleLogo from "../assets/ShoeStyle.png";

//videos
import RCFMSVideo from "../assets/RCFMS.mp4";
import jobNexusVideo from "../assets/jobNexus.mp4";
import aswannaVideo from "../assets/aswanna.mp4";
import writeSphereVideo from "../assets/WriteSphere.mp4";
import tDportfolioVideo from "../assets/3Dportfolio.mp4";
import ucmcVideo from "../assets/wpUCMC.mp4";
import ShoeStyleVideo from "../assets/ShoeStyle.mp4";

// Full Stack Projects (id: 1, 3, 4)
export const fullStackProjects = [
  {
    id: 1,
    title: "Aswanna - AI Agriculture Platform",
    desc: "An AI-powered platform that helps farmers identify crop diseases by analyzing uploaded images and other specific details about crops.",
    subdesc:
      "Built with React, Tailwind CSS, Laravel, and Google Gemini API. This is a group project, and my part includes developing the landing page, implementing the crop disease identification feature, integrating feedback and contact sections, displaying agricultural officer details, creating a forum section, and adding a chatbot.",
    href: "https://github.com/sahansara/Agricultural-Information-Platform-with-Crop-Calendar.git",
    texture: aswannaVideo,
    logo: aswanna,
    logoStyle: {
      backgroundColor: "#60f5a1",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: spotlight1,
    tags: [
      { id: 1, name: "React.js", path: react },
      { id: 2, name: "TailwindCSS", path: tailwind },
      { id: 3, name: "Laravel", path: laravel },
      { id: 4, name: "Framer Motion", path: framer },
    ],
  },
  {
    id: 2,
    title: "JobNexus - Job Seeking & Sharing Platform",
    desc: "A job platform connecting job seekers with relevant opportunities.",
    subdesc: "Built with MERN (MongoDB, Express, React, Node.js).",
    href: "https://github.com/Iresh-Nimantha/Job-Seeking-Sharing-Platform-JobNexus",
    texture: jobNexusVideo,
    logo: jobNexusLogo,
    logoStyle: {
      backgroundColor: "#60f5a1",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: spotlight3,
    tags: [
      { id: 1, name: "MongoDB", path: mongoDB },
      { id: 2, name: "Express.js", path: expressjs },
      { id: 3, name: "React.js", path: react },
      { id: 4, name: "Node.js", path: nodejs },
    ],
  },
  {
    id: 3,
    title: "WriteSphere - Blog Post Website",
    desc: "A blog platform with authentication, post management, and comments.",
    subdesc: "Built with Laravel, Tailwind, and MySQL.",
    href: "https://github.com/Iresh-Nimantha/WriteSphere_Blog_posting_site",
    texture: writeSphereVideo,
    logo: writeSphere,
    logoStyle: {
      backgroundColor: "#1E88E5 ",
      border: "0.2px solid #1E88E5",
      boxShadow: "0px 0px 60px 0px rgba(255, 87, 34, 0.3)",
    },
    spotlight: spotlight4,
    tags: [
      { id: 1, name: "Laravel", path: laravel },
      { id: 2, name: "Tailwind", path: tailwind },
      { id: 3, name: "MySQL", path: mysql },
      { id: 4, name: "PHP", path: php },
    ],
  },
  {
    id: 4,
    title: "Shoe Style - Online Shoe Store",
    desc: "A modern e-commerce platform for premium shoes, offering seamless shopping and secure checkout.",
    subdesc:
      "Built with Vue 3, Tailwind CSS, Laravel, and Stripe API. This project includes product browsing, a secure checkout system, user authentication, interactive animations, and an admin dashboard for inventory management.",
    href: "https://github.com/Iresh-Nimantha/ShoeStyle-Online_Shoe_Store.git",
    texture: ShoeStyleVideo,
    logo: shoeStyleLogo,
    logoStyle: {
      backgroundColor: "#0a1429",
      border: "0.2px solid #333",
      boxShadow: "0px 0px 60px 0px rgba(255, 215, 0, 0.3)",
    },
    spotlight: "spotlightShoeShop",
    tags: [
      { id: 1, name: "Vue.js", path: vue },
      { id: 2, name: "TailwindCSS", path: tailwind },
      { id: 3, name: "Laravel", path: laravel },
      { id: 4, name: "Framer Motion", path: framer },
    ],
  },
];

// Frontend Projects (id: 2, 6)
export const frontEndProjects = [
  {
    id: 5,
    title: "Portfolios - Personalized 3D Websites",
    desc: "A 3D portfolio website with customizable and interactive features.",
    subdesc: "Built with React, Three.js, and Tailwind CSS.",
    href: "https://github.com/Iresh-Nimantha/iresh-nimantha-3Dportfolio",
    texture: tDportfolioVideo,
    logo: portfolioLogo,
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: spotlight2,
    tags: [
      { id: 1, name: "React.js", path: react },
      { id: 2, name: "TailwindCSS", path: tailwind },
      { id: 3, name: "Three.js", path: threejs },
      { id: 4, name: "Framer Motion", path: framer },
    ],
  },
  {
    id: 6,
    title: "RCFMS - Road Crime Fine Management System",
    desc: "A web-based system for managing road crime fines efficiently.",
    subdesc: "Built with React.js and Tailwind CSS.",
    href: "https://iresh-nimantha.github.io/frontend-RCFMS/",
    texture: RCFMSVideo,
    logo: rcfmsLogo,
    logoStyle: {
      backgroundColor: "#1E88E5",
      border: "0.2px solid #1565C0",
      boxShadow: "0px 0px 60px 0px rgba(30, 136, 229, 0.3)",
    },
    spotlight: spotlight6,
    tags: [
      { id: 1, name: "React.js", path: react },
      { id: 2, name: "Tailwind CSS", path: tailwind },
    ],
  },
];

// WordPress Projects (id: 5)
export const wordpressProjects = [
  {
    id: 7,
    title: "UCMC Web",
    desc: "Official website for the University of Colombo Music Circle.",
    subdesc: "Created with WordPress and Elementor.",
    href: "",
    texture: ucmcVideo,
    logo: ucmcLogo,
    logoStyle: {
      backgroundColor: "#673AB7",
      border: "0.2px solid #512DA8",
      boxShadow: "0px 0px 60px 0px rgba(103, 58, 183, 0.3)",
    },
    spotlight: spotlight5,
    tags: [
      { id: 1, name: "WordPress", path: wordpress },
      { id: 2, name: "Elementor", path: elementor },
      { id: 3, name: "CSS", path: cssIcon },
      { id: 4, name: "JavaScript", path: javascript },
    ],
  },
];
