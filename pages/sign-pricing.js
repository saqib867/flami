import { axiosInstance } from "@/axios/axios";
import DescriptionBlockRenderer from "@/components/DescriptionBlockRenderer";
import { baseImgUri } from "@/constants/baseImgUri";
import { Modal } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function SignPricing() {
  const router = useRouter();
  const id = router.query?.itemId;

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemToView, setItemToView] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const response = await axiosInstance.get(
          `/sign-pricings/${id}?populate[0]=heroImg&populate[1]=products.image`
        );
        console.log("single custome data ", response.data);
        setProducts(response?.data?.data?.attributes?.products);
      } catch (error) {
        console.log("error ", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  const handleView = (item) => {
    setOpen(true);
    setItemToView(item);
  };

  if (loading) {
    <div className="text-center my-4">Loading...</div>;
  }

  if (products?.length == 0) {
    <div className="max-2">
      <div className="max-w-7xl mx-auto my-2 flex items-center justify-center">
        <h3 className="text-5xl"> No Data Found</h3>
      </div>
    </div>;
  }
  return (
    <div className="max-2">
      <div className="max-w-6xl mx-auto my-2 h-[100vh]">
        <h3 className="text-center my-5 font-bold">BASE PRICE INCLUDES: ENGRAVED SIGN WITH A STRAIGHT EDGE, INDOOR OIL VARNISH, HANGERS ON BACK/ PILOT HOLES OR NO FIXINGS
AND FREE STANDARD POSTAGE AUSTRALIA WIDE</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-3 mx-[5px]">
          {products?.map((item, index) => (
            <div
              className="w-[100%] flex flex-col bg-gray-50 shadow-xl rounded h-[450px]  relative p-1 "
              key={index}
            >
              
              <div className="h-[200px] w-full flex justify-center">
                <img
                  src={baseImgUri + item?.image?.data?.attributes?.url}
                  className=" h-[100%] w-[320px] "
                />
              </div>
               <h3 className="text-[20px] text-center py-3 font-bold">{item?.title}</h3>
              <div className="gap-y-2 line-clamp-6 ">
                <DescriptionBlockRenderer description={item?.description} />
              </div>
              <button
                className="bg-green-400 p-2  absolute bottom-1 w-[98%]"
                onClick={() => handleView(item)}
              >
                {" "}
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      {itemToView && (
        <Modal
          title="Product Detail"
          open={open}
          okButtonProps={{ style: { display: "none" } }}
          onCancel={() => setOpen(false)}
        >
          <div className="w-[100%] flex flex-col bg-gray-50 ">
            <div className="h-[300px] w-full">
              <img
                src={baseImgUri + itemToView?.image?.data?.attributes?.url}
                className=" h-[100%] w-[100%] object-contain"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className="font-bold text-center text-[20px]">
                <span>{itemToView?.title} </span>
                
              </h3>
              
               <DescriptionBlockRenderer description={itemToView?.description} />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default SignPricing;
