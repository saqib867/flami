
import ItemDetail from '@/components/SelectedProductDetails/ItemDetail'
import PersonalForm from '@/components/forms/PersonalDetails'
import useProductById from '@/hooks/useProductById'
import { useRouter } from 'next/router'
import React from 'react'

function PersonalDetails() {

  return (
       
        <div className='bg-[rgb(245,245,245)]'>
             <div  className='max-w-7xl mx-auto'>
            <div className='mx-3 my-3'>
                   <h3 className='text-center text-2xl my-5 font-bold'>Fill out you personal details</h3> 
                  
                     <div>
                       <PersonalForm/>
                   </div> 
            </div>
         </div> 
        </div>
         
  )
}

export default PersonalDetails