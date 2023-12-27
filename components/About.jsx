import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen mx-auto p-2 flex items-center py-20"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About Me
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 text-xl">
            I am passionate about developing software and learning new
            technologies, and I am looking forward to building solutions that
            have a positive impact on the lives of people. I offer strong
            programming skills in Java, Python, Kotlin, and JavaScript, and I am
            well-versed in various front-end and back-end frameworks such as
            React, Angular, Next.js, and Node.js. I have gained practical
            experience working on software development projects, building web
            and mobile applications, microservices, and providing automation
            solutions. When I am not building projects, I enjoy playing songs on
            my keyboard (synthesizer) and reading books.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
