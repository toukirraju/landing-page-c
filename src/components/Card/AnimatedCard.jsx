import React, { useEffect, useRef, useState } from "react";
import "./Card.css"; // Assuming you have a CSS file with the provided styles

const AnimatedCard = () => {
  const [blobPosition, setBlobPosition] = useState({ left: 0, top: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    setBlobPosition({
      left: `${clientX - 210}px`,
      top: `${clientY - 560}px`,
    });
  };

  return (
    <div className="blob-card" onMouseMove={handleMouseMove}>
      <div
        className="blob"
        style={{ left: blobPosition.left, top: blobPosition.top }}
      ></div>
      <div className="blob-blur"></div>
      <div className="card-content">
        {/* Your card content goes here */}
        <h2>Your Card Title</h2>
        <p>Your card content...</p>
      </div>
    </div>
  );
};

export default AnimatedCard;
