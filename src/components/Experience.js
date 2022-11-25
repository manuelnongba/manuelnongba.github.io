import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      className="experience"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <h3>Judicial Service (Head Office)</h3>
      <p>Software Engineer</p>
      <p>Accra, Ghana</p>
      <p>Sept 2020 - Jan 2022</p>
      <img src="../img/coa.svg.png" alt="Judicial Service logo" />
      <ul>
        <li>Wrote high quality code to create simple and elegant solutions.</li>
        <li>Implemented and updated application modules.</li>
        <li>Addressed and fixed complex bugs.</li>
      </ul>
    </motion.div>
  );
};

export default Experience;
