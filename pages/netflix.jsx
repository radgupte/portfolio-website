/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import netflixImg from '../public/assets/projects/netflix.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={netflixImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Netflix-Clone</h2>
          <h3>React / Tailwind CSS / Next.JS / Prisma / MongoDB / NextAuth</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            This project is a Netflix clone that mimic the functionalities of
            Netflix developed using Next.js with Typescript. This application
            allows users to sign in/out, create an account, watch movies, and
            add/remove movies from "My List" to mark their favorite movies or to
            watch later. Along with these features users can also view more
            information about a movie and utilize the autoplayer feature to take
            a quick look at a movie that is designed to help users decide if
            they would like to watch the movie then. This application is built
            using Next.js 14.0.4, React, Tailwind CSS, Prisma, MongoDB and more.
            It leverages MongoDB as the database to store movies, users,
            accounts and sessions in separate collections while also utilizing
            NextJS's built-in API routing for backend functionality.
          </p>
          <a
            href="https://github.com/radgupte/petflix"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Project Repository</button>
          </a>
          {/* <a
            href='https://property-finder-development.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.JS Interaction
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Prisma
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextAuth
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
