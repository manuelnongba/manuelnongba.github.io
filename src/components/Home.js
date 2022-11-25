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
        Software Engineer well-versed in the JavaScript language. I am highly
        proficient in Vanilla JS, Node JS and MongoDB. I have experience in
        designing, deploying and managing web applications. Hardworking
        professional and analytic person with excellent communication skills who
        combines professional and interpersonal skills to accomplish the
        mission, vision and the goal of an organization.
        <img src="../img/me.png" alt="my bitmoji" />
      </div>
      <div className="stack">
        <div className="stack-header">Languages and technologies</div>
        <div className="images">
          <img src="../img/js.jpeg" alt="javascript" />
          <img src="../img/react.svg" alt="react" />
          <img src="../img/express.svg" alt="express js" />
          <img src="../img/mongodb.svg" alt="mongo" />
          <img src="../img/html5.svg" alt="html5" />
          <img src="../img/postman.svg" alt="postman" />
          <img src="../img/nodejs.svg" alt="node js" />
        </div>
      </div>
      <div className="images contact">
        <a href="https://github.com/manuelnongba">
          <img src="../img/github.svg" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/emmanuel-anongba-92469019b/">
          <img src="../img/linkedin.svg" alt="linked in" />
        </a>
        <a href="https://twitter.com/eacodesimba">
          <img src="../img/twitter.svg" alt="twitter" />
        </a>
        <a href="https://dev.to/manuelnongba">
          <img src="../img/devto.svg" alt="dev" />
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
