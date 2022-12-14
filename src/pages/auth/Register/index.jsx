import React, { useState } from "react";
import {BiHide, BiShow} from "react-icons/bi"
import {BsDot} from 'react-icons/bs'

import "./index.scss";

const Register = () => {

  const [isHide, setHide] = useState(true);
  const [isConfirmHide, setConfirmHide] = useState(true);


  return (
    <div className=" min-w-full min-h-screen bg-back text-white xl:px-40 py-2 items-center">
      <div className="flex flex-row justify-between">
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
                  type={isHide?'password':'text'} placeholder={'Enter password here'}
                  className="placeholder:font-normal placeholder-[#ffffff43] w-100 py-4 text-[23px] leading-[34px] font-semibold text-white pl-5 bg-[#47474780] border-[3px] border-[#ffffff43] focus:border-[#009600]  rounded-[45px]"
                />
                <div className="absolute right-9 top-5 z-100" onClick={e=>setHide(!isHide)}>
                {isHide? <BiHide size={45} color={'#ffffff33'} /> : <BiShow size={45} color={'#ffffff33'} />
}                </div>
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
                  type={isConfirmHide?'password':'text'} placeholder={'Re-Enter password here'}
                  className="placeholder:font-normal placeholder-[#ffffff43] w-100 py-4 text-[23px] leading-[34px] font-semibold text-white pl-5 bg-[#47474780] border-[3px] border-[#ffffff43] focus:border-[#009600]  rounded-[45px]"
                />
                <div className="absolute right-9 top-5 z-100" onClick={e=>setConfirmHide(!isConfirmHide)}>
                {isConfirmHide? <BiHide size={45} color={'#ffffff33'} /> : <BiShow size={45} color={'#ffffff33'} />
}                </div>
              </div>
            </div>
            <div className="description mt-[20px] flex" >
            <div className="mt-0"><BsDot size={50} color={'#38ae00'}></BsDot></div><p className="text-left text-[18px] leading-[27px] font-medium text-[#ffffff80]"> the password is secret and cannot be recovered,<br/> keep it in a secure place!</p>
            </div>
            <div className="btn-register mt-[30px]">
                <button className="text-white bg-[#38ae00] px-[95px] py-[11px] text-[27px] leading-[40px] font-semibold rounded-[31.5px]">
                  Register
                </button>
            </div>
            <div className="register-now mt-[55px]">
                <p className="text-[#ffffff80] text-[23px] leading-[34px]">Already registered?<a className="font-bold ml-3 text-[#ffffff] text-[23px] leading-[34px] ">Login Now</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
