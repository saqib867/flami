import { baseImgUri } from '@/constants/baseImgUri'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { Modal } from 'antd'
import React from 'react'

function GalleryModal({isModalOpen,handleCancel,data}) {
    console.log("data ",data)
  return (
    <div>
      
      <Modal  open={isModalOpen} onCancel={handleCancel} okButtonProps={{
          disabled: true,
          style:{display:'none'}
        }}
        closeIcon={null}
        cancelButtonProps={{
          disabled: true,
          style:{display:'none'}
        }}>
           <div className='flex flex-col gap-4'>
              <div className='flex items-center border-b-slate-100 py-2 border-b-2'> 
                <h3 className='font-extrabold w-full text-center'>{data?.attributes?.title}</h3>
                <XCircleIcon height={'30px'} width={'30px'} className='cursor-pointer' color='rgb(100,100,100)' onClick={handleCancel}/>
              </div>
              <div className='w-full h-[350px] '>
                 <img className='w-full h-full object-cover' src={baseImgUri + data?.attributes?.picture?.data?.attributes?.url || ''} />
              </div>
              <div className='flex flex-col gap-y-2'>
                
                <p>{data?.attributes?.description}</p>
              </div>
           </div> 
      </Modal>
    </div>
  )
}

export default GalleryModal
