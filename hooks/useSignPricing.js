import { axiosInstance } from '@/axios/axios'
import React, { useState } from 'react'

function useSignPricing() {
 
         const [product, setProduct] = useState([])

         useState(()=>{

              const getDate =async()=>{

                    try {

                         const response = await  axiosInstance.get("/sign-pricings?populate[0]=heroImg&populate[1]=products.image")
                         console.log("sign pricing data ",response.data)
                         setProduct(response?.data?.data)
                    } catch (error) {
                        
                         console.log("sign pricing error ",error)
                    }
                     

              }

              getDate()

         },[])

    return {product:product}
}

export default useSignPricing