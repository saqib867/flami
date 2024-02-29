import { axiosInstance } from '@/axios/axios'
import { baseImgUri } from '@/constants/baseImgUri';
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function SignPricing() {

    const router = useRouter();
  const id = router.query?.itemId;

    const [loading,setLoading] = useState(false)
    const [products,setProducts] = useState([])
    const [open,setOpen] = useState(false)
    const [itemToView, setItemToView] = useState(null)

    useEffect(()=>{

               const getData =async()=>{

                setLoading(true)

                  try {
                     const response = await axiosInstance.get(`/sign-pricings/${id}?populate[0]=heroImg&populate[1]=products.image`)
                     console.log("single custome data ",response.data)
                     setProducts(response?.data?.data?.attributes?.products)
                  } catch (error) {
                    console.log("error ",error)
                  }
                   finally{
                     setLoading(false)
                   }  

               }
               getData()
    },[id])

const handleView =(item)=>{

    setOpen(true)
    setItemToView(item)

}
  
if(loading){

          <div className='text-center my-4'>Loading...</div>
}

if(products?.length == 0){

    <div className='max-2'>
    <div className='max-w-7xl mx-auto my-2 flex items-center justify-center'>
             <h3 className='text-5xl'> No Data Found</h3>
    </div>
</div>
}
  return (
    
       <div className='max-2'>
            <div className='max-w-7xl mx-auto my-2'>
                   <div className='grid grid-cols-3 items-center gap-3 mx-[5px]'>
                     {products?.map((item,index)=>(
                              
                             <div className='w-[100%] flex flex-col bg-gray-50 shadow-xl rounded  relative p-1 ' key={index}>
                                    <div className='h-[200px] w-full'>
                                          <img src={baseImgUri+item?.image?.data?.attributes?.url} className=' h-[100%] w-[100%] object-cover'/>
                                    </div>
                                    <div className='flex flex-col gap-y-2 h-64 overflow-y-auto'>
                                        <h3 className='font-bold'><span>{item?.size} - </span>{item?.timber_specie}</h3>
                                        <h3 className='font-bold'><span>Base Price - </span>${item?.price}</h3>
                                        <h3 className='font-bold'><span>{item?.sign_edge}  </span> {item?.sign_edge_price == 0 ? "Included":`+$${item?.sign_edge_price}`}</h3>
                                        <h3 className='font-bold'><span>{item?.fixing_option} </span>{item?.fixing_option_price == 0 ? "Included" :`+$${item?.fixing_option_price}`}</h3>
                                        <h3 className='font-bold'><span>Water Proof  </span>{item?.water_proof_price == 0 ? "Included" : `+$${item?.water_proof_price}`}</h3>
                                        <h3 className='font-bold'>${item?.price + item?.sign_edge_price + item?.fixing_option_price + item?.water_proof_price} wih free tandard postage</h3>
                                        {item?.Postage == 'Australia Post Express ' && <h3 className='font-bold'> (+${item?.postage_price} for Express Postage)</h3>}
                                       
                                    </div>
                                    <button className='bg-green-400 p-2 my-2' onClick={()=>handleView(item)}> View</button>
                             </div>   
                     ))}
                   </div>
                    
            </div>
            {itemToView && <Modal title="Product Detail" open={open}  okButtonProps={{style:{display:'none'}}} onCancel={()=>setOpen(false)}>
            <div className='w-[100%] flex flex-col bg-gray-50 ' >
                                    <div className='h-[300px] w-full'>
                                          <img src={baseImgUri+itemToView?.image?.data?.attributes?.url} className=' h-[100%] w-[100%] object-contain'/>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <h3 className='font-bold'><span>{itemToView?.size} - </span>{itemToView?.timber_specie}</h3>
                                        <h3 className='font-bold'><span>Base Price - </span>${itemToView?.price}</h3>
                                        <h3 className='font-bold'><span>{itemToView?.sign_edge}  </span> {itemToView?.sign_edge_price == 0 ? "Included":`+$${itemToView?.sign_edge_price}`}</h3>
                                        <h3 className='font-bold'><span>{itemToView?.fixing_option} </span>{itemToView?.fixing_option_price == 0 ? "Included" :`+$${itemToView?.fixing_option_price}`}</h3>
                                        <h3 className='font-bold'><span>Water Proof  </span>{itemToView?.water_proof_price == 0 ? "Included" : `+$${itemToView?.water_proof_price}`}</h3>
                                        <h3 className='font-bold'>${itemToView?.price + itemToView?.sign_edge_price + itemToView?.fixing_option_price + itemToView?.water_proof_price} wih free tandard postage</h3>
                                        {itemToView?.Postage == 'Australia Post Express ' && <h3 className='font-bold'> (+${itemToView?.postage_price}) for Express Postage</h3>}
                                       
                                    </div>
                                  
                             </div> 
      </Modal>}
       </div>
  )
}

export default SignPricing