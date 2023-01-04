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
      <p>IT and Software Engineer</p>
      <p>Accra, Ghana</p>
      <p>Sept 2020 - Jan 2022</p>
      <img src="../img/coa.svg.png" alt="Judicial Service logo" />
      <ul>
        <li>
          {" "}
          Worked with my team to develop a platform to upload court dockets to
          increase efficiency in court filings.
        </li>
        <li>
          Collaborated with peers on the improvement of software performance and
          performed error analysis.
        </li>
        <li>
          Advocate for new or improved development practices that increase
          availability, resilience, and scalability of our solutions.
        </li>
      </ul>
    </motion.div>
  );
};

export default Experience;
