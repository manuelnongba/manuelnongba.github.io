import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        padding: '15px 0',
        borderTop: '1px solid rgb(218, 215, 215)',
        width: '100%',
      }}
    >
      <div className="images-contact">
        <a href="https://github.com/manuelnongba">
          <img src="/assets/icons/github.svg" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/emmanuel-anongba-92469019b/">
          <img src="/assets/icons/linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://twitter.com/eacodesimba">
          <img src="/assets/icons/twitter.svg" alt="twitter" />
        </a>
        <a href="mailto:eanongba19@gmail.com">
          <img src="/assets/icons/email.svg" alt="email" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
