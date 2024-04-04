import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { Modal } from "antd";
import React from "react";

function CheckoutSuccess({ isModalOpen, handleOk }) {
  return (
    <div>
      <Modal
        onCancel={handleOk}
        open={isModalOpen}
        onOk={handleOk}
        okText={"Close"}
        okButtonProps={{ style: { backgroundColor: "#003933" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <div className="border-b-2 my-4 py-3">
          <div className="w-full text-center flex items-center justify-center my-5">
            <CheckBadgeIcon color="#00A572" style={{border:'none',width:'100px',height:'100px'}} />
          </div>
          <div>
            <p className="text-xl font-semibold text-center my-3 text-green-600">
               Thanks for visiting
            </p>
            
            <p className="text-center text-base">
              Thank you for considering flaming platform. we will try our best
              to deliver quality product.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CheckoutSuccess;
