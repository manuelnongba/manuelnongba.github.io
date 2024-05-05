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
        <img
          src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807373/me_btepdb.png"
          alt="my bitmoji"
        />
        <div className="about">
          "Welcome to my portfolio, where I express my thoughts through code. I
          like to design robust, scalable, and user-friendly applications. I
          thrive on solving complex problems, writing clean and efficient code,
          and collaborating with cross-functional teams. Explore my work to see
          how I leverage my technical skills and creativity to deliver software
          solutions that make a difference."
        </div>
      </div>
      <div className="stack">
        <div className="stack-header">languages and technologies</div>
        <div className="stack-images images">
          <div>
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1713663736/c_jfv2gw.svg"
              alt="C++"
            />
            {/* <p>C++</p> */}
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807355/js_tyv6zl.svg"
              alt="javascript"
            />
            <p>JavaScript</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1676918635/typescript_original_logo_icon_146317_xbicoh.svg"
              alt="postman"
            />
            <p>TypeScript</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1698157771/sql_ypptxa.png"
              alt="css"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1713663739/python-5_ydb2lk.svg"
              alt="python"
            />
            <p>Python</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807375/react_gncl47.svg"
              alt="react"
            />
            <p>React</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807373/nodejs_twitbd.svg"
              alt="node js"
            />
            {/* <p>NodeJS</p> */}
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807375/react_gncl47.svg"
              alt="postman"
            />
            <p>React Native</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807318/express_kxywhw.svg"
              alt="express js"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807324/html5_z63blp.svg"
              alt="html5"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807312/css3_sue5t6.svg"
              alt="css"
            />
            <p>CSS3</p>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1698170519/postgresql_a8krhg.svg"
              alt="redux"
            />
            <p>PostgreSQL</p>
          </div>
        </div>
      </div>
      <div className="images-contact">
        <a href="https://github.com/manuelnongba">
          <span>github</span>
          <img
            src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807319/github_kkd7de.svg"
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/emmanuel-anongba-92469019b/">
          <span>linkedin</span>
          <img
            src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807372/linkedin_jrn0k1.svg"
            alt="linked in"
          />
        </a>
        <a href="https://twitter.com/eacodesimba">
          <span>twitter</span>
          <img
            src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807377/twitter_dwvspp.svg"
            alt="twitter"
          />
        </a>
        <a href="https://dev.to/manuelnongba">
          <span>devto</span>
          <img
            src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807314/devto_xmqavx.svg"
            alt="dev"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
