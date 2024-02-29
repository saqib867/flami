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
  const {data} = useFetchCategoryCustomer(activeTab,searchInput);
 
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
      <div className="flex flex-col  min-h-screen  max-w-7xl mx-auto mt-5">
        <div className="flex justify-between gap-x-2">
          <div
            onClick={() => handleTab(1)}
            className={`whitespace-nowrap w-full text-center cursor-pointer border-[1px] p-2 rounded border-blue-100 ${
              activeTab == 1 ? "bg-green-500 text-white" : "bg-white"
            }`}
          >
            Custom Sign/Box
          </div>
          <div
            onClick={() => handleTab(2)}
            className={`whitespace-nowrap w-full text-center cursor-pointer border-[1px] p-2 rounded border-blue-100 ${
              activeTab == 2 ? "bg-green-500 text-white" : "bg-white"
            }`}
          >
            Sign{" "}
          </div>
          <div
            onClick={() => handleTab(3)}
            className={`whitespace-nowrap w-full text-center cursor-pointer border-[1px] p-2 rounded border-blue-100 ${
              activeTab == 3 ? "bg-green-500 text-white" : "bg-white"
            }`}
          >
            Box
          </div>
          <div
            onClick={() => handleTab(4)}
            className={`whitespace-nowrap w-full text-center cursor-pointer border-[1px] p-2 rounded border-blue-100 ${
              activeTab == 4 ? "bg-green-500 text-white" : "bg-white"
            }`}
          >
            Chopping Board
          </div>
          <div
            onClick={() => handleTab(5)}
            className={`whitespace-nowrap w-full text-center cursor-pointer border-[1px] p-2 rounded border-blue-100 ${
              activeTab == 5 ? "bg-green-500 text-white" : "bg-white"
            }`}
          >
            Timber Serving Board
          </div>
          <div
            onClick={() => setActiveTab(6)}
            className={`whitespace-nowrap w-full text-center cursor-pointer border-[1px] p-2 rounded border-blue-100 ${
              activeTab == 6 ? "bg-green-500 text-white" : "bg-white"
            }`}
          >
            Wooden Heart
          </div>
        </div>
        {activeTab == 1 && <form onSubmit={handleSearch} className="flex w-full justify-end my-1">
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
            title="Sign content"
            dataIndex={"sign_content"}
            key={"sign_content"}
          />
          <Column
            title="Extra Comment"
            dataIndex={"extra_comment"}
            key={"extra_comment"}
          />
          <Column title="Size" dataIndex="size" key="size" />

          <Column title="Budget" dataIndex="budget" key="budget" />
          <Column title="Sign Edging" dataIndex="sign_edge" key="sign_edge" />
          <Column
            title="Timber Specie"
            dataIndex="timber_specie"
            key="timber_specie"
          />
          <Column
            title="Indoor/Outdoor"
            dataIndex="indoor_outdoor"
            key="indoor_outdoor"
          />
          <Column title="Font" dataIndex="font" key="font" />
          <Column
            title="Comparments"
            dataIndex="compartments"
            key="comparments"
          />
          <Column title="Postage" dataIndex="Postage" key="Postage" />
          <Column
            title="Fixing Option"
            dataIndex="fixing_option"
            key="fixing_option"
          />
          <Column
            title="Timber Specie"
            dataIndex="timber_specie"
            key="timber_specie"
          />
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
         {activeTab == 2 && <CustomerProductTable data={data} active={'sign'}  /> }
         {activeTab == 3 && <CustomerProductTable data={data} active={'box'}  /> }
         {activeTab == 4 && <CustomerProductTable data={data} active={'chopping_serving_board'}  /> }
         {activeTab == 5 && <CustomerProductTable data={data} active={'timber_serving_board'}  /> }
         {activeTab == 6 && <CustomerProductTable data={data} active={'olive_wood_heart'}  /> }
        {total > 12 && search == "" && (
          <div className="my-2 mx-3 flex items-end justify-end">
            <ProductPagination
              page={pageNum}
              setPage={setPageNum}
              total={total}
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
