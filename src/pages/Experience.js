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
        <p>Feb 2022 - Present</p>
        <img
          src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1698250178/Spagad_Logo_i5p3re.jpg"
          alt="Spagad Technologies/Axon Information Systems"
        />
        <ul>
          <li>
            Optimized Ghana Integrated Tax Management and Information System
            (GITMIS) reports at GRA offices significantly reducing response
            times by 40%, leading to a notable increase in report generation.
          </li>
          <li>
            Collaborated closely with the Chief Technology Officer to enhance
            features on the GRA self-service taxpayers' portal, simplifying the
            tax filing and payment process, resulting in an improved user
            experience and contributed to increased revenue for our
            stakeholders.
          </li>
          <li>
            Linked GRA Staff to their Ghana Card Numbers via NIA's API,
            implementing an automated retirement-age account deactivation system
            for streamlined personnel management and enhanced security.
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
            Enhanced the e-justice platform, resulting in increased efficiency
            when handling court dockets fostering in a more responsive and
            effective judicial system.
          </li>
          <li>
            Elevated application performance by identifying and implementing
            enhancements through strategic recommendations and system design
            resulting in optimized functionalities and improved overall system
            efficiency.
          </li>
          <li>
            Defined and conducted design processes for the Node.js backend for
            all stages including research, conceptualization and implementation.
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
