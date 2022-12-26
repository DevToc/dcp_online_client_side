import React, { useEffect, useState } from "react";

import Label from "../../components/common/Label";
import Input from "../../components/common/Input";
import Modal from "../../components/common/Modal";
import useScreen from "../../hooks/useScreen";
import Description from "../../components/Description/Index";

const Withdraw = () => {

  const [modalShow, setModalShow] = useState(false);
  const screenSize = useScreen();
  
  const handleClick = () => {
    setModalShow(true);
  };
  useEffect(()=>{
    document.title = "Withdrawal"
  },[])
  
  return (
    <div className="withdrawal sm:pl-[40px] sm:pr-[20px] sm:py-[54px] px-[20px] py-[28px]">
      <div className="flex  flex-col items-start">
        <div className="title text-left sm:text-[37px] sm:leading-[56px]  text-[32px] leading-[48px] font-bold text-white">
          Withdrawal
        </div>
        <div className="description text-[22px] leading-[33px] font-normal text-[#6c6c6c] text-left">
          Input all details for simple, fast and secure withdraw.
        </div>
      </div>
      <div className="collection-key flex flex-col items-start mt-[20px] w-5/5 2xl:w-4/5">
        <Label>Collection Key *</Label>
        <textarea
          name=""
          value={`{'amount': 70.0, 'beneficiaries': ['package.id equal b5b99124-1444-417a-9fcf-04944861cf68'], 'beneficiaries_sha': ' d745e2f7aa1cff52b038bb33fec756942c7142a862519a1bc89a9f84704d9e10', 'transaction_id': 'ef0581ca-bb48-494d-862a-81sd84214dec'}`}
          id=""
          rows={screenSize.dynamicWidth < 935 ? 6 : 5}
          className="overflow-keys bg-[#474747] w-100  outline-none py-[9px] px-[20px] sm:py-4 sm:px-6 border-2 border-[#009600] rounded-[12px] sm:rounded-[45px] text-white sm:text-[23px] sm:leading-[34px] text-[12px] leading-[19px] font-medium"
        ></textarea>
      </div>
      <div className="password flex md:flex-row flex-col mt-[10px] sm:mt-[29px] max-w-[1125px] gap-[10px] sm:gap-5 w-5/5 2xl:w-4/5">
        <div className="collection-password flex flex-col items-start basis-1/2">
          <Label>Collection Password</Label>
          <Input title={"collection password"}></Input>
        </div>
        <div className="collection-password flex flex-col items-start basis-1/2 mb-[7px]">
          <Label>Encrypted Password *:</Label>
          <Input title={"encrypted password"}></Input>
          <Description>
            This is the wallet's encryption password, not the user's password.
          </Description>
          <div className="withdraw mt-[30px] sm:mt-[66px] flex justify-center md:justify-end items-end w-100">
            <button
              onClick={(e) => setModalShow(true)}
              className={`create text-white text-[15.3px] leading-[23px] bg-[#38ae00] py-[7px] px-[28px] text-center sm:py-[10px] sm:text-[20px] sm:leading-[30px] font-semibold sm:rounded-[25.3px] rounded-[19px] shadow-[0px_0px_19.2962px_#38AE00]`}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
      <Modal
        title={"Withdrawal Successful."}
        setModalShow={handleClick}
        show={modalShow}
        description={"The withdrawal was successfully reported."}
        buttonCaption={"Thanks"}
        status={"success"}
      ></Modal>
    </div>
  );
};

export default Withdraw;
