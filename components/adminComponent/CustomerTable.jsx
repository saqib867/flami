import React, { useState } from "react";

import { Table } from "antd";
import useFetchCustomer from "@/hooks/useFetchCustomer";
import EmailPopUp from "./EmailPopUp";

import { Input } from "antd";
import ProductPagination from "../pagination/ProductPagination";
import { baseImgUri } from "@/constants/baseImgUri";
import ProductDetailPopup from "./ProductDetailPopup";
import useFetchCategoryCustomer from "@/hooks/useFetchCategoryCustomer";
import CustomerProductTable from "./CustomerProductTable";
const { Search } = Input;
const { Column, ColumnGroup } = Table;
function CustomerTable({ token }) {
  
  const [input, setInput] = useState("");
  const [pageNum, setPageNum] = useState(1);
 
  const [search, setSearch] = useState("");
  const [searchInput,setSearchInput] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [details, setDetails] = useState(null);
  const [page, setPage] = useState(1);
  const { customerData, total } = useFetchCustomer(pageNum, search, token);
  console.log("customer data ",customerData)
  const [activeTab, setActiveTab] = useState(1);
  const {data,to} = useFetchCategoryCustomer(activeTab,searchInput,page);
 
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(input);
  };
  const handleSearchAll = (e) => {
    e.preventDefault();
    setSearchInput(input);
 
  };

 const handleTab =(current)=>{

      setActiveTab(current)
      setInput("")
      setSearch("")
      setSearchInput("")
 }

  const handlePopUp = (data) => {
    setIsModalOpen(true);
    setUserData(data);
    console.log("user data ", data);
  };

  const handleDetails = (data) => {
    setViewModal(true);
    setDetails(data);
  };

  return (
    <div className="min-h-screen">
      <div className=" min-h-screen  max-w-7xl mx-auto mt-5">
        <div className="flex items-center justify-between">
          <div className="w-[520px]">
            <select onChange={(e)=>handleTab(e.target.value)} className="w-full border h-8 border-gray-200 rounded-md">
              <option value={1}  >Custom Sign/Box</option>
              <option value={2}  >Sign</option>
              <option value={3} >Box</option>
              <option value={4} >Chopping Board</option>
              <option value={5} >Timber Serving Board</option>
            </select>
          </div>
        {activeTab == 1 &&
         <form onSubmit={handleSearch} className="flex w-full justify-end my-1">
          
          <div className="max-w-sm w-full flex mx-1 ">
            <Search
              onChange={(e) => handleInput(e)}
              className="outline-offset-0"
              placeholder="search..."
              enterButton={
                <button
                  style={{
                    backgroundColor: "#003933",
                    color: "white",
                    padding: "8px 10px",
                  }}
                >
                  Search
                </button>
              }
              size="middle"
            />
          </div>
        </form>}
        { activeTab != 1 && <form onSubmit={handleSearchAll} className="flex w-full justify-end my-1">
          <div className="max-w-sm w-full flex mx-1 ">
            <Search
              onChange={(e) => handleInput(e)}
              className="outline-offset-0"
              placeholder="search..."
              enterButton={
                <button
                  style={{
                    backgroundColor: "#003933",
                    color: "white",
                    padding: "8px 10px",
                  }}
                >
                  Search
                </button>
              }
              size="middle"
            />
          </div>
        </form>}
        </div>
        {activeTab == 1 && <Table
          dataSource={customerData}
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
                  src={baseImgUri + record?.image}
                  className="w-9 h-9 object-cover rounded-[50%]"
                />
              </div>
            )}
          />
          <Column title="Type of Product" dataIndex="type" key="type" />
          <Column title="First Name" dataIndex="first_name" key="first_name" />
          <Column title="Last Name" dataIndex="last_name" key="last_name" />
          <Column title="Email" dataIndex="email" key="email" />
         
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
        </Table>}
      
         {activeTab == 2 && <CustomerProductTable data={data} active={'sign'} to={to} page={page} setPage={setPage}  /> }
         {activeTab == 3 && <CustomerProductTable data={data} active={'box'} to={to} page={page} setPage={setPage} /> }
         {activeTab == 4 && <CustomerProductTable data={data} active={'chopping_serving_board'} to={to} page={page} setPage={setPage} /> }
         {activeTab == 5 && <CustomerProductTable data={data} active={'timber_serving_board'} to={to} page={page} setPage={setPage} /> }
         {activeTab == 6 && <CustomerProductTable data={data} active={'olive_wood_heart'} to={to} page={page} setPage={setPage}  /> }
        {activeTab == 1 && total > 12 && search == "" && (
          <div className="my-2 mx-3 flex items-end justify-end">
            <ProductPagination
              page={pageNum}
              setPage={setPageNum}
              total={Math.ceil(total/12)}
            />
          </div>
        )}
      </div>
      {isModalOpen && (
        <EmailPopUp
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          userData={userData}
          isCustome={true}
          active={activeTab}
        />
      )}
      {viewModal && (
        <ProductDetailPopup
          data={details}
          open={viewModal}
          setModal={setViewModal}
        />
      )}
    </div>
  );
}

export default CustomerTable;
