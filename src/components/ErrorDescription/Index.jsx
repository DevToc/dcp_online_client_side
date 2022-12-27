import React from 'react';
 
const ErrorDescription = ({content}) => {
  return (
    <p className='text-left text-[#ff0c0c] ml-4 text-[11px] leading-[22px] sm:text-[16px] sm:leading-[30px]'>
        {content}
    </p>
  );
}
 
 
export default ErrorDescription;