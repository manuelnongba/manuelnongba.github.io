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
        <h3>Bosonit</h3>
        <p>Full-Stack Developer</p>
        <p>Spain</p>
        <p>Nov 2024 - Present</p>
        <img
          src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1737685142/BosonitLogoFondo_yspol0.png"
          alt="Bosonit"
        />
        <ul>
          <li>Building Ataman - Elliot Cloud</li>
        </ul>
      </div>
      <div className="experience">
        <h3>Axon Information Systems</h3>
        <p>Software Developer</p>
        <p>Accra, Ghana</p>
        <p>Feb 2022 - Nov 2024</p>
        <img
          src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1714934319/Unknown_r6lh2h.jpg"
          alt="Axon Information Systems"
        />
        <ul>
          <li>
            Built and maintained a comprehensive enterprise application that
            serves as the backbone of tax administration for the Ghana Revenue
            Authority. GRA Taxpayers Portal.
          </li>
          <li>
            Maintained an online self-service system which allows the taxpayer
            to file returns, initiate payments and access other tax related
            services.
          </li>
        </ul>
      </div>
      <div className="experience">
        <h3>Jaskosdata Limited</h3>
        <p>Full Stack Developer</p>
        <p>Tema, Ghana</p>
        <p>Aug 2021 - Jan 2022</p>
        <img
          src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1673743783/jdl_uxk08n.jpg"
          alt="Jaskosdata Limited"
        />
        <ul>
          <li>
            Utilized redux to control state flow across multi-layered React
            components, allowing team to use redux dev tools for time-travel
            debugging and minimizing unintentional changes to state.
          </li>
          <li>
            Built components using React and TypeScript that made shipping new
            features to our product easier.
          </li>
        </ul>
      </div>
      <div className="experience">
        <h3>Judicial Service (Head Office)</h3>
        <p>Software Engineer</p>
        <p>Accra, Ghana</p>
        <p>Sept 2020 - Dec 2021</p>
        <img
          src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807312/coa.svg_eiiosd.png"
          alt="Judicial Service logo"
        />
        <ul>
          <li>
            Developed the front-end of the E-filing portal using JavaScript and
            HTML/CSS for filing of cases, self- assessment and case management.
          </li>
          <li>
            Increased the speed of the bail execution API by 35% after
            benchmarking, through server management and SQL Views for the Bail
            Execution Tracking System.
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
