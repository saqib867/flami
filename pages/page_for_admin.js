import React, { useEffect, useLayoutEffect, useState } from 'react'
import CustomerTable from '@/components/adminComponent/CustomerTable.jsx'



function PageForAdmin() {

     const [token,setToken] = useState(null)
  
     useEffect(()=>{

 if (typeof window !== 'undefined') {
    // Perform localStorage action
     setToken(localStorage.getItem('token'))
    
  }


     },[])
 
 

  return(
      <div>
           {token ? <CustomerTable token={token}/>:<div>You are not allowed to access this route</div>}
      </div>
  )
}

export default PageForAdmin
