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
        <div className="project-img">
          <img
            src={
              open
                ? "https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807375/pharma_y0s6wk.gif"
                : "https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807374/pharma_ua2ll7.png"
            }
            alt="Multi Explore Project"
            onMouseOver={() => setOpen(true)}
            onMouseOut={() => setOpen(false)}
          />
        </div>
        <div className="project-description">
          <h2>PharmaPro</h2>
          <p>
            A pharmacy management application built with ReactJS, ExpressJS and
            MongoDB to make daily transactions simple and efficient and also
            keep track of inventory.
          </p>
          <div className="links">
            <a
              href="https://pharmapro.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="globe-outline"></ion-icon> website
            </a>
            <a
              href="https://github.com/manuelnongba/PharmaPro"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon> github
            </a>
          </div>
          <strong>admin account credentials</strong> username: manuelnongba
          password: helloworld
          <br></br>
          <strong>attendant account credentials</strong> username: robobo
          password: helloworld
        </div>
      </div>
      <div className="project">
        <div className="project-img">
          <img
            src={
              open
                ? "https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807377/multigif_nzbxm5.gif"
                : "https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807375/multi_x7ukof.jpg"
            }
            alt="Multi Explore Project"
            onMouseOver={() => setOpen(true)}
            onMouseOut={() => setOpen(false)}
          />
        </div>
        <div className="project-description">
          <h2>Multi-Explore</h2>
          <p>
            Multi-Explore is an search application that returns the result of
            one search term from Google's, YouTube's and Wikipedia's API's.
            Built with ReactJS.
          </p>
          <div className="links">
            <a
              href="https://multiexplore.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="globe-outline"></ion-icon> website
            </a>
            <a
              href="https://github.com/manuelnongba/multiexplore"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon> github
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-img">
          <img
            src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807322/gojek_pelvtu.jpg"
            alt="gojek"
          />
        </div>
        <div className="project-description">
          <h2>Gojek UI</h2>
          <p>
            This is the UI of Gojek super app website in indonesia. Built with
            ReactJS and CSS.{" "}
          </p>
          <div className="links">
            <a
              href="https://gojeksuperapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="globe-outline"></ion-icon> website
            </a>
            <a
              href="https://github.com/manuelnongba/gojek"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon> github
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
