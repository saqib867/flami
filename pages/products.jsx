
import HomeHouseSign from "@/components/Products/HomeHouseSign";

import useCategoryList from "@/hooks/useCategoryList";
import Heading from "@/metaHeaders/MetaHeaders";
import { Breadcrumb } from "antd";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const ProductsPage = () => {
  const router = useRouter();
  const itemId = router.query.itemId 
  const categoryType = router.query.type
  
  const { categoryList } = useCategoryList();
  const [currentId,setCurrentId] = useState(itemId)
  const [page,setPage] = useState(1)
 
  const [type,setType] = useState(categoryType)
  console.log("current Type ",categoryType)
  
  const handleTab = (key,ty) => {
    setPage(1)
    console.log("type   ",ty)
    setCurrentId(key)
    setType(ty)
   

  };
  
  useEffect(() => {
    if (!itemId) {
      // If itemId is not present, set currentId to the id of the first element in categoryList
      setCurrentId(categoryList[0]?.id);
    } else {
      setCurrentId(itemId);
    }
    
  }, [itemId]);
  useEffect(() => {
    if (!categoryType) {
      // If itemId is not present, set currentId to the id of the first element in categoryList
      setType("Custom Wood Signs");
    } else {
      setType(categoryType);
    }
    
  }, [categoryType]);

 

 

  return (
    <div className="bg-[#f0eeef] min-h-full ">
      <Heading description="Product page" keywords="product,olive wood heart,home sings,chopping board, timer serving board,flaming,wood, engraving, wood engraving, signs, home signs, paypal" title="Home" />
      {/* <img src="../product-banner.webp" className="w-full" /> */}
      <div className="max-w-7xl m-auto">
      <div className="p-5 ">
        <Breadcrumb
          items={[
            {
              title: "Home",
              className: " cursor-pointer",
              onClick: () => router.push("/"),
            },
            {
              title: "Products",
              onClick: () => router.push("/products"),
            },
          ]}
        />
      </div>
      <div className=" my-6 mx-1">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
          
          {categoryList.map((item,index)=>(
                <button onClick={()=>handleTab(item?.id,item?.attributes?.type)} key={index} className={`border p-2 rounded text-sm sm:text-base min-w-[100px] ${type == item?.attributes?.type  ? 'bg-[#003933] shadow-xl text-white' :' border-slate-600 shadow-xl text-black'} `}>{item?.attributes?.Title}</button>
          ))}
      </div>
      </div>
      <HomeHouseSign signTitle={currentId}  type={type} page={page} setPage={setPage} />
    </div>
    </div>
  );
};

export default ProductsPage;
