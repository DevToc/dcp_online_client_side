import React from "react";
import BlurCircle from "../../components/common/BlurCircle";
import Button from "../../components/common/Button";
import Wallet from "../../components/wallet";

const Main = () => {
  return (
   <div className="main min-h-screen bg-back px-[440px] py-16 flex flex-col relative">
    <div className="filter absolute top-[-454px] left-[-454px]">
        <BlurCircle/>
    </div>
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
    <div className="wallet-content bg-[#474747] mt-[46px] px-[30px] py-[94px] rounded-3xl w-100">
        <div className="wallets flex justify-between w-100">
          <Wallet></Wallet>
          <Wallet></Wallet>
          <Wallet></Wallet>
          <Wallet></Wallet>
        </div>
        <div className="btn-create-wallet mt-[127px]">
      <Button type={'green'} text={'+ Create new wallet'} size={'large'}>

      </Button>
    </div>
    </div>
   
   </div>
  );
};

export default Main;
