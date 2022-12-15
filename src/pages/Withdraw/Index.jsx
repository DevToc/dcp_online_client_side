import React from "react";
import Label from "../../components/common/Label";
import Input from '../../components/common/Input'

import { IoEllipse } from "react-icons/io5";
import Button from "../../components/common/Button";

const Withdraw = () => {
  return (
    <div className="movements px-[60px] py-[54px]">
      <div className="flex  flex-col items-start">
        <div className="title text-left text-[37px] leading-[56px]  font-bold text-white">
          Withdrawal
        </div>
        <div className="description text-[22px] leading-[33px] font-normal text-[#6c6c6c]">
          Input all details for simple, fast and secure withdraw.
        </div>
      </div>
      <div className="collection-key flex flex-col items-start mt-[20px] max-w-[1125px]">
        <Label>Collection Key *</Label>
        <textarea
          name=""
          value={`{'amount': 70.0, 'beneficiaries': ['package.id equal b5b99124-1444-417a-9fcf-04944861cf68'], 'beneficiaries_sha': ' d745e2f7aa1cff52b038bb33fec756942c7142a862519a1bc89a9f84704d9e10', 'transaction_id': 'ef0581ca-bb48-494d-862a-81sd84214dec'}`}
          id=""
          cols="96"
          rows="6"
          className="bg-[#474747] py-4 px-6 border-2 border-[#009600] rounded-[45px] text-white text-[23px] leading-[34px] font-medium"
        ></textarea>
      </div>
      <div className="password flex justify-between mt-[29px] max-w-[1125px] space-x-12">
            <div className="collection-password flex flex-col items-start basis-1/2">
                <Label >Collection Password</Label>
                <Input title={'wallet name'}></Input>
            </div>
            <div className="collection-password flex flex-col items-start basis-1/2">
                <Label >Encrypted Password *:</Label>
                <Input title={'wallet name'}></Input>
              <div className="description mt-[10px] flex items-start justify-start text-left">
              <div className="mt-1 mr-2">
                <IoEllipse color={"#38ae00"}></IoEllipse>
              </div>
              <p className="text-left text-[18px] leading-[27px] font-medium text-[#ffffff80]">
                {" "}
                This is the wallet's encryption password, not the user's password.              </p>
            </div>
            <div className="withdraw mt-[66px] flex justify-end items-end w-100">
                <Button type={'green'} text={'Withdraw'}></Button>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Withdraw;
