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
        <h3>Spagad Technologies/Axon Information Systems</h3>
        <p>Software Engineer</p>
        <p>Accra, Ghana</p>
        <p>Feb 2022 - October 2023</p>
        <img
          src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1698250178/Spagad_Logo_i5p3re.jpg"
          alt="Spagad Technologies/Axon Information Systems"
        />
        <ul>
          <li>
            Provided assistance and feature updates to Ghana Integrated Tax
            Management and Information System (GITMIS) deployed in GRA offices
            for tax payer management.
          </li>
          <li>
            Worked with a team of 4 to develop a self-service Hospital Portal
            for our stakeholders, to allow patients get access to their medical
            records and make appointments.
          </li>
          <li>
            Liaised directly with stakeholders to finetune requirements and
            improvement of applications.
          </li>
        </ul>
      </div>
      <div className="experience">
        <h3>Jaskosdata Limited</h3>
        <p>Software Engineer</p>
        <p>Tema, Ghana</p>
        <p>Oct 2021 - Jan 2022</p>
        <img
          src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1673743783/jdl_uxk08n.jpg"
          alt="Jaskosdata Limited"
        />
        <ul>
          <li>
            Architected and implemented organizations and projects UI based on
            user feedback.
          </li>
          <li>
            Implemented a successful redesign of apps working closely with
            product design.
          </li>
          <li>Built and deployed a Rest APIs for the backend.</li>
          <li>
            Implemented best practices, quality assurance standards and project
            management procedures.
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
            Enhanced applications by identifying areas of improvement, making
            recommendations, designing and implementing systems.
          </li>
          <li>
            Designed and implemented software systems for the courts and
            maintain, improve and debug existing codebases.
          </li>
          <li>
            Advocate for new or improved development practices that increase
            availability, resilience, and scalability of our solutions.
          </li>
          <li>
            • Liaised with peers to improve the e-justice platform to increase
            efficiency when working with court dockets.
          </li>
        </ul>
      </div>

      {/* <div className="experience">
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
      </div> */}
    </motion.div>
  );
};

export default Experience;
