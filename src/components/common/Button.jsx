import React from "react";

import "./Button.scss";

const colors = {
  red: "#ff0707",
  green: "#38ae00",

};

const sizes  = {
  "big":"w-[217px] py-[14px] text-[23px] leading-[34px] font-semibold rounded-[31.5px] ",
  "small":"w-[145px] py-[5px] text-[17px] leading-[26px] font-semibold rounded-[31.5px] ",
  "large":"w-[367px] py-[14px] text-[23px] leading-[34px] font-semibold rounded-[31.5px] "

}

const Button = ({ type, text,size }) => {
  return (
    <button
      className={`${type} text-white bg-[${colors[type]}] ${sizes[size?size:"big"]} text-center `}
    >
      {text}
    </button>
  );
};

export default Button;
