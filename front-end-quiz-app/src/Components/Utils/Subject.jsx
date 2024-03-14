import React from "react";

const Subject = ({ subject, src }) => {
  return (
    <div className="absolute top-10 left-40 font-semibold text-xl flex items-center justify-between">
      <img src={src} alt="logo" className="bg-red-200 rounded-md shadow-sm" />
      <h1 className="mx-4">{subject}</h1>
    </div>
  );
};

export default Subject;
