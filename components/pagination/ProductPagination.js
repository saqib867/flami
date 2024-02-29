import { Pagination } from 'antd'
import React from 'react'


function ProductPagination({total,setPage,page}) {
  console.log("pagination total ",total)
  return (
    <div>
      <Pagination
          size="small"
          total={total}
          showQuickJumper
          hideOnSinglePage
          current={page}
          onChange={(e)=>setPage(e)}
          pageSize={1}
    />
    </div>
  )
}

export default ProductPagination
