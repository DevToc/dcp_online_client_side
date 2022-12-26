import React from "react";
import { useParams } from "react-router";

import "./index.scss";

const DetailMessage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="w-100 px-[20px] py-[28px]">
      <div className="detail border-2 border-[#474747] rounded-[20px] flex flex-col">
        <div className="title flex px-[21px] py-[14px] border-b-2 border-[#474747] items-center gap-[20px] justify-between flex-wrap">
          <div className="title-text text-[15px] leading-[23px] text-white">
            Steven Hackett
          </div>
        </div>
        <div className="flex flex-wrap content py-[15px] text-[17px] leading-[22px] text-white font-normal px-[28px] text-left">
          <p className="break-words w-100">
            {" "}
            {` A new transfer from Mendy Biton is waiting for you! the collection_key is: {'amount': 70.0, 'beneficiaries': ['package.id equal b5b99124-1444-417a-9fcf-04944861cf68'], 'beneficiaries_sha': 'd745e2f7aa1cff52b038bb33fec756942c7142a862519a1bc89a9f84704d9e10', 'transaction_id': 'ef0581ca-bb48-494d-862a-81sd84214dec'}`}
          </p>
        </div>
      </div>
      <div className="flex gap-[10px] justify-center mt-[34px] text-white">
        <button className="green py-[4px] px-[18px] bg-[#38ae00] text-[10px] leading-[15px] rounded-[19px]">
          Withdraw
        </button>
        <button className="red py-[4px] px-[18px] bg-[#FF0707] text-[10px] leading-[15px] rounded-[19px]">
          Delete
        </button>
        <button className="orange py-[4px] px-[18px] bg-[#FF6107] text-[10px] leading-[15px] rounded-[19px]">
          Mark as unread
        </button>
      </div>
    </div>
  );
};

export default DetailMessage;
