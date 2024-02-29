import { baseImgUri } from '@/constants/baseImgUri'
import React, { useState } from 'react'
import GalleryModal from './GalleryModal'

function GalleryComponent({galleryData}) {
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [modalData,setModalData] = useState({})
    const handleCancel =()=>{

           setIsModalOpen(false)
           setModalData({})
    }

    const handleOpen=(data)=>{
            setIsModalOpen(true)
            setModalData(data)
    }
  return (
    <div className='h-[505px] mx-2 p-1 bg-[rgb(250,250,250)] shadow-xl shadow-slate-300'>
        <div className='w-100 h-[300px]'><img className='h-[100%] w-[100%] object-cover' src={`${baseImgUri}${galleryData?.attributes?.picture?.data?.attributes?.url || ''}`} /></div>
        <div className='text-center w-100 my-3 mx-1 '><h3 className='font-bold'>{galleryData?.attributes?.title}</h3></div>
        <div className='w-100 my-3 gallery-description mx-1 '><p>{galleryData?.attributes?.description}</p></div>
         <div className=' w-full'>
             <button onClick={()=>handleOpen(galleryData)} className='bg-[#003933] text-white w-full py-2'>View</button>
         </div>
         <GalleryModal handleCancel={handleCancel} isModalOpen={isModalOpen} data={modalData}/>
    </div>
  )
}

export default GalleryComponent
