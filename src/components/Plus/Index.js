import React from 'react';
 
const Plus = ({handleClick}) => {
  return (
    <div className="sm:rounded-[33px] rounded-[18px] w-[36px] h-[36px] sm:w-[66px] sm:h-[66px]  bg-gradient-to-b p-[2px] from-[#38ae00ff]  to-[#38ae0000]" onClick = {handleClick}>
    <div className="flex  cursor-pointer text-white bg-[#474747] w-[34px] h-[34px] sm:w-[64px] sm:h-[64px] rounded-[32px] sm:px-[22px] sm:py-[15px] items-center ">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 3L16 29"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M29 16L3 16"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
  );
}
 
export default Plus;