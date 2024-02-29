import { axiosInstance } from "@/axios/axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const FeaturedBox = ({ productDetails, id,readMore,handleReadMore }) => {
  const router = useRouter();
 
  const baseImgUrl = process.env.NEXT_PUBLIC_IMG_URL;

  console.log("base url ", baseImgUrl);
  console.log("product detauls ", productDetails);

  const handleExplore = ()=>{

    router.push({ pathname: "/products", query: { itemId: id,type:productDetails?.type } });
  }

  return (
    <div className="bg-white  flex flex-col rounded-[4px] justify-between flex-1  sm:w-[100%] ">
      <img
        src={`${baseImgUrl}${productDetails?.image?.data?.attributes?.url}`}
        className="w-full h-[280px] object-cover"
      />

      <div>
        <div className="text-start mx-2">
          <span className="text-[#003933] text-[20px] sm:text-[22px] font-[700]">
          {productDetails?.Title}{" "}
        </span>

        <div className="text-black font-[400] my-3 h-24 ">
          <span className="featuer_box_description">{productDetails?.description}</span>
          <div className="my-2" ><span className="text-blue-500 cursor-pointer" onClick={()=>handleReadMore(productDetails)}>Read More</span></div>
        </div>
        </div>
        <div className="flex justify-between items-center w-full bottom-0">
          <button
            onClick={handleExplore}
            className="bg-[#003933] text-white w-full px-3 py-2  rounded-[4px]"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBox;
