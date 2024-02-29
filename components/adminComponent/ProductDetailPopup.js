import { baseImgUri } from '@/constants/baseImgUri'
import { Modal } from 'antd'
import React from 'react'

function ProductDetailPopup({open,data,setModal,active}) {
  return (
    <Modal
    title="Details"
    open={open}
    
    onOk={()=>setModal(false)}
    okButtonProps={{ style: { backgroundColor: "#003933",color:'white'}}}
    okText={<span className="text-white">Close</span>}
    cancelButtonProps={{style:{display:'none'}}}
    width={500}
    onCancel={()=>setModal(false)}
    
  >
 <div className='flex flex-col p-2 gap-y-2'>
        {data?.image && <img className='w-[100%]' src={baseImgUri+data?.image} />}
        <div className='flex flex-col gap-y-2'>
             <p className='font-bold flex gap-x-1'><span>Full Name : </span><span>{data?.first_name} </span><span>{data?.last_name}</span></p>
             <p className='font-bold flex gap-x-1'><span>Email : </span><span>{data?.email} </span></p>
             <p className='font-bold flex gap-x-1'><span>Phone : </span><span>{data?.phone} </span></p>
             <p className='font-bold flex gap-x-1'><span>Sign Content : </span><span>{data?.sign_content} </span></p>
            {(data?.size || data[active]?.data?.attributes?.initial_size) &&  <p className='font-bold flex gap-x-1'><span>Size : </span><span>{data?.size || data[active]?.data?.attributes?.initial_size} </span></p>}
             {(data?.sign_edge  )&& <p className='font-bold flex gap-x-1'><span>Sign Edge : </span><span>{data?.sign_edge} </span></p>}
             {data?.fixing_option  && <p className='font-bold flex gap-x-1'><span>Fixing Option : </span><span>{data?.fixing_option} </span></p>}
             {data?.timber_specie   && <p className='font-bold flex gap-x-1'><span>Timber Specie : </span><span>{data?.timber_specie} </span></p>}
             {data?.compartments !=null  && <p className='font-bold flex gap-x-1'><span>Comparments : </span><span>{data?.compartments} </span></p>}
             {data?.extra_comment  && <p className='font-bold flex gap-x-1'><span>Extra comment : </span><span>{data?.extra_comment} </span></p>}
           
             {active && <p className='font-bold flex gap-x-1'><span>Postage : </span><span>{data[active].data?.attributes?.Postage} {data[active]?.data?.attributes?.postage_price} </span></p>}
        </div>
 </div>
    
  </Modal>
  )
}

export default ProductDetailPopup