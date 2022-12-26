import React from 'react';
 
const Select = ({options}) => {
  return (
    <select name="" id="" className={`bg-[#47474780] border-[3px] border-[#ffffff33] rounded-[24px] sm:rounded-[45px] sm:py-[17px] sm:px-3 py-[9px] px-[10px] text-[12px] leading-[19px] sm:text-[23px] sm:leading-[34px] w-100 font-normal text-[#ffffff33] focus:border-[#38ae00] focus:outline-none`}>
    {
      options===undefined? (
      <>
        <option value="" className='w-50'>select</option>
        <option value="">Man</option>
        <option value="">Woman</option></>
      
      ):(
          options.map((option, index)=>{
            return <option>{option}</option>
          })
      ) 
}
    </select>
  );
}
 
 
export default Select;