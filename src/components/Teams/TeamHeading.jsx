import React from "react";

const TeamHeading = ({ title, subtitle }) => {
  return (
    <div className="py-2 lg:py-5">
      <h3 className="subtitle">{title}</h3>
      <p className="content ">{subtitle}</p>
    </div>
  );
};

export default TeamHeading;
