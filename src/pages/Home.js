import '../styles/Home.css';
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <div className="me">
        <img src="/assets/icons/me.png" alt="my bitmoji" />
        <div className="about">
          <p>
            Hey there! I’m a computer programmer who loves turning complex
            problems into practical, data-driven solutions.
            <br />
            <br />
            Over the years, I’ve worked on projects in taxation, water systems,
            and smart city tech, helping governments and businesses boost
            efficiency and transparency.
            <br />
            <br />
            Right now, I’m building software at Elliot Cloud that helps cities
            and water systems run smarter through data and automation.
          </p>
        </div>
      </div>
      <div className="stack">
        <div className="stack-header">languages and technologies</div>
        <div className="stack-images images">
          <div>
            <img src="/assets/icons/c++.svg" alt="C++" />
          </div>
          <div>
            <img src="/assets/icons/js.svg" alt="javascript" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src="/assets/icons/typescript.svg" alt="typescript" />
            <p>TypeScript</p>
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
    </motion.div>
  );
};

export default Home;
