import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mern Stack Developer",
    location: "SearchingYard",
    description:
      "Experienced Full Stack Developer with 1+ years of hands-on experience. Proficient in MongoDB, Express.js, REST, and Node.js. Skilled in developing robust web applications and adept at creating efficient backend solutions. Possesses strong problem-solving abilities and a knack for implementing effective database structures. Collaborates effectively within development teams to deliver high-quality applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Junior Software developer trainee",
    location: "10x Academy ",
    description:
      "I worked as a front-end developer.Proficient in developing frontend applications using React, Redux, Next.js, and TypeScript, while leveraging Tailwind CSS for efficient and responsive UI development. Ensures high performance, scalability, and reliability in frontend systems",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023+",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Query",
  "Redux",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Sequelize",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Golang",
  "AWS",
  "Docker",
  "Microservices",
  "RabbitMQ",
  "Framer Motion",
] as const;
