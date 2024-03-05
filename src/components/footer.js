import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '40px',
        padding: '20px 0',
        borderTop: '1px solid rgb(218, 215, 215)',
        fontSize: '1.6rem',
      }}
    >
      Copyright &copy;Emmanuel Anongba {new Date(Date.now()).getFullYear()} All
      rights reserved
    </div>
  );
};

export default Footer;
