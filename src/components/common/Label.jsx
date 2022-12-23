import React from 'react';
 
const Label = (props) => {
  return (
    <label htmlFor="" className={`text-[#ffffff33] text-left text-[10px] leading-[20px] sm:text-[23px] sm:leading-[34px]  mb-[7px]"} font-medium `}>
        {props.children}
    </label>
  );
}
 
 
export default Label;