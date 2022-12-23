import React from "react";
import "./Index.scss"

const Wallet = () => {
  return (
    <div className="rounded-[12.8px] sm:rounded-[20px] w-[129px] h-[129px] sm:w-[201px] sm:h-[201px] bg-gradient-to-b p-[1.5px] from-[#38ae00ff]  to-[#38ae0030]">
      <div className="flex flex-col justify-between h-full text-white bg-[#474747] rounded-[12px] sm:rounded-[20px] p-[18px] sm:px-[14px] sm:py-[30px] items-center">
        <div className="title text-[16px] leading-[25px] sm:text-[26px] sm:leading-[39px] text-white font-semibold">
          Wallet 1
        </div>
        <div className="id mt-[1.39px] sm:mt-[2px] text-[12px] leading-[18px] sm:text-[19px] sm:leading-[28px] text-[#ffffff55] font-normal">
          ID: 54251
        </div>
        <div className="btn-open mt-[23px] sm:mt-[35px] mx-auto">
          <button
          
            className={` text-white text-[10px] leading-[16px] bg-[#38ae00] py-[3px] px-[31.5px] text-center sm:py-[5px] sm:text-[17px] sm:leading-[26px] font-semibold sm:rounded-[31.5px] rounded-[20px]`}
          >
            Open
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
