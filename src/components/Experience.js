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
        <h3>Jaskosdata Limited</h3>
        <p>Full-Stack Engineer</p>
        <p>Tema, Ghana</p>
        <p>Oct 2021 - Sept 2022</p>
        <img
          src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1673743783/jdl_uxk08n.jpg"
          alt="Jaskosdata Limited"
        />
        <ul>
          <li>
            Architected and implemented organizations and projects UX with
            advanced permissioning based on user feedback.
          </li>
          <li>
            Implemented a successful redesign of apps working closely with
            product design.
          </li>
          <li>
            Collaborate with cross-functional teams to improve application
            performance and usability.
          </li>
        </ul>
      </div>
      <div className="experience">
        <h3>Judicial Service (Head Office)</h3>
        <p>Software Engineer</p>
        <p>Accra, Ghana</p>
        <p>Sept 2020 - Aug 2021</p>
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
            Advocate for new or improved development practices that increase
            availability, resilience, and scalability of our solutions.
          </li>
        </ul>
      </div>

      <div className="experience">
        <h3>YelloFix</h3>
        <p>Software Developer</p>
        <p>Accra, Ghana</p>
        <p>August 2019 - Jan 2020</p>
        <p className="yellofix">
          Y<span>F</span>
        </p>
        <ul>
          <li>
            Developed responsive web applications that cut accross all modern
            devices to provide users with quality user experience.
          </li>
          <li>
            Put UI/UX wireframes to actual React and CSS code, and integrated
            frontend system with backend API's.
          </li>
          <li>
            Advocated on effective development patterns to ensure consistent and
            easily reusable code.
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
