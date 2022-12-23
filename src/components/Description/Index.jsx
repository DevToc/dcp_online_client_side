import React from "react";
import { IoEllipse } from "react-icons/io5";
import useScreen from "../../hooks/useScreen";



const Description = (props) => {
  const screen = useScreen();
  return (
    <div className="description  flex items-start justify-start text-left">
      <div className="mt-1 mr-2">
        <IoEllipse color={"#38ae00"} size={screen.dynamicWidth<670? 8:20}></IoEllipse>
      </div>
      <p className="text-left text-[10px] leading-[16px] sm:text-[18px] sm:leading-[27px] font-medium text-[#ffffff80]">
       {props.children}
      </p>
    </div>
  );
};


export default Description;
