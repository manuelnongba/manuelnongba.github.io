import React from 'react';
import '../styles/Experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      className="experiences"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <div className="experience">
        <h3>Bosonit </h3>
        <p>Full-Stack Developer (Elliot Cloud - Smart cities)</p>
        <p>Spain</p>
        <p>Nov 2024 - Present</p>
        <img src="/assets/bosonit.jpg" alt="Bosonit" />
        <p>
          I build tools to monitor IoT devices & smart city infrastructure
          through a dedicated software platform & use real-time data to improve
          how cities function.
        </p>
      </div>
      <div className="experience">
        <h3>Axon Information Systems</h3>
        <p>Software Developer</p>
        <p>Accra, Ghana</p>
        <p>Feb 2022 - Nov 2024</p>
        <img src="/assets/axon.jpg" alt="Axon Information Systems" />
        <p>
          I worked on maintaining a comprehensive enterprise application that
          serves as the backbone of tax administration for the ghana revenue
          authority.
        </p>
      </div>
      <div className="experience">
        <h3>Judicial Service (Head Office)</h3>
        <p>Software Engineer</p>
        <p>Accra, Ghana</p>
        <p>Sept 2020 - Dec 2021</p>
        <img src="/assets/coa.png" alt="Judicial Service logo" />
        <p>I worked on filing & bail executions tools & infrastructure.</p>
      </div>
    </motion.div>
  );
};

export default Experience;
