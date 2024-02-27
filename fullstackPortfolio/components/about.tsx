"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">B.Tech</span>, I transitioned into the
        world of software development, following my passion for programming. I
        gained hands-on experience and became proficient in{" "}
        <span className="font-medium">MongoDB</span>,{" "}
        <span className="font-medium">Express.js</span>,{" "}
        <span className="font-medium">REST</span>, and{" "}
        <span className="font-medium">Node.js</span>. Skilled in developing
        robust web applications, I excel at creating efficient backend solutions
        and implementing effective database structures. My favorite part of
        programming is the problem-solving aspect, and I thoroughly enjoy the
        feeling of finally figuring out a solution to a problem. I collaborate
        effectively within development teams to deliver high-quality
        applications. Currently, I am upscaling my skills in DevOps, including
        AWS, Docker, and more, as I am always eager to learn new technologies
        and enhance my expertise. I am currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies,{" "}
      </p>
    </motion.section>
  );
}
