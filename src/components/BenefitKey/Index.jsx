import React,{useState} from 'react';

import {BiCheckbox, BiCheckboxChecked} from 'react-icons/bi'

import "./Index.scss"

const BenefitKey = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className = "flex benefit-key bg-[#474747] rounded-[10px] py-[12px] px-[20px] text-white text-left items-center justify-start text-[20px] leading-[30px] font-normal sm:font-semibold" onClick = {e=>setChecked(!checked)}>
        { !checked? <BiCheckbox color='#ffffff' size={'30px'}></BiCheckbox>:<BiCheckboxChecked color='#ffffff' size={'30px'}></BiCheckboxChecked> }{'aksjdfajsfljalskfdjkl'}
    </div>
  );
}
 
 
export default BenefitKey;