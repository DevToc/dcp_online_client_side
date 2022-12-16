import React from "react";
import PropTypes from "prop-types";
import Input from "../../components/common/Input";
import Label from "../../components/common/Label";
import { IoEllipse } from "react-icons/io5";
import Button from "../../components/common/Button";

const Transfer = () => {
  return (
    <div className="transfer px-[60px] py-[52px] ">
      <div className="flex  flex-col items-start">
        <div className="title text-left text-[37px] leading-[56px]  font-bold text-white">
          Transfer
        </div>
        <div className="description text-[22px] leading-[33px] font-normal text-[#6c6c6c]">
          Input all details for simple, fast and secure transfer.{" "}
        </div>
      </div>
      <div className="sum mt-[20px] flex flex-col items-start w-2/5">
        <label
          htmlFor=""
          className="text-[23px] leading-[34px] text-[#ffffff80] mb-2"
        >
          Sum
        </label>
        <input
          type="text"
          value={300}
          className="bg-[#474747] w-100 border-2 border-[#009600] py-[16px] px-6 text-white text-2xl rounded-[45px]"
        />
      </div>
      <div className="benefit w-1/2 rounded-[20px] border-2 border-[#474747] px-[30px] py-[20px] mt-[29px]">
        <div className="title text-[32px] leading-[48px] text-white text-left font-bold">
          Beneficiaries:
        </div>
        <div className="wallet flex flex-col mt-[10px] items-start">
          <Label>Wallet ID</Label>
          <Input title={"wallet id"}></Input>
        </div>
        <div className="password flex flex-col mt-[30px] items-start">
          <Label>Password</Label>
          <Input title={"password"} type={'password'}></Input>
        </div>
        <div className="flex justify-between items-center mt-[17px]">
          <div className="description  flex items-start justify-start text-left">
            <div className="mt-1 mr-2">
              <IoEllipse color={"#38ae00"}></IoEllipse>
            </div>
            <p className="text-left text-[18px] leading-[27px] font-medium text-[#ffffff80]">
              {" "}
              At least one is required.
            </p>

           
          </div>
          <div className="rounded-[33px] w-[66px] h-[66px]   bg-gradient-to-b p-[1px] from-[#38ae00ff]  to-[#38ae0000]">
              <div className="flex   text-white bg-[#474747] w-[64px] h-[64px] rounded-[32px] px-[22px] py-[15px] items-center space-x-[76px]">
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
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M29 16L3 16"
                    stroke="white"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
        </div>
      </div>
      
      <div className="encrypted mt-[40px] flex flex-col w-2/5 items-start">
        <Label>Encrypted Password:</Label>
        <Input title={'wallet name'}></Input>
        <div className="description  flex items-start justify-start text-left">
            <div className="mt-1 mr-2">
              <IoEllipse color={"#38ae00"}></IoEllipse>
            </div>
            <p className="text-left text-[18px] leading-[27px] font-medium text-[#ffffff80]">
              {" "}
              This is the wallet's encryption password, not the user's password.            </p>

           
          </div>  
      </div>
      <div className="btn-transfer mt-[20px] flex justify-start">
          <Button type={'green'} text='Make the Transfer' size={'large'}></Button>
      </div>
    </div>
  );
};

Transfer.propTypes = {};

export default Transfer;
