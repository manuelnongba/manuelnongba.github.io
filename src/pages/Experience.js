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
        <h3>Axon Information Systems</h3>
        <p>Software Developer</p>
        <p>Accra, Ghana</p>
        <p>Feb 2023 - Present</p>
        <img
          src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1714934319/Unknown_r6lh2h.jpg"
          alt="Axon Information Systems"
        />
        <ul>
          <li>
            Built and maintained integrations with partners like ICUMS, NIA, and
            Digital Innova.
          </li>
          <li>
            Implemented the integration of taxpayers' geographical locations
            with Google Maps, enhancing the efficiency of incorporating informal
            sector entities into the tax net.
          </li>
          <li>
            Reduced server load by 65% through optimizing APIs, streamlining
            query logic and data caching.
          </li>
        </ul>
      </div>
      <div className="experience">
        <h3>Jaskosdata Limited</h3>
        <p>Full Stack Developer</p>
        <p>Tema, Ghana</p>
        <p>Oct 2021 - Jan 2023</p>
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
            Integrated Stripe API into Clients' Node.js backend and updated UI
            of client-side React app, thereby streamlining subscription
            purchases, increasing revenue and improving customer retention.
          </li>
          <li>
            Leveraged best practices for efficient and modular code, quality
            assurance standards, project management procedures and set the
            front-end architectural direction.
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
            Developed the front-end of the E-filing portal using JavaScript and
            HTML/CSS for filing of cases, self-assessment and case management
            streamlining the legal process.
          </li>
          <li>
            Increased the speed of the bail execution API by 72% after
            benchmarking, through server management for the Bail Execution
            Tracking System.
          </li>
          <li>
            Optimized APIs for the e-filing portal, resulting in increased
            efficiency when handling court dockets.
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
