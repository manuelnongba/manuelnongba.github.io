import "./Projects.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="project1"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      exit={{ opacity: 0 }}
    >
      <img
        src={open ? "../img/multigif.gif" : "../img/multi.png"}
        className="img1"
        alt="Multi Explore Project"
        onMouseOver={() => setOpen(true)}
        onMouseOut={() => setOpen(false)}
      />
    </motion.div>
  );
};

export default Projects;
