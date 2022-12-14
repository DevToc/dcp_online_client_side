import React,{useState} from "react";
import BlurCircle from "../../components/common/BlurCircle";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Label from "../../components/common/Label";
import Select from "../../components/common/Select";
import Wallet from "../../components/wallet";
import { BsDot } from "react-icons/bs";

const Create = () => {

  const [isHide, setHide] = useState(true);
  const [isConfirmHide, setConfirmHide] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  const handleClick = (e) =>{
    e.preventDefault();
    setModalShow(true)
  }
  return (
    <div className="create min-h-screen bg-back px-[15%] py-16 flex flex-col relative">
      <div className="w-100">
        <div className="btn-group flex justify-between">
          <div>
            <Button type={"green"} text={"Contact Us"}></Button>
            <Button type={"green"} text={"Distributor"}></Button>
            <Button type={"green"} text={"Messages"}></Button>
          </div>
          <div>
            <Button type={"red"} text={"Exit"}></Button>
          </div>
        </div>
      </div>
      <div className="wallet-content bg-[#474747] mt-[46px] px-[70px] py-[23px] rounded-3xl w-100">
       <div className="title text-left text-[37px] leading-[56px] font-bold text-white">
          New Wallet Opening:
       </div>
      <div>
      <form action="" className="w-100">
          <div className="items flex justify-between space-x-10">
            <div className="item flex basis-1/2 flex-col items-start">
              <Label>Wallet Name *</Label>
              <Input title={'wallet name'}></Input>
            </div>
            <div className="item flex flex-col basis-1/2 items-start">
              <Label>Type</Label>
              <Select></Select>
            </div>
          </div>
          <div className="items flex justify-between mt-[23px] space-x-10">
            <div className="item flex flex-col basis-1/2  items-start">
              <Label>Country</Label>
              <Input title={'country'}></Input>
            </div>
            <div className="item flex flex-col basis-1/2  items-start">
              <Label>Gender</Label>
              <Select></Select>
            </div>
          </div>

          <div className="items flex justify-between mt-[32px] items-end space-x-10">
           <div className="item flex flex-col items-start basis-1/2   ">
           <Label>Free Value</Label>
            <div className="w-100 h-[239px] px-[54px] py-[25px] bg-[#44444480] border-[#ffffff33] rounded-[45px] border-[3px] flex flex-col justify-between">
              <Input title={'free value name'} size={'442px'}></Input>
              <Input title={'free value'} size={'442px'}></Input>

            </div>
           </div>
            <div className="item flex flex-col items-start basis-1/2  " >
              <Label>Encrypted Password: *</Label>
              <Input title={'wallet name'}></Input>
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
            </div>
          </div>
          <div className="btn-save mt-[81px]">
              <Button type={'red'} text={'Cancel'} size={'small'} back={'cancel'}></Button>
              <Button type={'green'} text={'Save'} size={'small'} handleClick = {handleClick}></Button>
          </div>
       </form>
      </div>
      </div>

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
          New Wallet Created!
        </div>
        <div className="description  text-[#353536] text-[36px] leading-[54px] font-normal px-3">
          You successfully created new wallet.
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

export default Create;
