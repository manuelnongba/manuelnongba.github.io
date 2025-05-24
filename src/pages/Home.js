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
            "I'm a computer programmer building robust, scalable systems across
            public and smart city domains.
          </p>
          <br />
          <p>
            I am currently building real-time tools for Elliot Cloud - Bosonit
            infrastructure."
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
