import React, { useState, useEffect } from "react";

import DateIcon from "../../components/common/DateIcon";
const categories = ["All", "Today", "Week", "Month", "Year"];

const Movements = () => {
  const [category, setCategory] = useState("All");
  useEffect(()=>{document.title = "Movements"},[]);

  return (
    <div className="movements px-[60px] py-[54px]">
      <div className="flex items-start xl:items-center xl:flex-row flex-col min-w-[200px]:gap-3 max-w-[1075px] xl:gap-32">
        <div className="title text-left text-[37px] leading-[56px]  font-bold text-white">
          Your Movements
        </div>
        <div className="category">
          <ul className=" list-none flex text-base text-[#6c6c6c] gap-2">
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
          </ul>
        </div>
      </div>
      <div className="content mt-[15px] ">
        <table className="text-center border-separate border-spacing-y-4">
          <thead className="text-base text-[#ffffff66]">
            <tr>
              <td>Date</td>
              <td>Transaction id</td>
              <td>Status</td>
              <td>Amount</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr className="mt-[20px]">
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
            <tr>
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
                <button className="py-2 px-6 border-[#dd1818] rounded-[21px] border-2 text-base text-white">
                  sent
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
      </div>

      <div className="flex items-center max-w-[1075px]">
        <div className="title text-left text-[37px] leading-[56px] mt-[50px] font-bold text-white">
          Rejected Movements
        </div>
      </div>
      <div className="content mt-[15px] ">
        <table className="text-center border-separate border-spacing-y-4">
          <thead className="text-base text-[#ffffff66]">
            <tr>
              <td>Date</td>
              <td>Receiver (ID)</td>
              <td>Status</td>
              <td>Amount</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr>
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
                <button className="py-2 px-6 border-[#dd1818] rounded-[21px] border-2 text-base text-white">
                  Rejected
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
      </div>
    </div>
  );
};

export default Movements;
