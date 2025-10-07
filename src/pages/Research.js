import React from 'react';
import '../styles/Research.css';

const Research = () => {
  const projectInfo =
    'This project is insight into the design and implementation of a Pharmaceutical Suite. The primary aim of which is to improve working conditions, efficient stock handling and increase customer satisfaction in the pharmacy. This research and project was under the supervision of Dr. Ebenezer Owusu - Head of Dept. of the Computer Science Department in University of Ghana.';

  const resrchInfo =
    'Proper inventory handling is one of the most important aspects of a commercial business. This suite provides the features to perform any basic task required in a pharmacy. This research also provides a deep insight of what health care is going to look like in the future and takes a look at the drawbacks of healthcare at present.';

  return (
    <section className="research">
      <section>
        <div>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
            Pharma Pro Research
          </h2>
          <div className="research-cover">
            <div className="research-img">
              {/* <img
              src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807379/research_f7y41r.png"
              alt="pharmacy research"
            /> */}
              <p>{projectInfo}</p>
            </div>
          </div>

          <div className="research-intro">
            <div className="research-img">
              <img
                src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672807378/research2_xbdahu.png"
                alt="pharmacy research"
                className="research-intro"
              />
              <p>{resrchInfo}</p>
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
        </div>
      </section>
    </section>
  );
};

export default Research;
