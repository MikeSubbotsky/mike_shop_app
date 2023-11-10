import React from 'react';
import './Heading.css'; 

const Heading = ({ text }) => {
  return (
    <h2 className="fancy-heading">{text}</h2>
  );
};

export default Heading;