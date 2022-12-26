import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Banner from "../../components/Banner/Index";
import BlurCircle from "../../components/common/BlurCircle";
import MainButton from "../../components/common/MainButton";
import Wallet from "../../components/wallet";

import "./index.scss"

const Main = () => {
  
  useEffect(() => {
    document.title = "Main";
  }, []);

  return (
    <div className="main min-h-screen bg-back py-[11px] px-[23px]  sm:px-12 sm:py-16 flex relative justify-center">
      <div className="filter absolute top-[-454px] left-[-454px]">
        <BlurCircle />
      </div>

      <div className="content flex flex-col ">
        <Banner />
        <div className="">
          <div className="btn-group flex justify-center sm:justify-between  flex-wrap gap-3">
            <div className="flex gap-3 sm:flex-wrap justify-between sm:justify-start">
              <MainButton type={"green"} text={"Contact Us"}></MainButton>
              <MainButton type={"green"} text={"Distributor"}></MainButton>
              <MainButton type={"green"} text={"Messages"}></MainButton>
            </div>
            <div>
              <MainButton type={"red"} text={"Exit"}></MainButton>
            </div>
          </div>
        </div>
        <div className="wallet-content bg-[#474747] mt-[30px] sm:mt-[46px] rounded-3xl w-100 px-[24px] py-[30px]">
          <div className="wallets flex justify-center w-100 gap-[19px] sm:gap-[40px] flex-wrap ">
            <Wallet></Wallet>
            <Wallet></Wallet>
            <Wallet></Wallet>
            <Wallet></Wallet>
          </div>
          <div className="btn-create-wallet mt-[52px] sm:mt-[127px]">
            <Link
              to="/create"
            >
              <button
                className={`create text-white text-[13px] leading-[20px] bg-[#38ae00] py-[8px] px-[37.5px] text-center sm:py-[5px] sm:text-[23px] sm:leading-[34px] font-semibold sm:rounded-[31.5px] rounded-[18px]`}
              >
                + Create New Wallet
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
