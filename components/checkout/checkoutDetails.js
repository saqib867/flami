"use client";
import { axiosInstance } from "@/axios/axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PaypalCheckout from "./PaypalCheckout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";

function CheckoutDetails() {
  const router = useRouter();
  const { id, custome,type } = router.query;
  const [userData, setUserData] = useState(null);
 
  const tp = type == 'box' ? 'box' :type == 'sign' ? "sign" : type == 'chopping_serving_board' ? 'chopping_serving_board' : type == 'timber_serving_board'?'timber_serving_board': type == 'olive_wood_heart' ?'olive_wood_heart' :'' 
  const signAdd = userData?.base_price + userData?.Postage + userData?.sign_edge + userData?.fixing_option + userData?.weather_proof + userData?.image  
  const boxAdd = userData?.base_price + userData?.Postage +userData?.compartments+ userData?.image +  userData?.Postage
  const signContent = userData?.customer?.data?.attributes?.sign_content || userData?.customer_other?.data?.attributes?.sign_content || null
  const size = userData?.customer?.data?.attributes?.size || userData?.customer_other?.data?.attributes[tp]?.data?.attributes?.initial_size || null
  const basePrice =userData?.base_price || userData?.customer_other?.data?.attributes[tp]?.data?.attributes?.price
  const Postage = custome == "true" ?userData?.customer?.data?.attributes?.Postage:userData?.customer_other?.data?.attributes[tp]?.data?.attributes?.Postage
  const postage_price = custome =="true"? userData?.Postage : userData?.customer_other?.data?.attributes[tp]?.data?.attributes?.postage_price
  const otherProductTotal = userData?.customer_other?.data?.attributes[tp]?.data?.attributes?.postage_price + userData?.customer_other?.data?.attributes[tp]?.data?.attributes?.price || 0
   console.log("customer other price details ",otherProductTotal )
   console.log("sign add ",signAdd)
  useEffect(() => {
    const abort = new AbortController();
    const signal = abort.signal;
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(`/consumer-responds/${id}?populate[0]=customer_other.${tp}&populate[1]=customer`, {
          signal,
        });
        console.log("responsed user ",response.data)
        setUserData(response.data?.data?.attributes);
      } catch (error) {
         if(error?.response?.data){
                toast.error(error?.response?.data?.message,{style:{color:'white',backgroundColor:'red'}})
         }
      }
    };
    fetchUser();
    return () => abort.abort();
  }, [id]);
  
console.log("user data ",userData)
  return (
    <div className="max-w-[1480px] w-full mx-auto mt-6">
      <div>
        <h3 className="m-2 my-4 text-2xl font-bold text-center ">
          Product Details
        </h3>
        <div className="flex flex-col gap-y-2">
          <div className="relative mx-auto w-full bg-[rgb(250,250,252)] ">
            <div className="grid min-h-screen grid-cols-10">
              <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
                <div className="mx-auto w-full max-w-lg">
                  <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                    Secure Checkout
                    <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
                  </h1>
                  <form action="" className="mt-10 flex flex-col space-y-4">
                    <div>
                      <label
                        for="email"
                        className="text-xs font-semibold text-gray-500"
                      >
                        First Name
                      </label>
                      <div className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                        {userData?.customer?.data?.attributes?.first_name || userData?.customer_other?.data?.attributes?.first_name}
                      </div>
                    </div>
                    <div className="relative">
                      <label className="text-xs font-semibold text-gray-500">
                        Last Name
                      </label>
                      <div className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                       {userData?.customer?.data?.attributes?.last_name || userData?.customer_other?.data?.attributes?.last_name}
                      </div>
                    </div>
                    {signContent && <div>
                      <p className="text-xs font-semibold text-gray-500">
                        Sign Content
                      </p>
                      <div className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                      {signContent}
                      </div>
                    </div>}
                    {size && <div className="flex flex-col text-sm ">
                      <label>Size of Content</label>
                      <div className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                      {size}
                      </div>
                    </div>}
                  </form>
                 <div className="hidden lg:flex my-4">
                  <PayPalScriptProvider
                options={{
                  clientId:
                    "ATF_cy6zZwHn4mHPgBaNcKm3094XLjpIJswgGiUCJeYFhLKSJDBIK_ZqGUhwdkqXeuVROllNGK8cZceM",
                    currency: "USD",
                  intent: "capture",
                   }}
              >
                {custome == 'true' && userData?.type == 'sign' && <PaypalCheckout userData={signAdd} />}
                {custome == 'true' && userData?.type == 'box' && <PaypalCheckout userData={boxAdd} />}
                {custome == 'false' &&  <PaypalCheckout userData={otherProductTotal} />}

              </PayPalScriptProvider>
              </div>
                </div>
              </div>
              <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
                <h2 className="sr-only">Order summary</h2>
                <div>
                  <div className="absolute inset-0 h-full lg:h-[80%] w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
                </div>
                <div className="relative">
                  <ul className="space-y-5">
                  <li className="flex justify-between">
                      <div className="inline-flex">
                        
                        <div className="ml-3">
                          <p className="text-base font-semibold text-white">
                            Base Price
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        ${basePrice}
                      </p>
                    </li>
                   {userData?.image &&  <li className="flex justify-between">
                      <div className="inline-flex">
                        
                        <div className="ml-3">
                          <p className="text-base font-semibold text-white">
                            Image
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        ${userData?.image || 0}
                      </p>
                    </li>}
                    {userData?.type == 'sign' && <li className="flex justify-between">
                      <div className="inline-flex">
                        <div className="ml-3">
                          <p className="text-base font-semibold text-white">
                            Fixing Option
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        ${userData?.fixing_option || 0}
                      </p>
                    </li>}
                   {userData?.type == 'sign' && <li className="flex justify-between">
                      <div className="inline-flex">
                        <div className="ml-3">
                          <p className="text-base font-semibold text-white">
                            Sign Edge
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        ${userData?.sign_edge || 0}
                      </p>
                    </li>}
                    {userData?.type == 'sign' && <li className="flex justify-between">
                      <div className="inline-flex">
                        <div className="ml-3">
                          <p className="text-base font-semibold text-white">
                            Weather proofing
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        ${userData?.weather_proof || 0}
                      </p>
                    </li>}
                    {userData?.type == 'box' && userData?.compartments && <li className="flex justify-between">
                      <div className="inline-flex">
                        <div className="ml-3">
                          <p className="text-base font-semibold text-white">
                            Comparments
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        ${userData?.compartments || 0}
                      </p>
                    </li>}
                    <li className="flex justify-between">
                      <div className="inline-flex">
                        <div className="ml-3">
                          <p className="text-base font-semibold text-white">
                            Postage
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                         {Postage} ${postage_price}
                      </p>
                    </li>
                   
                  </ul>
                  <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                      <div className="flex justify-between">
                          <p className="text-sm font-semibold text-white">Total</p>
                        { userData?.type == 'sign' && custome == 'true' && <p className="text-sm font-semibold text-white">${signAdd}</p>}
                        { userData?.type == 'box'  && custome == 'true' &&  <p className="text-sm font-semibold text-white">${boxAdd}</p>}
                        {custome == 'false' && <p className="text-sm font-semibold text-white">${otherProductTotal}</p>}
                      </div>
                  <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                
                </div>
                <div className="relative mt-10 text-white">
                  <h3 className="mb-5 text-lg font-bold">Support</h3>
                  <p className="text-sm font-semibold">
                    +1111111111{" "}
                    <span className="font-light">(International)</span>
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    support@abc.com <span className="font-light">(Email)</span>
                  </p>
                  <p className="mt-2 text-xs font-medium">
                    Call us now for payment related issues
                  </p>
                </div>
               
              </div>
            </div>
            
            <div className="flex lg:hidden my-5">
              <PayPalScriptProvider
                options={{
                  
                  currency: "USD",
                  intent: "capture",
                }}
              >
                {custome == 'true' && userData?.type == 'sign' && <PaypalCheckout userData={signAdd} />}
                {custome == 'true' && userData?.type == 'box' && <PaypalCheckout userData={boxAdd} />}
                {custome == 'false' &&  <PaypalCheckout userData={otherProductTotal} />}
              </PayPalScriptProvider>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutDetails;
