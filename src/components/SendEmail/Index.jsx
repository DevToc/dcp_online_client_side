import React from 'react';
import Label from '../common/Label';
import Input from '../common/Input' 

const SendEmail = () => {
  return (
    <div className="flex flex-col">
      <Label>Email</Label>
      <Input title={'email'}></Input>
    </div>
  );
}
 
 
export default SendEmail;