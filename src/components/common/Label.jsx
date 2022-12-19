import React from 'react';
 
const Label = (props) => {
  return (
    <label htmlFor="" className={`text-[#ffffff33] text-left ${props.size==="small"?"text-[16px] leading-[24px]": "sm:text-[23px] leading-sm:[34px] text-[16px] leading-[24px] mb-[7px]"} font-medium `}>
        {props.children}
    </label>
  );
}
 
 
export default Label;