import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { FcOk } from "react-icons/fc";
import { ImCheckmark2 } from "react-icons/im";
import "./index.scss";

const Register = () => {
  const [isHide, setHide] = useState(true);
  const [isConfirmHide, setConfirmHide] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className=" min-w-full min-h-screen bg-back text-white xl:px-40 py-2 items-center relative">
      <div className="flex flex-row justify-between z-50 ">
        <div className="basis-1/2 text-left pt-48 max-w-[678px]">
          <div className="title flex items-center">
            <img src="/assets/images/currency.png" alt="" />
            <p className=" ml-[15px] text-[34px] leading-[51px] font-normal ">
              Digital Wallet
            </p>
          </div>
          <div className="description mt-[22px] text-[57px] leading-[86px] font-bold not-italic">
            Easiest way to manage your wallet.
          </div>
          <div className="text-[20px] leading-[30px] font-normal text-whiteWithOpacity max-w-xl">
            Quia veritatis qui aut magnam rerum animi omnis exercitationem.
            Minus sapiente suscipit quaerat sint. Possimus omnis vel ullam
            officiis. Itaque maxime asperiores omnis qui odio sunt hic. Et ea
            tenetur pariatur dolorum est corrupti nostrum.
          </div>
        </div>
        <div className="basis-1/2 mt-[28px] max-w-[733px]">
          <div className="Register px-24 py-[30px] bg-[#474747] rounded-[44px]">
            <div className="title text-[57px] leading-[86px] font-bold w-100">
              Hello, Let's register
            </div>
            <div className="description text-[23px] leading-[34px] text-whiteWithOpacity">
              Enter your details to register your account
            </div>
            <div className="username mt-[20px] ">
              <div className="title text-[23px] leading-[34px] text-whiteWithOpacity text-left">
                <label htmlFor="" className="">
                  Username
                </label>
              </div>
              <div className=" mt-[7px]">
                <input
                  placeholder="username"
                  type="text"
                  className="placeholder:font-normal placeholder-[#ffffff43] w-100 py-4 text-[23px] leading-[34px] font-semibold text-white pl-5 bg-[#47474780] border-[3px] border-[#ffffff43] focus:border-[#009600]  rounded-[45px]"
                />
              </div>
            </div>

            <div className="password mt-[20px] ">
              <div className="title text-[23px] leading-[34px] text-whiteWithOpacity text-left">
                <label htmlFor="" className="">
                  Password
                </label>
              </div>
              <div className=" mt-[7px] relative">
                <input
                  type={isHide ? "password" : "text"}
                  placeholder={"Enter password here"}
                  className="placeholder:font-normal placeholder-[#ffffff43] w-100 py-4 text-[23px] leading-[34px] font-semibold text-white pl-5 bg-[#47474780] border-[3px] border-[#ffffff43] focus:border-[#009600]  rounded-[45px]"
                />
                <div
                  className="absolute right-9 top-5 z-100"
                  onClick={(e) => setHide(!isHide)}
                >
                  {isHide ? (
                    <BiHide size={45} color={"#ffffff33"} />
                  ) : (
                    <BiShow size={45} color={"#ffffff33"} />
                  )}{" "}
                </div>
              </div>
            </div>

            <div className="confirm-password mt-[20px] ">
              <div className="title text-[23px] leading-[34px] text-whiteWithOpacity text-left">
                <label htmlFor="" className="">
                  Confirm Password
                </label>
              </div>
              <div className=" mt-[7px] relative">
                <input
                  type={isConfirmHide ? "password" : "text"}
                  placeholder={"Re-Enter password here"}
                  className="placeholder:font-normal placeholder-[#ffffff43] w-100 py-4 text-[23px] leading-[34px] font-semibold text-white pl-5 bg-[#47474780] border-[3px] border-[#ffffff43] focus:border-[#009600]  rounded-[45px]"
                />
                <div
                  className="absolute right-9 top-5 z-100"
                  onClick={(e) => setConfirmHide(!isConfirmHide)}
                >
                  {isConfirmHide ? (
                    <BiHide size={45} color={"#ffffff33"} />
                  ) : (
                    <BiShow size={45} color={"#ffffff33"} />
                  )}{" "}
                </div>
              </div>
            </div>
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
            <div className="btn-register mt-[30px]">
              <button className="text-white bg-[#38ae00] px-[95px] py-[11px] text-[27px] leading-[40px] font-semibold rounded-[31.5px]" onClick={e=>setModalShow(true)}>
                Register
              </button>
            </div>
            <div className="register-now mt-[55px]">
              <p className="text-[#ffffff80] text-[23px] leading-[34px]">
                Already registered?
                <a
                  href="/"
                  className="font-bold ml-3 text-[#ffffff] text-[23px] leading-[34px] "
                >
                  Login Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="filter absolute top-[-41px] left-[38px] w-[454px] h-[454px] bg-[#38ae0099] blur-[302px] z-10 "></div>

      <div
        id="overlay"
        className={!modalShow?'hidden fixed  z-40 w-screen h-screen inset-0 bg-[#000000cc] backdrop-blur-[4px]': "fixed  z-40 w-screen h-screen inset-0 bg-[#000000cc] backdrop-blur-[4px]"}
      ></div>

      <div
        id="dialog"
        className={!modalShow?"hidden fixed justify-center flex flex-col items-center z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto bg-white rounded-[34px] px-[65px] py-[59px] space-y-5 drop-shadow-lg max-w-[724px] " : " fixed justify-center flex flex-col items-center z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto bg-white rounded-[34px] px-[65px] py-[59px] space-y-5 drop-shadow-lg max-w-[724px]"}
      >
        <div className="flex justify-center items-center bg-[#38ae00] w-[172px] h-[172px] rounded-[86px]">
          <div>
          <svg
            width="100"
            height="77"
            viewBox="0 0 100 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M84.5478 3.32194L83.8679 2.58488L83.1327 3.26689L36.9869 46.0767L17.8434 25.6473L17.1596 24.9176L16.4299 25.6014L3.31623 37.8896L2.58653 38.5734L3.2703 39.3031L35.2968 73.4809L35.9768 74.2066L36.7063 73.5306L96.6798 17.944L97.4115 17.2658L96.735 16.5325L84.5478 3.32194Z"
              fill="white"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M37.9577 48.5861L83.7303 6.12268L93.8828 17.1277L36.101 70.6829L6.1202 38.6882L17.0448 28.4513L35.843 48.5121L36.8636 49.6012L37.9577 48.5861Z"
              fill="white"
              stroke="#38AE00"
              stroke-width="3"
            />
          </svg>
          </div>
        </div>
        <div className="title mt-30px text-[#353536] text-[47px] leading-[70px] font-bold">
          Successfully Registered!
        </div>
        <div className="description  text-[#353536] text-[36px] leading-[54px] font-normal px-3">
          You are successfully registered to your account.
        </div>
      <div className="thanks">
      <button className="text-white bg-[#38ae00] px-[48px] py-[11px] text-[20px] leading-[30px] font-semibold rounded-[25.3px]" onClick={e=>setModalShow(false)}>
                Thanks
              </button>
      </div>
      </div>
    </div>
  );
};

export default Register;
