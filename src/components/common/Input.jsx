import React from 'react';
 
const Input = ({title, size}) => {
  return (
    <input type="text" placeholder={`Enter ${title}`} className={`bg-[#47474780] text-white border-[3px] border-[#ffffff33] rounded-[45px] py-[17px] px-3 text-[23px] w-100 leading-[34px] font-normal placeholder:text-[#ffffff33]`}  />
  );
}
 
 
export default Input; 