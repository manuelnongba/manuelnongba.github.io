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
          <li>
            Collaboratively designed the front-end of a self-service Hospital
            Portal with Angular within a team of four to provide stakeholders
            with the capability to access medical records and schedule
            appointments, enhancing the overall patient experience.
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
          <li>
            Implemented a successful redesign of web applications working
            closely with product design and collaborated with cross-functional
            teams to improve application performance and usability.
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
            Optimized the e-filing process on the e-justice system, facilitating
            a seamless and paperless filing process, reducing administrative
            burdens.
          </li>
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
            Defined and conducted design processes for backend for all stages
            including research, conceptualization and implementation.
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
