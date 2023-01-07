import React from "react";
import "./Research.css";
import { motion } from "framer-motion";

const Research = () => {
  return (
    <motion.div
      className="research"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <section>
        <div className="research-cover">
          <div className="research-img">
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807379/research_f7y41r.png"
              alt="pharmacy research"
            />
            <p>
              This project is insight into the design and implementation of a
              Pharmaceutical Suite. The primary aim of is to improve working
              conditions, efficient stock handling and customer satisfaction in
              the pharmacy. This research and project was under the supervision
              of Dr. Ebenezer Owusu - Head of Dept. of the Computer Science
              Department in University of Ghana.
            </p>
          </div>
        </div>

        <div className="research-intro">
          <div className="research-img">
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807378/research2_xbdahu.png"
              alt="pharmacy research"
              className="research-intro"
            />
            <p>
              Today proper handling is one of the most important features of all
              system. The suite provides cleverness to perform any kind of task
              in a particular form. This is pharmacy suite; it is used to manage
              most pharmacy related activities in the pharmacy.
            </p>
          </div>
        </div>
        <div className="research-intro">
          <div className="research-img">
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807378/research3_ysxqng.png"
              alt="pharmacy research"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Research;
