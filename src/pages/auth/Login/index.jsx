import React, { useState } from "react";
import {BiHide, BiShow} from "react-icons/bi"

import "./index.scss";

const Login = () => {

  const [isHide, setHide] = useState(true);

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
        <div className="basis-1/2 mt-[77px] max-w-[733px]">
          <div className="login px-24 py-12 bg-[#474747] rounded-[44px]">
            <div className="title text-[57px] leading-[86px] font-bold w-100">
              Hi, Welcome Back!
            </div>
            <div className="description text-[23px] leading-[34px] text-whiteWithOpacity">
              Enter your details to log into your account
            </div>
            <div className="username mt-[41px] ">
              <div className="title text-[23px] leading-[34px] text-whiteWithOpacity text-left">
                <label htmlFor="" className="">
                  Username
                </label>
              </div>
              <div className=" mt-[7px]">
                <input
                  type="text"
                  className=" w-100 py-4 text-[23px] leading-[34px] font-semibold text-white pl-5 bg-[#47474780] border-[3px] border-[#ffffff43] focus:border-[#009600]  rounded-[45px]"
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
                  type={isHide?'password':'text'}
                  className=" w-100 py-4 text-[23px] leading-[34px] font-semibold text-white pl-5 bg-[#47474780] border-[3px] border-[#ffffff43] focus:border-[#009600]  rounded-[45px]"
                />
                <div className="absolute right-9 top-5 z-100" onClick={e=>setHide(!isHide)}>
                {isHide? <BiHide size={45} color={'#ffffff33'} /> : <BiShow size={45} color={'#ffffff33'} />
}                </div>
              </div>
            </div>
            <div className="btn-login mt-[77px]">
                <button className="text-white bg-[#38ae00] px-[72px] py-[11px] text-[27px] leading-[40px] font-semibold rounded-[31.5px]">
                  Login
                </button>
            </div>
            <div className="register-now mt-[77px]">
                <p className="text-[#ffffff80] text-[23px] leading-[34px]">Still not registered?<a className="font-bold ml-3 text-[#ffffff] text-[23px] leading-[34px] ">Register Now</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
