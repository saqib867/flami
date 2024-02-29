import { axiosInstance } from "@/axios/axios";
import React, { useEffect, useState } from "react";

function useProductById(id) {
  const [productData, setProductData] = useState(null);
  let item;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    item = localStorage.getItem("type");
  }

  console.log("product by id item ", item);
  useEffect(() => {
   
    let isSubscribed = true;
    if (isSubscribed) {
      const getProduct = async () => {
        if(item){

        const api =
          item == "Custom Wood Signs"
            ? `/products/${id}?populate[0]=custome_sign.image&populate[1]=heroImg&populate[2]=gallery&populate[3]=categories_data`
            : item == "Custom Wood Boxes"
            ? `/boxes/${id}?populate=*`
            : item == `Chopping/Serving Boards`
            ? `/chopping-serving-boards/${id}?populate=*`
            : item == `Timber serving Board`
            ? `/timber-serving-boards/${id}?populate=*`
            : item == "Olive Wood Hearts"
            ? `/olive-wood-hearts/${id}?populate=*`
            : "";
        try {
          const response = await axiosInstance.get(api);
            console.log("selected product data ",response.data)
          setProductData(response.data);
        } catch (error) {
          console.log("response error ", error);
        }
        }
        
      };
      getProduct();
    }

    return () => (isSubscribed = false);
  }, [item,id]);

  return { productData };
}

export default useProductById;
