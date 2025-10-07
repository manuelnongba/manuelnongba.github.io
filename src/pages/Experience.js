import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section className="experiences">
      <div className="experience">
        <h3>Bosonit (Elliot Cloud)</h3>
        <p>Full-Stack Developer </p>
        <p>Spain</p>
        <p>Nov 2024 - Present</p>
        <img src="/assets/bosonit.jpg" alt="Bosonit" />
        <p>
          I build tools to control and monitor IoT devices & smart city
          infrastructure through a dedicated software platform & use real-time
          data to improve water systems and cities.
        </p>
      </div>
      <div className="experience">
        <h3>Spagad Technologies (Axon Info Systems)</h3>
        <p>Software Systems Developer</p>
        <p>Accra, Ghana</p>
        <p>Feb 2022 - Nov 2024</p>
        <img src="/assets/axon.jpg" alt="Axon Information Systems" />
        <p>
          I worked on maintaining a comprehensive enterprise application that
          serves as the backbone of tax administration for the Ghana Revenue
          Authority.
        </p>
      </div>
      <div className="experience">
        <h3>Judicial Service (Head Office)</h3>
        <p>Software Engineer</p>
        <p>Accra, Ghana</p>
        <p>Sept 2020 - Dec 2021</p>
        <img src="/assets/coa.png" alt="Judicial Service logo" />
        <p>I worked on filing and bail executions tools & infrastructure.</p>
      </div>
    </section>
  );
};

export default Experience;
