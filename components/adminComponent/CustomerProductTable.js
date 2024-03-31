import { baseImgUri } from '@/constants/baseImgUri'
import { Table } from 'antd'
const { Column, ColumnGroup } = Table;
import React, { useState } from 'react'
import EmailPopUp from './EmailPopUp';
import ProductDetailPopup from './ProductDetailPopup';
import ProductPagination from '../pagination/ProductPagination';

function CustomerProductTable({data,active,to,page,setPage}) {

  console.log("pageeeee==> ",to)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [details,setDetails] = useState(null)
 

 
  const handlePopUp = (data) => {
    setIsModalOpen(true);
    setUserData(data);
   
  };

  const handleDetails = (data) => {

    console.log("user details ",data)
    setViewModal(true);
    setDetails(data);
  };
  return (
    <div>

<Table
          dataSource={data}
          className="w-full bg-slate-50 overflow-x-auto"
          pagination={false}
          showHeader
        >
          <Column
            title="Picture"
            dataIndex="image"
            key="image"
            render={(text, record) => (
              <div>
                <img
                  src={baseImgUri + record?.attributes?.[active]?.data?.attributes?.heroImg?.data?.attributes?.url}
                  className="w-9 h-9 object-cover rounded-[50%]"
                />
              </div>
            )}
          />
          <Column title="Type of Product" dataIndex={'type'} key="type" render={(text,record)=>(<p>{active == 'sign' ? "Sign" : active == 'box' ? 'Box' :active == 'chopping_serving_board' ? "Chopping Board":active == 'timber_serving_board'?'Timber Serving Board':active == 'olive_wood_heart'? 'Wooden Heart':''} </p>)} />
          <Column title="First Name" dataIndex="first_name" key="first_name" render={(text,record)=>(<p>{record?.attributes?.first_name}</p>)} />
          <Column title="Last Name" dataIndex="last_name" key="last_name" render={(text,record)=>(<p>{record?.attributes?.last_name}</p>)} />
          <Column title="Email" dataIndex="email" key="email" render={(text,record)=>(<p>{record?.attributes?.email}</p>)} />
          {(active == 'sign' || active == 'box') && <Column
            title="Sign content"
            dataIndex={"sign_content"}
            key={"sign_content"}
            render={(text,record)=>(<p>{record?.attributes?.sign_content}</p>)}
          />}
         
          <Column
            title="Action"
            className="text-center"
            key={"Send"}
            render={(text, record) => (
              <div className="flex items-center gap-x-2">
                <button
                  onClick={() => handlePopUp(record)}
                  className="text-white bg-blue-500 px-2 py-2 w-24 text-sm whitespace-nowrap rounded"
                >
                  Send Email
                </button>
                <button
                  onClick={() => handleDetails(record)}
                  className="text-white bg-green-500 px-2 w-24 py-2 text-sm whitespace-nowrap rounded"
                >
                  View
                </button>
              </div>
            )}
          />
        </Table>
        <div className="my-2 mx-3 flex items-end justify-end">
            <ProductPagination
              page={page}
              setPage={setPage}
              total={Math.ceil(parseInt(to)/12)}
            />
          </div>
          {isModalOpen && <EmailPopUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} userData={userData} isCustome={false} active={active} />}
          {viewModal && (
        <ProductDetailPopup
          data={details?.attributes}
          open={viewModal}
          setModal={setViewModal}
          active = {active}
        />
      )}
    </div>
  )
}

export default CustomerProductTable