import React from 'react';
 
const Label = (props) => {
  return (
    <label htmlFor="" className={`text-[#ffffff33] text-[23px] leading-[34px] font-medium mt-[7px]`}>
        {props.children}
    </label>
  );
}
 
 
export default Label;