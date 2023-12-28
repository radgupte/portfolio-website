import Image from 'next/image';
import React from 'react';
import publicImg from '../public/assets/projects/netrecon.jpg';
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
          <h2 className="py-2">NetReconner</h2>
          <h3>Python / Linux OS / Network Security</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            A Network Intrusion Detection System is used to monitor networks for
            attacks or intrusions and report these intrusions to a network
            administrator of the organization. The NetReconner continuously
            monitors the incoming and outgoing traffic on the network using a
            bash script with minimal downtime. This system is designed to
            analyze network traffic and identify potential intrusion attempts by
            matching packet signatures using Regular Expressions against a
            pre-defined database of signatures.
          </p>
          <a
            href="https://github.com/radgupte/NetReconner"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Project Repository</button>
          </a>
          <a
            href="https://www.irjet.net/archives/V7/i4/IRJET-V7I432.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Publication</button>
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
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Regular Expressions
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Shell Scripting
                Interaction
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Linux OS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Network Security
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
