import React, { useState, useEffect } from "react";
import { BiCopy, BiCheck } from "react-icons/bi";

import Label from "../../components/common/Label";
import DateIcon from "../../components/common/DateIcon";
import Description from "../../components/Description/Index";

import "./index.scss";

const Home = () => {

  const [copied, setCopied] = useState(false);
  const [identity, setIdentity] = useState("82-j4-91-cc-8");
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(identity);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    document.title = "Home";
  }, []);
  useEffect(() => {
    window.addEventListener("resize", setDimension);
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  
  return (
    <div className="home sm:pl-[40px] sm:pr-[20px] sm:py-[54px] py-[28px] px-[20px]">
      <div className="title text-left sm:text-[37px] sm:leading-[56px] text-[32px] leading-[48px]  font-bold text-white">
        My Account:
      </div>
      <div className="balance w-100 gap-4 flex flex-wrap flex-col sm:flex-row mt-[10px]">
        <div className="amount sm:min-w-[400px]">
          <div className="rounded-[16px] bg-gradient-to-b p-[2px] from-[#38ae00ff]  to-[#38ae0050]">
            <div className="flex flex-row py-[12px] px-[20px] justify-between text-white bg-[#474747] rounded-[16px] sm:px-[22px] sm:py-[15px] sm:items-center sm:gap-5">
              <div className="flex flex-col">
                <Label size={"small"}>Account Balance:</Label>
                <div className="count text-[34px] leading-[51px] sm:text-[39px] sm:leading-[58px] text-white font-semibold">
                  41,222.92
                </div>
              </div>
              <div className="btn-group flex flex-col justify-between sm:space-y-[26px]">
                <button className="green text-white bg-[#38ae00] text-center w-[103px] py-[5px] sm:py-[11px] sm:text-[17px] sm:leading-[26px] font-semibold sm:rounded-[31.5px] text-[12px] leading-[18px] rounded-[22.3px]">
                  Withdraw
                </button>
                <button className="orange text-white bg-[#FF6107] text-center w-[103px] py-[5px] sm:py-[11px] sm:text-[17px] sm:leading-[26px] font-semibold sm:rounded-[31.5px] text-[12px] leading-[18px] rounded-[22.3px]">
                  Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="detail sm:min-w-[400px]">
          <div className="rounded-[16px]   bg-gradient-to-b p-[2px] from-[#38ae00ff]  to-[#38ae0050]">
            <div className="flex text-white bg-[#474747] rounded-[16px] px-[22px] py-[15px]">
              <div className="flex flex-col text-left basis-1/2">
                <Label size={"small"}>Wallet Name:</Label>
                <div className="count text-[18px] leading-[27px] text-white font-semibold">
                  Office Main
                </div>
                <Label size={"small"}>Country:</Label>
                <div className="count text-[18px] leading-[27px] text-white font-semibold">
                  USA
                </div>
              </div>
              <div className="flex flex-col text-left basis-1/2">
                <Label size={"small"}>Type:</Label>
                <div className="count text-[18px] leading-[27px] text-white font-semibold">
                  Main
                </div>
                <Label size={"small"}>Gender:</Label>
                <div className="count text-[18px] leading-[27px] text-white font-semibold">
                  Male
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="identify mt-[37px]">
        <div className="title text-[22px] leading-[33px] text-left text-white">
          Identify Wallet
        </div>
        <div className="identify-content flex flex-col mt-[10px] items-start space-y-10">
          <div className="content flex flex-col text-left">
            <Label size={"small"}>Identity</Label>
            <div className="info relative w-100 sm:w-[360px] mb-[7px]">
              <input
                type="text"
                value={identity}
                onChange={(e) => setIdentity(e.target.value)}
                className="bg-[#474747] text-white w-100 sm:w-[360px] border-2 border-[#009600] rounded-[33px] text-base font-semibold px-[15px] py-[13px] outline-none"
              />
              {!copied ? (
                <div className="absolute right-4 top-4" onClick={handleCopy}>
                  <BiCopy color="white" size={"20px"}></BiCopy>
                </div>
              ) : (
                <div className="absolute right-4 top-4 flex flex-col justify-center items-center">
                  <div class="bg-black text-white text-center text-xs rounded-lg py-1 absolute z-10  bottom-full px-2 pointer-events-none">
                    copied
                    <svg
                      class="absolute text-black h-2 w-full left-0 top-full"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                    >
                      <polygon
                        class="fill-current"
                        points="0,0 127.5,127.5 255,0"
                      />
                    </svg>
                  </div>
                  <BiCheck color="white" size={"20px"}></BiCheck>
                </div>
              )}
            </div>
            <Description>
              Someone wants to transfer you, give them this ID!
            </Description>
          </div>
          <div className="btn-group flex sm:gap-5 justify-between sm:justify-start w-100">
            <button className="green text-white bg-[#38ae00] text-center sm:w-[146px] sm:py-[7px] sm:text-[17px] sm:leading-[26px] font-semibold sm:rounded-[31.5px] w-[103.5px] py-[5px] text-[12px] leading-[18px] rounded-[22.4px]">
              Withdraw
            </button>
            <button className="orange text-white bg-[#FF6107] text-center sm:w-[146px] sm:py-[7px] sm:text-[17px] sm:leading-[26px] font-semibold sm:rounded-[31.5px] w-[103.5px] py-[5px] text-[12px] leading-[18px] rounded-[22.4px]">
              Transfer
            </button>
            <button className="red text-white bg-[#FF0707] text-center sm:w-[146px] sm:py-[7px] sm:text-[17px] sm:leading-[26px] font-semibold sm:rounded-[31.5px] w-[103.5px] py-[5px] text-[12px] leading-[18px] rounded-[22.4px]">
              Transfer
            </button>
          </div>
        </div>
      </div>
      <div className="last-movements mt-[32px] sm:mt-[50px]">
        <div className="title sm:text-[37px] sm:leading-[56px] text-[32px] leading-[48px] font-bold text-white text-left">
          Last Movements
        </div>
        <div className="content mt-[10px] sm:mt-[15px]">
          {screenSize.dynamicWidth >= 1085 ? (
            <table className="text-center">
              <thead className=" text-base text-[#ffffff66]">
                <tr>
                  <td>Date</td>
                  <td>Transaction id</td>
                  <td>Status</td>
                  <td>Amount</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                <tr className=" ">
                  <td className="flex items-center space-x-3 py-2 px-4 border-l-2 rounded-l-[16px] bg-[#474747] border-[#474747]">
                    <div className="w-[55px] h-[55px] rounded-[16px] bg-[#d9d9d9] flex justify-center items-center">
                      <DateIcon></DateIcon>
                    </div>
                    <div className="date text-[20px] leading-[30px] text-white">
                      01,Nov,2022
                    </div>
                  </td>
                  <td className="date text-[20px] leading-[30px] text-white bg-[#474747]">
                    82j491cc8
                  </td>
                  <td className="px-7 bg-[#474747]">
                    <button className="py-2 px-6 border-[#38ae00] rounded-[21px] border-2 text-base text-white">
                      Receive
                    </button>
                  </td>
                  <td className="px-7 text-[20px] leading-[30px] text-white bg-[#474747]">
                    250
                  </td>
                  <td className="px-7 text-[20px] leading-[30px] text-white bg-[#474747] rounded-r-[16px]">
                    43,245
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div className="w-100 bg-[#474747] rounded-[16px] p-[12px]">
              <div className="flex justify-between items-center">
                <div className="bg-[#D9D9D9] flex justify-center items-center rounded-[13.6px] p-[13px]">
                  <DateIcon />
                </div>
                <div className="py-[6px] text-white px-[15px] border-[4px] border-[#38ae00] rounded-[30px]">
                  Receive
                </div>
              </div>
              <div className="flex mt-[10px]">
                <div className="flex flex-col basis-1/2">
                  <Label>Date</Label>
                  <div className="text-left text-white text-[15px] leading-[22px]">
                    01 Nov, 2020
                  </div>
                </div>
                <div className="flex flex-col basis-1/2">
                  <Label>Transaction ID</Label>
                  <div className="text-left text-white text-[15px] leading-[22px]">
                    82j491cc8
                  </div>
                </div>
              </div>
              <div className="flex mt-[10px]">
                <div className="flex flex-col basis-1/2">
                  <Label>Amount</Label>
                  <div className="text-left text-white text-[15px] leading-[22px]">
                    250
                  </div>
                </div>
                <div className="flex flex-col basis-1/2">
                  <Label>Total</Label>
                  <div className="text-left text-white text-[15px] leading-[22px]">
                    43,245
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
