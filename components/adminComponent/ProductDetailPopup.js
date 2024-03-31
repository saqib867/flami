import { baseImgUri } from '@/constants/baseImgUri';
import { Modal } from 'antd';
import React from 'react';

function ProductDetailPopup({ open, data, setModal, active }) {
  return (
    <Modal
      title="Details"
      visible={open}
      onOk={() => setModal(false)}
      okButtonProps={{ style: { backgroundColor: "#003933", color: 'white', borderRadius: '4px' } }}
      okText={<span className="text-white">Close</span>}
      cancelButtonProps={{ style: { display: 'none' } }}
      width={500}
      onCancel={() => setModal(false)}
      bodyStyle={{ padding: '20px' }}
      centered
      maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="flex flex-col gap-4">
        {data?.image && <div className='w-full flex justify-center'><img className="max-w-[350px] w-full rounded justify-center items-center" src={baseImgUri + data?.image} alt="Product" /></div>}
        <div className="flex flex-col gap-y-3">
          <p className="font-bold flex items-center border-b-2 py-1">
            <span className="mr-1 font-extrabold">Full Name:</span>
            <span>{data?.first_name} {data?.last_name}</span>
          </p>
          <p className="font-bold flex items-center border-b-2 py-1">
            <span className="mr-1 font-extrabold">Email:</span>
            <span>{data?.email}</span>
          </p>
          <p className="font-bold flex items-center border-b-2 py-1">
            <span className="mr-1 font-extrabold">Phone:</span>
            <span>{data?.phone}</span>
          </p>
          <p className="font-bold flex items-center border-b-2 py-1">
            <span className="mr-1 font-extrabold">Sign Content:</span>
            <span>{data?.sign_content}</span>
          </p>
          {(data?.size || data[active]?.data?.attributes?.initial_size) && (
            <p className="font-bold flex items-center border-b-2 py-1">
              <span className="mr-1 font-extrabold">Size:</span>
              <span>{data?.size || data[active]?.data?.attributes?.initial_size}</span>
            </p>
          )}
          {data?.sign_edge && (
            <p className="font-bold flex items-center border-b-2 py-1">
              <span className="mr-1 font-extrabold">Sign Edge:</span>
              <span>{data?.sign_edge}</span>
            </p>
          )}
          {data?.fixing_option && (
            <p className="font-bold flex items-center border-b-2 py-1">
              <span className="mr-1 font-extrabold">Fixing Option:</span>
              <span>{data?.fixing_option}</span>
            </p>
          )}
          {data?.timber_specie && (
            <p className="font-bold flex items-center border-b-2 py-1">
              <span className="mr-1 font-extrabold">Timber Specie:</span>
              <span>{data?.timber_specie}</span>
            </p>
          )}
          {data?.compartments != null && (
            <p className="font-bold flex items-center border-b-2 py-1">
              <span className="mr-1 font-extrabold">Compartments:</span>
              <span>{data?.compartments}</span>
            </p>
          )}
          {data?.extra_comment && (
            <p className="font-bold flex items-center border-b-2 py-1">
              <span className="mr-1 font-extrabold">Extra comment:</span>
              <span>{data?.extra_comment}</span>
            </p>
          )}
          {active && (
            <p className="font-bold flex items-center border-b-2 py-1">
              <span className="mr-1 font-extrabold">Postage:</span>
              <span>{data[active].data?.attributes?.Postage} {data[active]?.data?.attributes?.postage_price}</span>
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default ProductDetailPopup;