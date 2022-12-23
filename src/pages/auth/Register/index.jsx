import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";

import LeftTexture from "../../../components/Texture/LeftTexture/Index";
import RightTexture from "../../../components/Texture/RightTexture/Index";
import BlurCircle from "../../../components/common/BlurCircle";
import Label from "../../../components/common/Label";
import Input from "../../../components/common/Input";
import Modal from "../../../components/common/Modal";
import Description from "../../../components/Description/Index";
import BottomTexture from "../../../components/Texture/BottomTexture/Index";
import "./index.scss";
import useScreen from "../../../hooks/useScreen";

const Register = () => {
  const [isHide, setHide] = useState(true);
  const [isConfirmHide, setConfirmHide] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const screen = useScreen();
  useEffect(()=>{document.title = "Register"},[]);
  return (
    <div className="w-max-screen min-h-screen bg-back text-white pt-[16px] pb-[57px] px-[26px] sm:px-[64px]  items-center relative">
    <LeftTexture />
      <RightTexture />
      <BottomTexture/>
      <div className="filter absolute top-[-194px] left-[-226px] sm:top-[-41px] sm:left-[38px]">
        <BlurCircle />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-x-0 lg:space-x-[30px] xl:space-x-[70px] 2xl:space-x-[159px]">
        <div className="lg:basis-1/2  lg:pt-[131px] pt-14 max-w-[678px]">
          <div className="title flex items-center justify-center lg:justify-start">
            <img
              src="/assets/images/currency.png"
              alt=""
              className="sm:w-[103px] sm:h-[110px] w-[56px] h-[60px]"
            />
            <p className=" ml-[15px] text-[34px] leading-[51px] font-normal">
              Digital Wallet
            </p>
          </div>
          <div className="description mt-[17px] font-bold text-[26px] leading-[50px] xl:leading-[86px] xl:text-[57px] lg:text-[48px] lg:leading-[70px] min-[20px]:text-center  lg:text-left ">
            Easiest way to manage your wallet.
          </div>
          <div className="text-[10px] leading-[15px]  text-left  sm:text-[20px]  sm:leading-[30px] font-normal text-whiteWithOpacity max-w-xl  mt-[2px] sm:mt-[15px] sm:px-[0px] px-[48px]">
            A secure DCP wallet, to save receipt and verify the transfer of the
            coins, without fees and without the need for a third party
          </div>
        </div>
        <div className="basis-1/2 mt-[60px] sm:mt-[28px] max-w-[733px]">
          <div className="register px-[21px] py-[20px] lg:px-[48px]  sm:pt-[30px] sm:pb-[24px] bg-[#474747] rounded-[18px] sm:rounded-[44px]">
            <div className="title text-[26px] leading-[40px] sm:text-[40px] sm:leading-[50px] xl:leading-[86px] xl:text-[57px] lg:text-[48px] lg:leading-[70px]  font-bold w-100">
              Hello, Let's register
            </div>
            <div className="description text-[10.6px] leading-[16px] text-center sm:text-[23px] sm:leading-[34px] text-whiteWithOpacity">
              Enter your details to register your account
            </div>
            <div className="username mt-[31px] sm:mt-[20px] ">
              <div className="title text-left">
                <Label>Username</Label>
              </div>
              <div>
                <Input title={"username"}></Input>
              </div>
            </div>

            <div className="password mt-[11px] sm:mt-[20px] ">
              <div className="title text-left">
                <Label>Password</Label>
              </div>
              <div className="relative">
                <input
                  placeholder="Enter password"
                  type={isHide ? "password" : "text"}
                  className="placeholder:font-normal placeholder-[#ffffff43] w-100 bg-[#47474780] text-white border-[3px] border-[#ffffff33] rounded-[45px] py-[8px] sm:py-[17px] px-3 text-[12px] leading-[20px] sm:text-[23px] w-100 sm:leading-[34px] font-normal  focus:border-[#009600]  focus:outline-none"
                />
                  <div
                  className="absolute right-3 top-[6px] sm:right-7 sm:top-[14px]  z-100"
                  onClick={(e) => setHide(!isHide)}
                >
                  {isHide ? (
                    <BiHide size={screen.dynamicWidth>670? 45:30} color={"#ffffff33"} />
                  ) : (
                    <BiShow size={screen.dynamicWidth>670? 45:30} color={"#ffffff33"} />
                  )}{" "}
                </div>
              </div>
            </div>

            <div className="confirm-password mt-[11px] sm:mt-[20px] mb-[5px] sm:mb-[20px]">
              <div className="title text-left">
                <Label>Confirm Password</Label>
              </div>
              <div className="relative">
                <input
                  placeholder="Confirm password"
                  type={isConfirmHide ? "password" : "text"}
                  className="placeholder:font-normal placeholder-[#ffffff43] w-100 bg-[#47474780] text-white border-[3px] border-[#ffffff33] rounded-[45px] py-[8px] sm:py-[17px] px-3 text-[12px] leading-[20px] sm:text-[23px] w-100 sm:leading-[34px] font-normal  focus:border-[#009600]  focus:outline-none"
                />
                <div
                  className="absolute right-3 top-[6px] sm:right-7 sm:top-[14px]  z-100"
                  onClick={(e) => setConfirmHide(!isConfirmHide)}
                >
                  {isConfirmHide ? (
                    <BiHide size={screen.dynamicWidth>670? 45:30} color={"#ffffff33"} />
                  ) : (
                    <BiShow size={screen.dynamicWidth>670? 45:30} color={"#ffffff33"} />
                  )}{" "}
                </div>
              </div>
            </div>
           <Description>the password is secret and cannot be recovered, keep it in a secure place!</Description>
            <div className="btn-register mt-[50.3px] sm:mt-[30px]">
              <button
                className="text-white bg-[#38ae00] px-[47px] py-[6px] sm:px-[95px] sm:py-[11px] text-[17px] leading-[26px] sm:text-[27px] sm:leading-[40px] font-semibold rounded-[20px] sm:rounded-[31.5px]"
                onClick={(e) => setModalShow(true)}
              >
                Register
              </button>
            </div>
            <div className="register-now  flex justify-center xl:flex-row flex-col mt-[43px] xl:mt-[57px]">
              <p className="text-[#ffffff80] text-[23px] leading-[34px]">
                Still not registered?
              </p>
              <Link
                to="/login"
                className="font-bold ml-3 text-[#ffffff] text-[23px] leading-[34px] "
              >
                Login Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title={"Successfully Registered"}
        description={"You are successfully registered to your account."}
        status={"success"}
        show={modalShow}
        setModalShow={setModalShow}
        buttonCaption={"Thanks"}
        to={"/login"}
      ></Modal>
    </div>
  );
};

export default Register;
