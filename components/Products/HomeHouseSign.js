import React, { useState } from 'react'
import ProductBox from './ProductBox'
import { Skeleton } from 'antd'
import ProdcutLoading from '../skeleton/ProdcutLoading'
import NotFound from '../NotFound/NotFound'
import useCategoryProducts from '@/hooks/useCategoryProducts'
import ProductPagination from '../pagination/ProductPagination'


const HomeHouseSign = ({signTitle,type,page,setPage}) => {
  
  const {products,loading,total} = useCategoryProducts(type,page)
 
  if(loading){

      return(
         <ProdcutLoading/>
      )
  }
  else if (products.length == 0){
    return <NotFound/>
  }

  return (
   <div className='min-h-[90vh]'>
    <div className='grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 gap-x-15'>
        {products?.map((item,index)=>{
            return(
              <ProductBox key={index} productData={item?.attributes} id={item?.id} signTitle={signTitle} type={type} />
            )
        })}
    </div>
    {total>8 && <div className='text-center my-8'>
       
        <ProductPagination total={total} setPage={setPage} page={page} />
      </div>}
    </div>
  )
}

export default HomeHouseSign
