import "./Projects.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      exit={{ opacity: 0 }}
    >
      <div className="project">
        <img
          src={open ? "../img/pharma.gif" : "../img/pharma.png"}
          alt="Multi Explore Project"
          onMouseOver={() => setOpen(true)}
          onMouseOut={() => setOpen(false)}
        />
        <div className="project-description">
          <h2>PharmaPro</h2>
          <p>
            A pharmacy management application built with ReactJS, ExpressJS and
            MongoDB to make daily transactions simple and efficient and also
            keep track of inventory.
          </p>
        </div>
      </div>
      <div className="project">
        <img src="../img/gojek.png" alt="gojek" />
        <div className="project-description">
          <h2>Gojek UI</h2>
          <p>
            Built the UI of Gojek super app website in indonesia with ReactJS
            and CSS.{" "}
          </p>
        </div>
      </div>
      <div className="project">
        <img
          src={open ? "../img/multigif.gif" : "../img/multi.png"}
          alt="Multi Explore Project"
          onMouseOver={() => setOpen(true)}
          onMouseOut={() => setOpen(false)}
        />
        <div className="project-description">
          <h2>Multi-Explore</h2>
          <p>
            This is an search application that returns the result of one search
            term from Google's, YouTube's and Wikipedia's API's. Built with
            ReactJS.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
