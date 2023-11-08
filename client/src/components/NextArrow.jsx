import React from "react";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`absolute z-10 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer ${className}`}
        style={{ ...style }}
        onClick={onClick}
      >
        {/* You can use an SVG or a simple character like '>' for the arrow */}
        {/* <span className="text-2xl text-white">{'>'}</span> */}
      </div>
    );
  };

  export default NextArrow;