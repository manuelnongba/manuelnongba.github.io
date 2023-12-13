import '../styles/Projects.css';
import React from 'react';

const Project = ({ title, desc, website, github, image, alt }) => {
  let pharmaDetails = null;
  if (title === 'PharmaPro') pharmaDetails = 'show';

  return (
    <div className="project">
      <div className="project-img">
        <img src={image} alt={alt} />
      </div>
      <div className="project-description">
        <h2>{title}</h2>
        <br />
        <p>{desc}</p>
        {website || github ? (
          <div className="links">
            {website ? (
              <a href={website} target="_blank" rel="noreferrer">
                <ion-icon name="globe-outline"></ion-icon>
                <span>website</span>
              </a>
            ) : null}
            {github ? (
              <a href={github} target="_blank" rel="noreferrer">
                <ion-icon name="logo-github"></ion-icon>
                <span>github</span>
              </a>
            ) : null}
          </div>
        ) : null}
        {pharmaDetails ? (
          <div>
            <div className="acc">admin account credentials</div>{' '}
            <strong>username</strong>: manuelnongba password: helloworld
            <br></br>
            <div className="acc">attendant account credentials</div>
            <strong>username</strong>: robobo password: helloworld
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
