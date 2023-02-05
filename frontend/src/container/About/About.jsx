import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data))
  }, []);
  

  return (
    <>
      <h2 className="head-text">A High, In-demand <span>Skill</span> <br /> must <span>Produce Quality</span>
      </h2>

      <div className="app__profiles">
        {
          abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />

              <h2 className='bold-text' style={{ marginTop:20 }}>{about.title}</h2>
              <h2 className='p-text' style={{ marginTop:10 }}>{about.description}</h2>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}



export default AppWrap(About, 'about');