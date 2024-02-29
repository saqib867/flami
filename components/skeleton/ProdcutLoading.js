import { Skeleton } from 'antd'
import React from 'react'

function ProdcutLoading() {

    const loadingArray = Array.from({ length: 6 }, (_, index) => index);
    

  return (
    <div className='min-h-[90vh] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-full'>
        {loadingArray.map((i,index)=>{
            return(
                <div className='flex flex-col gap-y-1 bg-gray-200 w-full p-4'>
                <Skeleton.Image active  className='w-[100%] sm:w-[80%]' style={{width:'100%',height:"140px"}} rootClassName='product-skeleton-img' />
                
                <Skeleton active paragraph={{rows:2}}   className='h-6' />
                <Skeleton.Button  active paragraph={{rows:1}} />
              </div> 
            )
        }) } 
    </div>
  )
}

export default ProdcutLoading
