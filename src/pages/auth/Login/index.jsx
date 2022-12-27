import React, { useState, useEffect } from "react";
import { BiHide, BiShow } from "react-icons/bi";

import { Link, useNavigate } from "react-router-dom";
import BlurCircle from "../../../components/common/BlurCircle";
import Input from "../../../components/common/Input";
import Label from "../../../components/common/Label";
import BottomTexture from "../../../components/Texture/BottomTexture/Index";
import LeftTexture from "../../../components/Texture/LeftTexture/Index";
import RightTexture from "../../../components/Texture/RightTexture/Index";
import useScreen from '../../../hooks/useScreen';
import ErrorDescription from "../../../components/ErrorDescription/Index";
import Loading from "../../../components/Spinner/Index";

import "./index.scss";

const Login = () => {

  const [isHide, setHide] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const screen = useScreen();

  const onNameChange = (e) => {
    setName(e.target.value);
    setError({});
  }
  const handleLogin = () => {
    if(name===""){
      setError({
        type:"User",
        content:"name is empty"
      })
      return;
    }
    if(password===""){
      setError({
        type:"Password",
        content:"name is empty"
      })
      return;
    }
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        navigate("/main");
      }, 3000);

    // navigate("/main");
  };
  useEffect(() => {
    document.title = "Login";
  }, []);
  
  return (
    <div className="w-max-screen min-h-screen bg-back text-white pt-[16px] pb-[124px] px-[26px] sm:px-[64px]  items-center relative">
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
        <div className="lg:basis-1/2 mt-[60px] sm:mt-[77px] max-w-[733px] w-100">
          <div className="login px-[21px] sm:px-[40px] md:px-[40px] lg:px-[50px] 2xl:px-[93px] py-[20px] sm:py-[48px] bg-[#474747] rounded-[18px] sm:rounded-[44px]">
            <div className="title text-[26px] leading-[40px] xl:leading-[86px] xl:text-[57px] lg:text-[48px] lg:leading-[70px]  font-bold w-100">
              Hi, Welcome Back!
            </div>
            <div className="description text-[10px] leading-[16px] sm:text-[23px] sm:leading-[34px] text-whiteWithOpacity">
              Enter your details to log into your account
            </div>
            <div className="username mt-[58px] xl:mt-[41px] ">
              <div className="title text-[23px] leading-[34px] text-whiteWithOpacity text-left">
                <Label>Username</Label>
              </div>
              <div>
                <Input value={name} onChange = {onNameChange} title={"usernname"}></Input>
              </div>
              {error.type === "User" && (<ErrorDescription content = {error.content}></ErrorDescription>) }
            </div>
            <div className="password mt-[10px] sm:mt-[20px] ">
              <div className="title text-[23px] leading-[34px] text-whiteWithOpacity text-left">
                <Label>Password</Label>
              </div>
              <div className="relative">
                <input
                value={password}
                onChange = {e=>{
                  setPassword(e.target.value);
                  setError({});
                }}
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
              {error.type === "Password" && (<ErrorDescription content = {error.content}></ErrorDescription>) }
            </div>
            <div className="btn-login mt-[59px] xl:mt-[77px]">
              <button
                className="text-white bg-[#38ae00] w-[137px] sm:w-[217px] px-[45px] py-[6px] sm:px-[72px] sm:py-[11px] sm:text-[27px] sm:leading-[40px] font-semibold rounded-[31.5px] text-[17px] leading-[26px]"
                onClick={handleLogin}
              >
                    {loading? <Loading></Loading> :"Login"}
              </button>
            </div>
            <div className="register-now  flex justify-center xl:flex-row flex-col text-[14px] leading-[22px] sm:text-[23px] sm:leading-[34px] mt-[59px] xl:mt-[77px]">
              <p className="text-[#ffffff80] ">
                Still not registered?
              </p>
              <Link
                to="/register"
                className="font-bold ml-3 text-[#ffffff] "
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
