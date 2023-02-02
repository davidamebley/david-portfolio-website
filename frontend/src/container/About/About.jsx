import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { images } from '../../constants'
import { urlFor, client } from '../../client';

/* const abouts = [
  {title: "Frontend Developer", description: "I design frontend apps for the web", imgUrl: images.about01},
  {title: "Backend Developer", description: "I create the backend of web applications", imgUrl: images.about02},
  {title: "Full Stack Developer", description: "I combine the beauty of the front end to the server side to create a fully functional full-stack web app.", imgUrl: images.about03},
  {title: "Mobile App Developer", description: "I design user-friendly mobile applications for Android and iOS", imgUrl: images.about04},
]; */

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



export default About