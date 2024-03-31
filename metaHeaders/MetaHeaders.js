import React, { FC } from 'react'



const  Heading=({description,keywords,title})=> {
  return (
    <div>
         <title>{title}</title>
         <meta name='viewport' content='width=device-width, initial-scale=1' />
         <meta name='description' content={description} />
         <meta name='keywords' content={keywords}/>
    </div>
  )
}

export default Heading
