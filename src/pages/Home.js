import { Link } from 'react-router-dom';

import '../styles/Home.css';
import React from 'react';

const Home = () => {
  return (
    <section className="home-container">
      <div className="me">
        <img src="/assets/icons/me.png" alt="my bitmoji" />
        <div className="about">
          <p>
            I’m a computer programmer with experience in microservices, IoT
            systems, and information systems. I have a track record of helping
            governments and businesses improve efficiency and transparency
            through projects in taxation, water systems, and smart cities.
            <br />
            <br />I am currently expanding my skills in Reinforcement Learning
            and building software at Elliot Cloud that helps cities and water
            systems run smarter through data and automation.
          </p>
        </div>
      </div>
      <div className="stack">
        <div className="stack-header">languages and technologies</div>
        <div className="stack-images images">
          <div>
            <img src="/assets/icons/c++.svg" alt="C++" />
            <p>C++</p>
          </div>
          <div>
            <img src="/assets/icons/js.svg" alt="javascript" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src="/assets/icons/golang.svg" alt="golang" />
            <p>Golang</p>
          </div>
          <div>
            <img src="/assets/icons/sql.png" alt="sql" />
          </div>
          <div>
            <img src="/assets/icons/python.svg" alt="python" />
            <p>Python</p>
          </div>
          <div>
            <img src="/assets/icons/nodejs.svg" alt="node js" />
          </div>
          <div>
            <img src="/assets/icons/postgresql.svg" alt="PostgreSQL" />
            <p>PostgreSQL</p>
          </div>
          <div>
            <img src="/assets/icons/react.svg" alt="react" />
            <p>React</p>
          </div>
          <div>
            <img src="/assets/icons/angular.svg" alt="react" />
            <p>Angular</p>
          </div>
        </div>
      </div>

      <div className="explore">
        <div className="explore-header">explore my work</div>
        <div className="explore-cards">
          <div className="explore-card">
            <div className="explore-card-header">Career</div>
            <div className="explore-card-body">
              My work has helped governments, hospitals and businesses.
              Currently, I'm focused on building smart solutions for cities and
              water systems at Elliot Cloud.
            </div>
            <Link to="/experience" className="explore-card-link">
              View my career
            </Link>
          </div>
          <div className="explore-card">
            <div className="explore-card-header">Projects</div>
            <div className="explore-card-body">
              I have worked on a variety of projects and I am always looking for
              new and exciting projects to work on.
            </div>
            <Link to="/projects" className="explore-card-link">
              View my projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
