import { axiosInstance } from '@/axios/axios'
import React, { useEffect, useState } from 'react'

function useCategoryList() {
    
    const [categoryList,setCategoryList] = useState([])
    useEffect(()=>{

            const getList =async()=>{

                 const response = await axiosInstance.get('/categories')
                 
                 
                 setCategoryList(response.data?.data)
            }
           getList() 
    },[])

    return {categoryList}
}


export default useCategoryList
