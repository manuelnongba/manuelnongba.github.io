import "./Home.css";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <div className="about">
        I am a Software Engineer well-versed in JavaScript. I like to use React,
        Redux, NodeJS(Express) and MongoDB whenever I am working on a project. I
        love writing readable and reusable code. Oh , I also try to solve
        leetcode problems for fun 😀.
        <img src="../img/me.png" alt="my bitmoji" />
      </div>
      <div className="stack">
        <div className="stack-header">languages and libraries</div>
        <div className="stack-images images">
          <div className="deep-purple">
            <img src="../img/js.svg" alt="javascript" />
            <p>JavaScript</p>
          </div>
          <div className="light-purple">
            <img src="../img/react.svg" alt="react" />
            <p>React</p>
          </div>
          <div className="deep-purple">
            <img src="../img/express.svg" alt="express js" />
          </div>
          <div className="light-purple">
            <img src="../img/mongodb.svg" alt="mongo" />
            <p>MongoDB</p>
          </div>
          <div className="deep-purple">
            <img src="../img/html5.svg" alt="html5" />
          </div>
          <div className="light-purple">
            <img src="../img/python.svg" alt="postman" />
            <p>Python</p>
          </div>
          <div className="deep-purple">
            <img src="../img/nodejs.svg" alt="node js" />
            <p>NodeJS</p>
          </div>
          <div className="light-purple">
            <img src="../img/css3.svg" alt="node js" />
            <p>CSS3</p>
          </div>
          <div className="deep-purple">
            <img src="../img/redux.svg" alt="node js" />
            <p>Redux</p>
          </div>
        </div>
      </div>
      <div className="images-contact">
        <a href="https://github.com/manuelnongba">
          <span>github</span>
          <img src="../img/github.svg" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/emmanuel-anongba-92469019b/">
          <span>linkedin</span>
          <img src="../img/linkedin.svg" alt="linked in" />
        </a>
        <a href="https://twitter.com/eacodesimba">
          <span>twitter</span>
          <img src="../img/twitter.svg" alt="twitter" />
        </a>
        <a href="https://dev.to/manuelnongba">
          <span>devto</span>
          <img src="../img/devto.svg" alt="dev" />
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
