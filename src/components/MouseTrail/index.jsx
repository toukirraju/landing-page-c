"use client";
import React, { useEffect, useRef } from "react";
import "./MouseTrail.css"; // Assuming you have a CSS file with the provided styles

const MouseTrail = () => {
  const coords = { x: 0, y: 0 };
  const circlesRef = useRef([]);

  useEffect(() => {
    const colors = [
      "#64b5f6",
      "#42a5f5",
      "#2196f3",
      "#1e88e5",
      "#1976d2",
      "#1565c0",
      "#0d47a1",
      "#0a3e72",
      "#083049",
      "#052027",
      "#64b5f6",
      "#42a5f5",
      "#2196f3",
      "#1e88e5",
      "#1976d2",
      "#1565c0",
      "#0d47a1",
      "#0a3e72",
      "#083049",
      "#052027",
    ];

    circlesRef.current.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circlesRef.current.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.transform = `scale(${
          (circlesRef.current.length - index) / circlesRef.current.length
        })`;
        circle.x = x;
        circle.y = y;

        const nextCircle =
          circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 20 }, (_, index) => (
        <div
          key={index}
          ref={(el) => (circlesRef.current[index] = el)}
          className="circle"
        ></div>
      ))}
    </>
  );
};

export default MouseTrail;
