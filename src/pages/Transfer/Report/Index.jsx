import React, { useState } from "react";
import BenefitKey from "../../../components/BenefitKey/Index";

import Button from '../../../components/common/Button'
import Label from "../../../components/common/Label";
import SendEmail from "../../../components/SendEmail/Index";
import Plus from "../../../components/Plus/Index";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const Report = () => {
  const navigate = useNavigate();
  const [emails, setEmails] = useState([1]);
  const handlePlus = () => {
    setEmails([...emails, 1]);
  };
  return (
    <div className="report pr-[20px] pl-[20px] sm:pl-[40px] py-[52px] ">
      <div className="flex  flex-col items-start">
        <div className="title text-left sm:text-[37px] sm:leading-[56px] text-[28px] leading-[48px]  font-bold text-white">
          Transfer Report
        </div>
        <Label>{"The report has been forwarded."}</Label>
      </div>
      <div className=" send-key mt-[15px] sm:mt-[20px] rounded-[20px] border-[2px] bg-[#353535] border-[#474747] sm:w-[592px] pl-[15px] sm:pl-[30px] pr-[10px] sm:pr-[16px]  py-[15px]">
        <div className="overflow-keys h-[319px] overflow-y-auto pr-[20px] sm:pr-[25px] bg-[#353535]">
          <div className="title sm:text-[32px]  text-[24px] leading-[30px] sm:leading-[48px] font-medium sm:font-bold text-left text-white">
            Send key to beneficiaries
          </div>
          <div className="keys mt-[20px] flex flex-col gap-[30px]">
            <BenefitKey></BenefitKey>
            <BenefitKey></BenefitKey>
            <BenefitKey></BenefitKey>
            <BenefitKey></BenefitKey>
          </div>
        </div>
      </div>
      <div className="send-email mt-[24px] border-[2px] bg-[#353535] border-[#474747] rounded-[20px] sm:w-[592px] sm:py-[20px] py-[15px]  pl-[15px] sm:pl-[30px] pr-[10px] sm:pr-[16px]">
        <div className="title sm:text-[32px]  text-[24px] leading-[30px] sm:leading-[48px]  font-medium sm:font-bold text-left text-white">
          Send to email
        </div>
        <div className="emails flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-[10px] overflow-keys">
          {emails.map((email, index) => {
            return <SendEmail></SendEmail>;
          })}
        </div>
        <div className="mt-[31px] flex justify-end">
          <Plus handleClick={handlePlus}></Plus>
        </div>
      </div>
      <div className="btn-group flex flex-col sm:flex-row gap-[20px] mt-[40px]">
        <button className="bg-[#38AE00]  shadow-[0px_0px_19.2962px_#38AE00] px-[40px] py-[10px] text-white text-[20px] leading-[30px] font-semibold rounded-[25.3263px]">
          Send
        </button>

        <button className="bg-[#FF0707]  shadow-[0px_0px_19.2962px_#FF0707] px-[33px] py-[10px] text-white text-[20px] leading-[30px] font-semibold rounded-[31.6621px]" onClick = {e=> navigate(-1)}>
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default Report;
