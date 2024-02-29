import { axiosInstance } from "@/axios/axios";
import { generateRandomToken } from "@/utils/randomToken";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { Button, Input, Modal } from "antd";
import React, { useState } from "react";
import { toast } from "react-toastify";


function EmailPopUp({ isModalOpen, setIsModalOpen, userData,isCustome,active }) {
    
  const [isSending, setIsSending] = useState(false)
  const [inputs,setInputs] = useState({
       sign_edge:null,
       fixing_option:null,
       image:null,
       Postage:null,
       weather_proof:null,
       base_price:null,
       compartments:null

  })


  const handleCancel = () => {
    setIsModalOpen(false); 
  };

  const handleInput =(e,type)=>{

         setInputs({...inputs,[type]:parseInt(e.target.value)})
  }
 
  const handleConfirm = async(e) => {
    e.preventDefault()
    const data = new FormData()
    const newData ={
         ...inputs,
         customer:userData?.id,
         type:userData?.type  
    }

    const otherData = {
          customer_other:userData?.id,
          type:active
    }
   const dataToSend = (userData?.type == 'sign' || userData?.type == 'box') ? newData :otherData
    let id
    try {
      setIsSending(true)
       const createConsumer = await axiosInstance.post(`/consumer-responds?populate[0]=customer&populate[1]=image&populate[2]=customer_other.${active}`,{data:dataToSend})
       console.log("create customer response => ",createConsumer)
       id = createConsumer.data?.data?.id
      if(createConsumer.data?.data?.attributes){
        const getData = createConsumer.data?.data?.attributes
        const emailData ={
              
               first_name:getData?.customer?.data?.attributes?.first_name || getData?.customer_other?.data?.attributes?.first_name,
               last_name:getData?.customer?.data?.attributes?.last_name || getData?.customer_other?.data?.attributes?.last_name,
               title:getData?.customer?.data?.attributes?.type || getData?.customer_other?.data?.attributes?.[active]?.data?.attributes?.title,
               sign_content:getData?.customer?.data?.attributes?.sign_content,
               base_price:getData?.base_price || getData?.customer_other?.data?.attributes?.[active]?.data?.attributes?.price,
               sign_edge:getData?.sign_edge,
               fixing_option:getData?.fixing_option,
               Postage:getData?.customer?.data?.attributes?.Postage || getData?.customer_other?.data?.attributes?.[active]?.data?.attributes?.Postage,
               postage_price:getData?.Postage || getData?.customer_other?.data?.attributes?.[active]?.data?.attributes?.postage_price,
               image:getData?.image,
               weather_proof:getData?.weather_proof,
               compartments_price:getData?.compartments,
               compartments: getData?.customer_other?.data?.attributes?.[active]?.data?.attributes?.compartments || '',
               type:getData?.type || active,
               custId:id
              
        }

        console.log("email data ",emailData)

       const toEmail = userData?.email || getData?.customer_other?.data?.attributes?.email
      const response = await axiosInstance.post("/user/admin/email",{...emailData,to:toEmail,from:'husain.saqib31@gmail.com',isCustome:isCustome,active:active})
      toast.success("Email has been sent to customer successfully",{style:{color:'white',backgroundColor:'green'}})
      }
     
    setIsModalOpen(false);
   
    } catch (error) {
          console.log("some thing went wrong",error)
     }
     finally{
        setIsSending(false)
        }
};

console.log("inputs ",inputs)
  return (
    <div className="max-w-2xl" >
      <Modal
        title="Details"
        open={isModalOpen}
        onOk={handleConfirm}
        onCancel={handleCancel}
        cancelButtonProps={{style:{display:'none'}}}
        okButtonProps={{ style: { display:'none'}}}
        okText={<span className="text-white">{isSending?'Sending...' : 'Send Email'}</span>}
        width={450}
        
      >
        <div className="grid grid-cols-1 gap-y-2  gap-x-2  w-full">
               <form className="flex flex-col gap-y-2" onSubmit={handleConfirm}>
              
                {isCustome && <div>
                  <label>Base Price</label>
                  <Input required type="number" value={inputs.base_price} onChange={(e)=>handleInput(e,"base_price")}/>
                </div>}
                {userData?.type == 'sign' && isCustome &&<div>
                  <label>Sign Edge</label>
                  <Input required type="number" value={inputs.sign_edge} onChange={(e)=>handleInput(e,"sign_edge")}/>
                </div>}
                {userData?.type == 'sign' && isCustome && <div>
                  <label>Weather Proof</label>
                  <Input required type="number" value={inputs.weather_proof} onChange={(e)=>handleInput(e,"weather_proof")}/>
                </div>}
               {userData?.type == 'sign' && isCustome && <div>
                  <label>Fixing Option</label>
                  <Input required type="number" value={inputs.fixing_option} onChange={(e)=>handleInput(e,"fixing_option")}/>
                </div>}
                {(userData?.type == 'box' && isCustome && userData?.compartments !=0) && <div>
                  <label>Comparments</label>
                  <Input required type="number" value={inputs.compartments} onChange={(e)=>handleInput(e,"compartments")}/>
                </div>}

                {isCustome && <div>
                  <label>Image</label>
                  <Input type="number" value={inputs.image} onChange={(e)=>handleInput(e,"image")}/>
                </div>}
                { isCustome && <div>
                  <label>Postage</label>
                  <Input type="number" value={inputs.Postage} onChange={(e)=>handleInput(e,"Postage")}/>
                </div>}
                {!isCustome && <div className="flex flex-col gap-y-1">
                             <div className="flex flex-col p-1 border rounded-md gap-y-1">
                                 <label>Full Name</label>
                                 <p ><span>{userData?.attributes?.first_name} </span> <span> {userData?.attributes?.last_name}</span></p>
                             </div>
                             <div className="flex flex-col p-1 border rounded-md gap-y-1">
                                 <label>Email</label>
                                 <p ><span>{userData?.attributes?.email} </span></p>
                             </div>
                             <div className="flex flex-col p-1 border rounded-md gap-y-1">
                                 <label>sign Content</label>
                                 <p ><span>{userData?.attributes?.sign_content} </span></p>
                             </div>
                             <div className="flex flex-col p-1 border rounded-md gap-y-1">
                                 <label>Type</label>
                                 <p ><span className="capitalize"> {active}</span></p>
                             </div>
                    </div>}
                <div className="text-end"><button type="submit" disabled={isSending} className="bg-[#003933] py-2 px-3 border-0 w-full rounded text-white">{isSending ?"Sending...":'Send'}</button></div> 
               </form>  
        </div>
        
      </Modal>
    </div>
  );
}

export default EmailPopUp;
