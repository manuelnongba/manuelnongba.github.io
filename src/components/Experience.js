import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      className="experiences"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <div className="experience">
        <h3>Judicial Service (Head Office)</h3>
        <p>IT and Software Engineer</p>
        <p>Accra, Ghana</p>
        <p>Sept 2020 - Jan 2022</p>
        <img
          src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807312/coa.svg_eiiosd.png"
          alt="Judicial Service logo"
        />
        <ul>
          <li>
            Worked with my team to improve the e-justice platform to increase
            efficiency in uploading court dockets.
          </li>
          <li>
            Collaborated with peers on the improvement of software performance
            and performed error analysis.
          </li>
          <li>
            Advocated for new or improved development practices that increase
            availability, resilience, and scalability of our solutions.
          </li>
        </ul>
      </div>

      <div className="experience">
        <h3>YelloFix</h3>
        <p>Software Developer</p>
        <p>Accra, Ghana</p>
        <p>August 2019 - Sept 2020</p>
        <p className="yellofix">
          Y<span>F</span>
        </p>
        <ul>
          <li>
            Developed responsive web applications that cut accross all modern
            devices to provide users with quality user experience.
          </li>
          <li>
            Put UI/UX deisgn wireframes to actual code and integrated frontend
            system with backend API's
          </li>
          <li>
            Advocated on effective development patterns to ensure consistent and
            easily reusable styles.
          </li>
          <li>Designed and built highly efficient APIs</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
