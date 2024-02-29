import { baseImgUri } from "@/constants/baseImgUri";
import { Card } from "antd";
import { useRouter } from "next/router";
import React from "react";

function CustomeDesigns({ productData }) {
  const itemArray = productData?.data?.attributes?.custome_sign;
  const router = useRouter()
  
  const handleProceed =(id)=>{

          router.push({
              pathname:'/detail_form_custom_sign',
              query:{itemId:productData?.data?.id,componentId:id}
          })

          console.log("product data =>",productData)
  }
  return (
    <div className="my-2">
      <div className="grid grid-cols-2 item gap-3">
        {itemArray?.map((item, index) => (
          <div className="shadow-xl shadow-[rgb(200,200,200)] rounded  border-x-[1px] border-b-[1px] border-slate-700 w-[100%]">
            <img src={baseImgUri + item?.image?.data?.attributes?.url} className="w-[100%] h-[230px] rounded bg-contain" />
            <div className="py-3 px-1 flex flex-col gap-y-2">
               <p className="text-lg font-bold"><span>{item?.size} </span><span> {item?.timber_specie}</span></p>
               <p className="text-lg font-bold"><span>Base Price : </span><span>${item?.price}</span></p>
               <p className="text-lg font-bold"><span>{item?.sign_edge} : </span><span>{item?.sign_edge_price == 0 ? 'Included' : `$${item?.sign_edge_price}` }</span></p>
               <p className="text-lg font-bold"><span>{item?.fixing_option} : </span><span>${item?.sign_hanging_price == 0 ? 'Included' :item?.sign_hanging_price}</span></p>
               <p className="text-lg font-bold"><span>Weather Proofed : </span><span>${item?.weather_proff_price == 0 ? 'Included':item?.weather_proff_price}</span></p>
            </div>
            <button onClick={()=>handleProceed(item?.id)} className="w-full bg-[#003933] text-white rounded-b py-3">Proceed</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomeDesigns;
