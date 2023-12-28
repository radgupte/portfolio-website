import Image from 'next/image';
import React from 'react';
import publicImg from '../public/assets/projects/publichelp.jpg';
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
          src={publicImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Public Help Service</h2>
          <h3>Figma / Human-Computer Interaction / User Experience</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            This Figma prototype is designed to provide a high-fidelity user
            experience for a mobile application aimed at connecting individuals
            in need with those willing to help. The purpose of this project is
            to create a user-friendly and accessible mobile application
            prototype that facilitates crowdsourcing of tasks or chores,
            specifically catering to individuals in need, such as senior
            citizens, physically disabled individuals, people with low income
            seeking extra work, and those in rehabilitation requiring additional
            income and work opportunities.
          </p>
          <a
            href="https://github.com/radgupte/Public-Help-Service"
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
                <RiRadioButtonFill className="pr-1" /> Figma Prototyping
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Human-Computer
                Interaction
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Paper Prototyping
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Persona Identification
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Usability Testing
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> User Experience
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
