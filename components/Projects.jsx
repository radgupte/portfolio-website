import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import shoppingImg from '../public/assets/projects/shopping.jpg';
import netReconImg from '../public/assets/projects/netrecon.jpg';
import publicImg from '../public/assets/projects/publichelp.jpg';
import netflixImg from '../public/assets/projects/netflix.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-20">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Netflix-Clone"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React, MongoDB"
          />
          <ProjectItem
            title="NetReconner"
            backgroundImg={netReconImg}
            projectUrl="/netrecon"
            tech="Python, Shell"
          />
          <ProjectItem
            title="Public Help Service"
            backgroundImg={publicImg}
            projectUrl="/publichelp"
            tech="Figma"
          />
          <ProjectItem
            title="Store Front"
            backgroundImg={shoppingImg}
            projectUrl="/shopping"
            tech="Angular 8"
          />
          {/* <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          /> */}
          {/* <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
