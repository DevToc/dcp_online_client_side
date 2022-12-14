import React from "react";
import BlurCircle from "../../components/common/BlurCircle";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Label from "../../components/common/Label";
import Select from "../../components/common/Select";
import Wallet from "../../components/wallet";
import { BsDot } from "react-icons/bs";

const Create = () => {
  return (
    <div className="create min-h-screen bg-back px-[285px] py-16 flex flex-col relative">
        {/* <div className="filter absolute top-[-454px] left-[-454px]">
          <BlurCircle />
        </div> */}
      <div className="w-100">
        <div className="btn-group flex justify-between">
          <div>
            <Button type={"green"} text={"Contact Us"}></Button>
            <Button type={"green"} text={"Distributor"}></Button>
            <Button type={"green"} text={"Messages"}></Button>
          </div>
          <div>
            <Button type={"red"} text={"Exit"}></Button>
          </div>
        </div>
      </div>
      <div className="wallet-content bg-[#474747] mt-[46px] px-[70px] py-[23px] rounded-3xl w-100">
       <div className="title text-left text-[37px] leading-[56px] font-bold text-white">
          New Wallet Opening:
       </div>
      <div>
      <form action="">
          <div className="items flex justify-between">
            <div className="item flex flex-col items-start">
              <Label>Wallet Name *</Label>
              <Input title={'wallet name'}></Input>
            </div>
            <div className="item flex flex-col items-start">
              <Label>Type</Label>
              <Select></Select>
            </div>
          </div>
          <div className="items flex justify-between mt-[23px]">
            <div className="item flex flex-col items-start">
              <Label>Country</Label>
              <Input title={'country'}></Input>
            </div>
            <div className="item flex flex-col items-start">
              <Label>Gender</Label>
              <Select></Select>
            </div>
          </div>

          <div className="items flex justify-between mt-[32px] items-end">
           <div className="item flex flex-col items-start">
           <Label>Free Value</Label>
            <div className="w-[546px] h-[239px] px-[54px] py-[25px] bg-[#44444480] border-[#ffffff33] rounded-[45px] border-[3px] flex flex-col justify-between">
              <Input title={'free value name'} size={'442px'}></Input>
              <Input title={'free value'} size={'442px'}></Input>

            </div>
           </div>
            <div className="item flex flex-col items-start">
              <Label>Encrypted Password: *</Label>
              <Input title={'wallet name'}></Input>
              <div className="description mt-[20px] flex">
              <div className="mt-0">
                <BsDot size={50} color={"#38ae00"}></BsDot>
              </div>
              <p className="text-left text-[18px] leading-[27px] font-medium text-[#ffffff80]">
                {" "}
                the password is secret and cannot be recovered,
                <br /> keep it in a secure place!
              </p>
            </div>
            </div>
          </div>
          <div className="btn-save mt-[81px]">
              <Button type={'red'} text={'Cancel'} size={'small'} back={'cancel'}></Button>
              <Button type={'green'} text={'Save'} size={'small'}></Button>
          </div>
       </form>
      </div>
      </div>
    </div>
  );
};

export default Create;
