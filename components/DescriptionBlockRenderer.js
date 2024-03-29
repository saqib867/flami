import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import React from 'react'

function DescriptionBlockRenderer({description}) {

  

      console.log("Description paragraph ",description)
  return (
    <div>
      { description && <BlocksRenderer
      content={description}
      blocks={{
        // You can use the default components to set class names...
        paragraph: ({ children }) => <p className="">{children}</p>,
        // ...or point to a design system
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 variant="h1">{children}</h1>
            case 2:
              return <h2 variant="h2">{children}</h2>
            case 3:
              return <h3 variant="h3">{children}</h3>
            case 4:
              return <h4 variant="h4">{children}</h4>
            case 5:
              return <h5 variant="h5">{children}</h5>
            case 6:
              return <h6 variant="h6">{children}</h6>
            default:
              return <h3 variant="h1">{children}</h3>
          }
        },
        // For links, you may want to use the component from your router or framework
        link: ({ children, url }) => <Link to={url}>{children}</Link>,
        
          list: ({ children }) => <p>{children}</p>,
        
       
      }}
  
    />}
    </div>
  )
}

export default DescriptionBlockRenderer