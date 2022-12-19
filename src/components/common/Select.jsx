import React from 'react';
 
const Select = ({options}) => {
  return (
    <select name="" id="" className={`bg-[#47474780] border-[3px] border-[#ffffff33] rounded-[45px] py-[17px] px-3 text-[23px] leading-[34px] w-100 font-normal text-[#ffffff33] focus:border-[#38ae00] focus:outline-none`}>
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