import { Link } from 'react-router-dom';

import '../styles/Home.css';
import React from 'react';

const Home = () => {
  return (
    <>
      <section className="home-container">
        <div className="me">
          <img src="/assets/icons/me.png" alt="my bitmoji" />
          <div className="about">
            <p>
              {/* I’m a computer programmer with experience in microservices, IoT
            systems, and information systems. I have a track record of helping
            governments and businesses improve efficiency and transparency
            through projects in taxation, water systems, and smart cities.
            <br /> */}
              I am currently expanding my knowledge
              <span className="highlight"> Reinforcement Learning </span> and
              working on <span className="highlight"> IoT systems </span> at
              Elliot Cloud to helps cities and water systems operate smarter
              through events and automation. I also build some cool stuff on
              free time.
            </p>
          </div>
        </div>

        <div className="explore">
          {/* <div className="explore-header">explore my work</div> */}
          <div className="explore-cards">
            <div className="explore-card">
              <div className="explore-card-header">Projects</div>
              <div className="explore-card-body">
                I have worked on a variety of projects and I am always looking
                for new and exciting projects to work on.
              </div>
              <Link to="/projects" className="explore-card-link">
                View my projects
              </Link>
            </div>
            <div className="explore-card">
              <div className="explore-card-header">Writings</div>
              <div className="explore-card-body">
                Essays and technical notes on systems, research, and
                reinforcement learning.
              </div>
              <Link to="/writings" className="explore-card-link">
                View my writings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
