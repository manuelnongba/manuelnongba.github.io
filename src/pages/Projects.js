import '../styles/Projects.css';
import React from 'react';
import { motion } from 'framer-motion';
import Project from '../components/Project';

const Projects = () => {
  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      exit={{ opacity: 0 }}
    >
      <Project
        title="233 Rooms"
        desc="A web app developed using React.js, Remix, Redux and PostgreSQL to seamlessly locate and display available rooms for rent based on the user's geolocation."
        website="https://233rooms.online/"
        image="/assets/233rooms.jpg"
        alt="233 Rooms"
      />
      <Project
        title="Places"
        desc="A web app developed using React.js, Remix, and PostgreSQL to conveniently track and manage expenses at various locations."
        website="https://placesweb.vercel.app/"
        github="https://github.com/manuelnongba/places"
        image="/assets/places.jpg"
        alt="Places"
      />

      <Project
        title="Multi Explore"
        desc="Multi-Explore is a React.js application that simultaneously fetches and displays search results from Google, YouTube, and Wikipedia for a single query."
        website="https://multiexplore.netlify.app/"
        github="https://github.com/manuelnongba/multiexplore"
        image="/assets/multi.png"
        alt="Multi Explore"
      />
      <Project
        title="PharmaPro"
        desc="A pharmacy management application built with React.js, Express and
            MongoDB to make daily transactions simple and efficient and also
            keep track of inventory."
        website=""
        github="https://github.com/manuelnongba/PharmaPro"
        image="/assets/pharma.png"
        alt="PharmaPro"
      />
      <Project
        title="Gojek UI"
        desc="This is the UI of Gojek super app website in indonesia. Built with
            ReactJS and CSS."
        image="/assets/gojek.jpg"
        alt="gojek"
      />
    </motion.div>
  );
};

export default Projects;
