import { axiosInstance } from '@/axios/axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function useProducts() {
const [productData,setProductsData] = useState([])
const [boxProduct,setBoxProduct] = useState([])
const [loading,setLoading] = useState(false)

useEffect(()=>{

       const getProduct =async()=>{
                setLoading(true)
              try {
              
                const response = await axiosInstance.get('/categories?populate=*')
                
                setProductsData(response.data?.data)
              
            } catch (error) {
                       console.log("categories error ",error)    
              }
              finally {
                setLoading(false)
              } 
       }

       getProduct()

},[])





 
const product =productData   
console.log("products ",product)   
      return {product,loading}
}

export default useProducts
