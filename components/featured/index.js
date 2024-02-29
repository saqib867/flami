import React, { useEffect, useState } from "react";
import FeaturedBox from "./FeaturedBox";
import { useRouter } from "next/router";
import { axiosInstance } from "@/axios/axios";
import useProducts from "@/hooks/useProducts";
import ProdcutLoading from "../skeleton/ProdcutLoading";
import NotFound from "../NotFound/NotFound";
import { Modal } from "antd";
import { baseImgUri } from "@/constants/baseImgUri";

const Featured = () => {
  const router = useRouter();
  const { product, loading } = useProducts();
  const [readMore,SetReadMore] = useState(null)
  const [open, setOpen] = useState(true)

  const handleClose =()=>{

        setOpen(false)
        SetReadMore(null)
  }
  const handleReadMore = (item)=>{

       SetReadMore(item)
        console.log("itemv==> ",item)
  }
  

  if (loading) {
    return (
      <div className="flex flex-col">
        <div className="flex justify-center py-7 bg-[#E7E1CC]">
          <span className="text-[#003933] sm:text-[40px] text-[30px] text-center font-[600]">
            Products
          </span>
        </div>
       <div className="mt-5 max-w-[1420px] w-full mx-auto">
          <ProdcutLoading />
        </div> 
      </div>
    );
  }
  else if(product.length == 0){
         return(
              <div className="bg-[#F0EEEF]">
                <div className="flex justify-center py-7 bg-[#E7E1CC]">
          <span className="text-[#003933] sm:text-[40px] text-[30px] text-center font-[600]">
            Products
          </span>
        </div>
                <NotFound/>
              </div> 
         )
  }

  return (
    <div className="bg-[#f0eeef]  pb-10">
      {!loading && <div className="flex justify-center py-7 bg-[#E7E1CC]">
        <span className="text-[#003933] sm:text-[40px] text-[30px] text-center font-[600]">
          Products
        </span>
      </div>}
      <div className="bg-[#f0eeef] py-5 flex justify-center">
        <div class=" sm:max-w-[1400px] mx-auto w-[100%] ">
          <div className="w-full grid lg:grid-cols-3 mx-1 sm:mx-2 sm:grid-cols-2 grid-cols-1 gap-10 gap-x-15">
            {product?.map((item, index) => {
              return (
                <div key={index}>
                  <FeaturedBox productDetails={item?.attributes} id={item?.id} readMore={readMore} handleReadMore={()=>handleReadMore(item?.attributes)}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center mt-5 justify-center">
        <button
          onClick={() => router.push("/products")}
          className="text-white bg-[#003933] px-2 py-1"
        >
          See all Products
        </button>
      </div>
     {readMore && 
       <Modal open={true} title={readMore?.Title} okButtonProps={{style:{display:'none'}}} onCancel={handleClose} cancelButtonProps={{style:{backgroundColor:'red',color:"white"}}} >
               
                <div>
                    <div className="flex justify-center">
                      <img src={`${baseImgUri}${readMore?.image?.data?.attributes?.url}`} className="w-[100%]"/>
                    </div>
                    <div >
                         {readMore?.description}
                    </div>
                </div>
              
      </Modal>}
    </div>
  );
};

export default Featured;
