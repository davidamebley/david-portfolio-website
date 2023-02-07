import React, {useState, useEffect} from 'react';
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  return (
    <>
      <h2 className="head-text">
        A view of my <span>Portfolio</span>
      </h2>

      <div className="app__work-filter">
        {['Web App', 'Mobile App', 'Backend', 'Frontend', 'PHP', 'ReactJS', 'Laravel', 'All']}
      </div>
    </>
  )
}

export default Work