import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
const SuccessModal= ({open,setOpen}) => {
  
 
 
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
     
      <Modal title="Basic Modal" open={open} okButtonProps={{style:{display:'none'}}} cancelText='Close' onCancel={handleCancel}>
        <div>
             <div><CheckBadgeIcon color='green'fontSize={20} className='text-lg' /></div>
             <h2>Email has been sent successfully</h2>
        </div>
       
      </Modal>
    </>
  );
};
export default SuccessModal;