import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Button } from "antd";
import { axiosInstance } from "@/axios/axios";
import axios from "axios";
import SuccessModal from "./SuccessModal";
import { useRouter } from "next/router";

const CustomizationForm = ({
  totalPrice,
  selectedWeatherproofing,
  selectedEdging,
  selectedHanging,
  selectedImageOption,
  electedPostage,
  heroImg,
  price
}) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    sign_content: "",
    size: "",
    budget: "",
    image1: null,
    image2: null,

  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const handleOk = () => {
    setIsModalOpen(false);
  };

 

  const handleForm = (type, e) => {
    if (type == "image1" || type == "image2") {
      setFormData((pre) => {
        return {
          ...pre,
          [type]: e.target.files[0],
        };
      });
    } else {
      setFormData((pre) => {
        return {
          ...pre,
          [type]: e.target.value,
        };
      });
    }
  };
  const data = new FormData();
  const newForm = {
    first_name: formData.first_name,
    last_name: formData.last_name,
    email: formData.email,
    phone: formData.phone,
    sign_content: formData.sign_content,
    size: formData.size,
    budget: formData.budget,
    totalPrice: totalPrice,
    originalPrice:price,
    selectedEdging,
    selectedHanging,
    selectedImageOption,
    selectedWeatherproofing,
    electedPostage,
    heroImg
  };
  data.append("data", JSON.stringify(newForm));

  data.append("files.image1", formData.image1);
  data.append("files.image2", formData.image2);
  const hanldeSendRequest = async (e) => {
    e.preventDefault();

    let id;
    setIsSubmitting(true);
    try {
      const createResponse = await axiosInstance.post("/consumers?populate=*", data);
      console.log("create response data ", createResponse);
      id = createResponse.data?.data?.id;
      const recevierEmail = createResponse.data?.data?.attributes?.email;
      if (createResponse.status == 200) {
        const response = await axiosInstance.post("/user/email",
          {...createResponse?.data?.data?.attributes, to: "husain.saqib31@gmail.com",from: formData.email }
        );
        setIsModalOpen(true);
      } else {
        if (id) {
          try {
            const response = await axiosInstance.delete(`/consumers/${id}`);
            console.log("deleted", response);
          } catch (error) {
            console.log("delete error", error);
          }
        }
      }
    } catch (error) {
      console.log("db error ", error);
      if (id) {
        try {
          const response = await axiosInstance.delete(`/consumers/${id}`);
          console.log("deleted", response);
          router.push('/products')
          
        } catch (error) {
          console.log("delete error", error);
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form
      onSubmit={hanldeSendRequest}
      className="my-10 flex flex-col md:w-[80%]  gap-4"
    >
      <div className="flex sm:flex-row flex-col justify-between gap-10 ">
        <div className="flex flex-col gap-1 flex-1">
          <span>First Name *</span>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            onChange={(e) => handleForm("first_name", e)}
            className="bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2"
          />
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <span>Last Name *</span>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => handleForm("last_name", e)}
            placeholder="Last Name"
            className="bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2"
          />
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-between gap-10 ">
        <div className="flex flex-col gap-1 flex-1">
          <span>Email *</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => handleForm("email", e)}
            className="bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2"
          />
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <span>Mobile Phone Number *</span>
          <input
            type="number"
            name="mobile"
            id="mobile"
            onChange={(e) => handleForm("phone", e)}
            placeholder="Mobile Phone Number"
            className="bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <span>Sign Content *</span>
        <input
          type="text"
          name="signcontent"
          id="signcontent"
          onChange={(e) => handleForm("sign_content", e)}
          placeholder="Text to be engraved on sign/plague"
          className="bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2"
        />
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <span>Size of sign *</span>
        <input
          type="text"
          name="size"
          id="size"
          placeholder="Text to be engraved on sign/plague"
          onChange={(e) => handleForm("size", e)}
          className="bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2"
        />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <span>Budget*</span>
        <input
          type="number"
          name="budget"
          id="budget"
          placeholder="Text to be engraved on sign/plague"
          onChange={(e) => handleForm("budget", e)}
          className="bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2"
        />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <span>
          Timber Species (See examples in wood signs) Some types not available
          in all sizes. Natural timbers do vary batch to batch I get.*
        </span>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2"
        />
      </div>

      <div className="flex sm:flex-row flex-col justify-between gap-10 ">
        <div className="flex flex-col gap-1 flex-1">
          <span>Image *</span>
          <input
            type="file"
            accept="image/*"
            name="mobile"
            id="mobile"
            onChange={(e) => handleForm("image1", e)}
            className="bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2"
          />
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <span>Image*</span>
          <input
            type="file"
            accept="image/*"
            name="image"
            id="image"
            onChange={(e) => handleForm("image2", e)}
            className="bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-[#003933] text-white rounded py-2 px-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? "sending..." : "Send Request"}
        </button>
      </div>

      {/*      
      <PayPalScriptProvider  options={{ clientId: "ASRkVKUUnM5V8yuY8CxcIgsCbfxELi4fRhUoa7fpg-uJPI-JrWtOgKXXCEM5TJHIJoFfd0IZ9o5HG-TP",currency:'USD',intent:'capture'}}>
          <div className='relative'>  
         <button className='absolute left-0 text-white bg-[#003933] px-3 py-2 mt-4 rounded w-fit'>checkout</button>
            <PayPalButtons className='opacity-0'  style={{ layout: "horizontal",label:"checkout"}} 
             createOrder={(data,action)=>{
               return action.order.create({
                  intent:'CAPTURE',
                   purchase_units:[
                     {
                        custom_id:Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
                        invoice_id:Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
                        description:'wood analysis',
                        amount:{
                           value:20,
                           currency_code:'USD'
                        },
                        
                        // payee:{
                        //    email_address:'sb-hyvh827700298@business.example.com',merchant_id:'99ENDF7XVUJ5A'
                        // }
                     }
                   ]
               })
             }}
            onApprove={async(data,action)=>{
                const order = await action.order.capture()
                console.log("order ",order)
                handleApprove(data)
            }}

              onError={(error)=>console.log("paypal error",error)}

            />
            
        </div>  
        </PayPalScriptProvider> */}
      <SuccessModal isModalOpen={isModalOpen} handleOk={handleOk} />
    </form>
  );
};

export default CustomizationForm;
