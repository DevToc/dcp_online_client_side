import React from "react";

import "./MainButton.scss";

const colors = {
  red: "#ff0707",
  green: "#38ae00",
};


const MainButton = ({ type, text , handleClick }) => {
  return (
    
    <button
      onClick = {handleClick}
      className={`${type} text-white bg-[${colors[type]}] w-[107px] sm:w-[217px] py-[6px] sm:py-[14px] sm:text-[23px] sm:leading-[34px] text-center text-[11px] leading-[17px] font-semibold rounded-[15.6px] sm:rounded-[31.5px] `}
    >
      {text}
    </button>
  )
};

export default MainButton;
