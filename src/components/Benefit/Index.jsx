import React from 'react';

import Label from '../common/Label';
import Input from '../common/Input';

const Benefit = () => {
  return (
  <>
    <div className="wallet flex flex-col mt-[10px] items-start">
          <Label>Wallet ID</Label>
          <Input title={"wallet id"}></Input>
        </div>
        <div className="password flex flex-col mt-[30px] items-start">
          <Label>Password</Label>
          <Input title={"password"} type={'password'}></Input>
      </div></>
      
  );
}
 
 
export default Benefit;