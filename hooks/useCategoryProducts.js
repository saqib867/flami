import { axiosInstance } from "@/axios/axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useCategoryProducts(category, pageNum) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
   console.log("category => ",category)
  useEffect(() => {
    
    const getProduct = async () => {
      setLoading(true);
    if(category){
      const api =
        category == "Custom Wood Signs"
          ? `/products?pagination[page]=${pageNum}&pagination[pageSize]=8&populate=*`
          : category == "Custom Wood Boxes"
          ? `/boxes?pagination[page]=${pageNum}&pagination[pageSize]=8&populate=*`
          : category == "Chopping/Serving Boards"
          ? `/chopping-serving-boards?pagination[page]=${pageNum}&pagination[pageSize]=8&populate=*`
          :category == "Timber serving Board"
          ? `/timber-serving-boards?pagination[page]=${pageNum}&pagination[pageSize]=8&populate=*`
          :category == 'Olive Wood Hearts'
          ?`/olive-wood-hearts?pagination[page]=${pageNum}&pagination[pageSize]=8&populate=*`
          : ``
      try {
        const res = await axiosInstance.get(api);

        if (res.data?.data) {
          setProducts(res.data?.data);
          console.log("products ",res.data?.data)
          setTotal(res.data?.meta?.pagination?.total);
        }
      } catch (error) {
        console.log("error,", error);
        toast.error("Something went wrong. Please try again.", {
          style: { color: "white", backgroundColor: "red" },
        });
      } finally {
        setLoading(false);
      }
    }
      
    };

    getProduct();
   
  }, [category, pageNum]);

  return { products, loading, total };
}

export default useCategoryProducts;
