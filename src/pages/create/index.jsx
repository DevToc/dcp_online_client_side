import React, { useState, useEffect } from "react";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Label from "../../components/common/Label";
import Modal from "../../components/common/Modal";
import Select from "../../components/common/Select";
import BlurCircle from "../../components/common/BlurCircle";
import Banner from "../../components/Banner/Index";
import MainButton from "../../components/common/MainButton";
import Description from '../../components/Description/Index'

const Create = () => {

  const [modalShow, setModalShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setModalShow(true);
  };
  useEffect(()=>{document.title = "Create New Wallet"},[]);
  
  return (
    <div className="main min-h-screen bg-back py-[11px] px-[23px]  sm:px-12 sm:py-16 flex relative justify-center">
    <div className="filter absolute top-[-454px] left-[-454px]">
      <BlurCircle />
    </div>

    <div className="content flex flex-col ">
      <Banner />
      <div className="">
        <div className="btn-group flex justify-center sm:justify-between  flex-wrap gap-3">
          <div className="flex gap-3 sm:flex-wrap justify-between sm:justify-start">
            <MainButton type={"green"} text={"Contact Us"}></MainButton>
            <MainButton type={"green"} text={"Distributor"}></MainButton>
            <MainButton type={"green"} text={"Messages"}></MainButton>
          </div>
          <div>
            <MainButton type={"red"} text={"Exit"}></MainButton>
          </div>
        </div>
      </div>
        <div className="wallet-content bg-[#474747] mt-[30px]  px-[20px] md:px-[70px] py-[21px] rounded-[19px] sm:rounded-3xl w-100">
          <div className="title min-w-0:text-center sm:text-left text-[24px] leading-[36px] sm:text-[37px] sm:leading-[56px] font-bold text-white">
            New Wallet Opening:
          </div>
          <div>
            <form action="" className="w-100">
              <div className="items flex flex-col lg:flex-row justify-between gap-[10px] sm:gap-10">
                <div className="item flex basis-1/2 flex-col items-start">
                  <Label>Wallet Name *</Label>
                  <Input title={"wallet name"}></Input>
                </div>
                <div className="item flex flex-col basis-1/2 items-start">
                  <Label>Type</Label>
                  <Select options = {["private","business","charity"]}></Select>
                </div>
              </div>
              <div className="items flex flex-col lg:flex-row  justify-between mt-[23px]gap-[10px] sm:gap-10">
                <div className="item flex flex-col basis-1/2  items-start">
                  <Label>Country</Label>
                  <Input title={"country"}></Input>
                </div>
                <div className="item flex flex-col basis-1/2  items-start">
                  <Label>Gender</Label>
                  <Select></Select>
                </div>
              </div>

              <div className="items flex flex-col lg:flex-row  justify-between mt-[10px] sm:mt-[32px] lg:items-end  sm:gap-10">
                <div className="item flex flex-col items-start basis-1/2   ">
                  <Label>Free Value</Label>
                  <div className="w-100 gap-3 px-[16px] xl:px-[54px] py-[25px] bg-[#44444480] border-[#ffffff33] rounded-[45px] border-[3px] flex flex-col">
                    <Input title={"free value name"} size={"442px"}></Input>
                    <Input title={"free value"} size={"442px"}></Input>
                  </div>
                </div>
                <div className="item flex flex-col items-start basis-1/2  ">
                  <Label>Encrypted Password: *</Label>
                  <Input title={"encrypted password"}></Input>
                  <Description>
                  This is the wallet's encryption password, not the user's
                      password.
                  </Description>
                </div>
              </div>
              <div className="btn-save mt-[30px] sm:mt-[81px]">
                <Button
                  type={"red"}
                  text={"Cancel"}
                  size={"small"}
                  back={"cancel"}
                ></Button>
                <Button
                  type={"green"}
                  text={"Save"}
                  size={"small"}
                  handleClick={handleClick}
                ></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal title={'New Wallet Created!'} setModalShow={setModalShow} description={'You successfully created new wallet.'} buttonCaption={'Thanks'} status={'success'} show={modalShow} to={'/home'}>

      </Modal>
    </div>
  );
};

export default Create;
