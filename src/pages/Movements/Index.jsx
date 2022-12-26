import React, { useState, useEffect } from "react";

import DateIcon from "../../components/common/DateIcon";
import Label from "../../components/common/Label";
import useScreen from "../../hooks/useScreen";
const categories = ["All", "Today", "Week", "Month", "Year"];

const Movements = () => {
  const [category, setCategory] = useState("All");
  const screenSize = useScreen();
  useEffect(()=>{document.title = "Movements"},[]);

  return (
    <div className="movements sm:px-[60px] sm:py-[54px] px-[20px] py-[36px]">
      <div className="flex items-start justify-between sm:justify-start flex-wrap xl:items-center flex-row gap-4 max-w-[1075px] ">
        <div className="title sm:min-w-[370px] text-left text-[23px] leading-[34px] sm:text-[37px] sm:leading-[56px]  font-bold text-white">
          Your Movements
        </div>
        <div className="category">
        { screenSize.dynamicWidth>=640? <ul className=" list-none flex text-base text-[#6c6c6c] gap-2">
            {categories.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`py-2 px-6 cursor-pointer border-[2.4px] ${
                    category === item
                      ? " border-[#ff6107] rounded-[21px]"
                      : " border-[#ffffff00]"
                  }`}
                  onClick={(e) => setCategory(item)}
                >
                  {item}
                </li>
              );
            })}
          </ul>:(
            <select name="" id="" className="py-[6px] px-[22px] bg-[#242424] text-white border-[2.4px] border-[#FF6107] rounded-[21px]  drop-shadow-[0px_0px_12.3px_#FF6107] outline-none">
              {categories.map((category, index)=>{
                return (
                  <option value="" key={index}>{category}</option>
                )
              })}
            </select>
          )}
        </div>
      </div>
      <div className="content mt-[15px] ">
      {screenSize.dynamicWidth >= 1085 ? (
            <table className="text-center">
              <thead className=" text-base text-[#ffffff66]">
                <tr>
                  <td>Date</td>
                  <td>
                    Transaction id
                  </td>
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

      <div className="flex items-center max-w-[1075px]">
        <div className="title text-left text-[23px] leading-[34px] sm:text-[37px] sm:leading-[56px] mt-[38px] sm:mt-[50px] font-bold text-white">
          Rejected Movements
        </div>
      </div>
      <div className="content mt-[15px] ">
      {screenSize.dynamicWidth >= 1085 ? (
            <table className="text-center">
              <thead className=" text-base text-[#ffffff66]">
                <tr>
                  <td>Date</td>
                  <td>
                    Transaction id
                  </td>
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
  );
};

export default Movements;
