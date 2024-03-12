import React, { useState } from "react";

const ToggleButton = () => {
  const [style, setStyle] = useState({
    left: "0rem",
  });

  function handleStyle() {
    const { left } = style;
    if (left == "0rem") {
      setStyle({ ...style, left: "2rem" });
    } else {
      setStyle({ ...style, left: "0rem" });
    }
  }
  return (
    <div className="absolute top-10 right-40 flex items-center justify-between">
      <img src="../../assets/images/icon-moon-dark.svg" className="mx-3" />
      <div className="w-[4rem] h-[2rem] relative rounded-2xl bg-purple-700 shadow-lg">
        <div
          className="w-[1.5rem] h-[1.5rem] rounded-full bg-white absolute top-[50%] translate-y-[-50%] translate-x-1 ease-in-out duration-500 cursor-pointer"
          style={style}
          onClick={handleStyle}
        ></div>
      </div>
      <img src="../../assets/images/icon-sun-dark.svg" className="mx-3" />
    </div>
  );
};

export default ToggleButton;
