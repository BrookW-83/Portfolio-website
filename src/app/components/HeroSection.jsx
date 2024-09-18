"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className=" mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-800">
  Hello, I&apos;m{" "}
</span>
            <br></br>
            <TypeAnimation
              className="text-slate-800"
              sequence={[
                "Brook",
                1000,
                "Web Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#2f2f2f] text-base sm:text-lg mb-6 lg:text-xl font-serif font-semibold">
  As a front-end web developer, I&apos;ve gained practical experience through internships and projects while being an A2SV student. A2SV has played a crucial role in shaping my skills and knowledge in web development. With expertise in HTML, CSS, and JavaScript, I focus on creating visually appealing and user-friendly interfaces. The comprehensive program at A2SV has equipped me with a solid understanding of web development concepts and best practices. Overall, I bring knowledge, passion, and practical experience to every project as a dedicated software developer.
</p>

          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-gray-200 mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-400 text-black font-bold"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3"
            >
              <span className="block hover:bg-gray-600 bg-gray-200 rounded-full px-5 py-2 font-bold">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/profile.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
