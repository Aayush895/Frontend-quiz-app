import React from "react";

const Container = (props) => {
  return (
    <div
      className="flex items-center justify-around border border-black h-[100vh]"
      id="intro-container"
    >
      {props.children}
    </div>
  );
};

export default Container;
