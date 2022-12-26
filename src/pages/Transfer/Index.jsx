import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import Input from "../../components/common/Input";
import Label from "../../components/common/Label";
import Plus from "../../components/Plus/Index";
import Description from "../../components/Description/Index";
import Benefit from "../../components/Benefit/Index";

const Transfer = () => {
  
  const [beneficiaries, setBeneficiaries] = useState([1]);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Transfer";
  }, []);
  const handlePlus = () => {
    setBeneficiaries([...beneficiaries, 1]);
  };
  const handleMake = () => {
    navigate("/report");
  };

  return (
    <div className="transfer sm:pr-[20px] sm:pl-[40px] sm:py-[52px] px-[20px] py-[28px]">
      <div className="flex  flex-col items-start">
        <div className="title text-left sm:text-[37px] sm:leading-[56px] text-[32px] leading-[48px] font-bold text-white">
          Transfer
        </div>
        <Label>
          {"Input all details for simple, fast and secure transfer."}
        </Label>
      </div>
      <div className="sum mt-[20px] flex flex-col items-start w-4/5 md:w-2/5">
        <label
          htmlFor=""
          className="sm:text-[23px] sm:leading-[34px] text-[12.5px] leading-[19px] text-[#ffffff80] mb-2"
        >
          Sum
        </label>
        <input
          type="text"
          value={300}
          className="bg-[#474747] border-[#ffffff33] outline-none w-100 border-2 focus:border-[#009600] sm:py-[16px] sm:px-6 text-white sm:text-2xl px-[10px] py-[9px] sm:right-0r rounded-[45px] text-[12px] leading-[20px] placeholder:text-[#ffffff33]"
        />
      </div>
      <div className="benefit w-2/2 xl:w-1/2 rounded-[20px] border-2 border-[#474747] px-[16px] py-[11px] sm:px-[30px] sm:py-[20px] mt-[16px] sm:mt-[29px]">
        <div className="title sm:text-[32px] sm:leading-[48px] text-[17.5px] leading-[26px] text-white text-left font-bold">
          Beneficiaries:
        </div>
        {beneficiaries.map((item, index) => {
          return <Benefit></Benefit>;
        })}
        <div className="flex justify-between items-center mt-[17px]">
          <Description>At least one is required.</Description>
          <Plus handleClick={handlePlus} />
        </div>
      </div>
      <div className="encrypted mt-[16px] sm:mt-[40px] flex flex-col w-2/2 xl:w-2/5 items-start">
        <Label>Encrypted Password:</Label>
        <Input title={"wallet name"}></Input>
        <Description>
          This is the wallet's encryption password, not the user's password.
        </Description>
      </div>
      <div className="btn-transfer mt-[20px] flex justify-center xl:justify-start">
        <button
          onClick={handleMake}
          class="green text-white bg-[#38ae00]  sm:px-[40px] px-[32px] py-[8px] rounded-[19.3px] text-[15.3px] leading-[23px] shadow-[0px_0px_14.7559px_#38AE00]  sm:py-[14px] sm:text-[23px] sm:leading-[34px] font-semibold sm:rounded-[31.5px]  text-center "
        >
          Make the Transfer
        </button>
      </div>
    </div>
  );
};

export default Transfer;
