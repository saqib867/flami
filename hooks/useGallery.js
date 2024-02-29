import { axiosInstance } from '@/axios/axios'
import React, { useEffect, useState } from 'react'

function useGallery(page) {
     
     const [gallery, setGallery] = useState([])
     const [total,setTotal] = useState(0)

     useEffect(()=>{
          
        const imageGallery=async()=>{
           try {
             const response = await axiosInstance.get(`/galleries?pagination[page]=${page}&pagination[pageSize]=30&populate=*`)
             if(response.data?.data){
                setGallery(response.data?.data)
                
                setTotal(response.data?.meta?.pagination?.total)
             }
             
           } catch (error) {
              console.log("gallery error=> ",error)
           }
            
        }
         imageGallery()
     
    },[page])

    return {gallery,total}

}

export default useGallery
