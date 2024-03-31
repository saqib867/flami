import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "antd";
import { useRouter } from "next/router";
import useProductById from "@/hooks/useProductById";
import { baseImgUri } from "@/constants/baseImgUri";
import { axiosInstance } from "@/axios/axios";
import { toast } from "react-toastify";
import CheckoutSuccess from "../checkout/CheckoutSuccess";
import DescriptionBlockRenderer from "../DescriptionBlockRenderer";

function PersonalForm() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const itemId = router.query.itemId;

  const { productData } = useProductById(itemId);

  console.log("product data => ", productData);

  const type =
    productData?.data?.attributes?.categories_data?.data?.attributes?.type;

  const schema = yup.object().shape({
    first_name: yup.string().required("first name is required"),
    last_name: yup.string().required("last name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: yup.number().required(),
    sign_content: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const typeOfCategory =
    type == "Custom Wood Signs"
      ? "sign"
      : type == "Custom Wood Boxes"
      ? "box"
      : type == "Chopping/Serving Boards"
      ? "chopping_serving_board"
      : type == "Timber serving Board"
      ? "timber_serving_board"
      : type == "Olive Wood Hearts"
      ? "olive_wood_heart"
      : null;
  console.log("type of cate ", typeOfCategory);

  const handleFormSubmit = async (data) => {
    setLoading(true);

    try {
      if (typeOfCategory) {
        const myData = {
          [typeOfCategory]: productData?.data?.id,
          first_name: data?.first_name,
          last_name: data?.last_name,
          phone: data?.phone,
          email: data?.email,
          sign_content: data?.sign_content,
          isCustome: false,
        };

        console.log("my data ", myData);

        const consumerRespond = await axiosInstance.post(
          `/customers?populate[0]=${typeOfCategory}.heroImg&populate[1]=${typeOfCategory}.categories_data`,
          { data: myData }
        );
        console.log("consumer respond ", consumerRespond.data);
        const response = await axiosInstance.post("/user/email", {
          product: consumerRespond?.data?.data?.attributes,
          isCustome: consumerRespond?.data?.attributes?.isCustome,
          first_name: data.first_name,
          last_name: data?.last_name,
          sign_content: data?.sign_content,
          phone: data?.phone,
          to: "husain.saqib@gmail.com",
          from: "abc@gmail.com",
        });
        setOpen(true);
      }
    } catch (error) {
      console.log("error while sending email => ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex  flex-col-reverse sm:flex-row-reverse justify-center gap-y-8 gap-x-8 md:m-4">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className=" flex flex-col gap-y-9 w-[100%] sm:[50%] md:w-[40%] shadow-slate-400 shadow-lg p-2 h-fit rounded"
        >
          <div className="flex flex-col gap-4 my-4 ">
            <Inputs
              label={"First Name"}
              name={"first_name"}
              events={register}
              errors={errors}
              type={"text"}
            />
            <Inputs
              label={"Last Name"}
              name={"last_name"}
              events={register}
              errors={errors}
              type={"text"}
            />
            <Inputs
              label={"Email"}
              name={"email"}
              events={register}
              errors={errors}
              type={"text"}
            />
            <Inputs
              label={"Phone No"}
              name={"phone"}
              events={register}
              errors={errors}
              type={"number"}
            />
            {(typeOfCategory == "box" || typeOfCategory == "sign") && (
              <div className="flex-1">
                {" "}
                <Inputs
                  label={"Sign Content"}
                  name={"sign_content"}
                  events={register}
                  errors={errors}
                  type={"text"}
                />{" "}
              </div>
            )}
          </div>
          <button
            disabled={loading}
            type="submit"
            className="bg-[#003933] text-white p-2 rounded my-2"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <div className="w-[50%]">
          <div className="flex flex-col gap-y-4 items-center  px-3 py-2">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-2xl text-start font-bold">
                Product Details
              </h3>
              <img
                src={
                  baseImgUri +
                  productData?.data?.attributes?.heroImg?.data?.attributes?.url
                }
                className=" w-[50%] "
              />
              <div className="flex flex-col gap-y-2 items-start">
                <h3 className="text-lg">
                  <span className="font-bold"> </span>
                  <span>{productData?.data?.attributes?.title}</span>
                </h3>
                <h3 className="text-lg">
                  <span className="font-bold">$ </span>
                  <span>{productData?.data?.attributes?.price}</span>
                </h3>
                <DescriptionBlockRenderer
                  description={productData?.data?.attributes?.Description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <CheckoutSuccess isModalOpen={open} handleOk={() => setOpen(false)} />
      )}
    </div>
  );
}

export default PersonalForm;

const Inputs = ({ label, events, name, errors, type }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label>{label}</label>
      <input
        {...events(name)}
        type={type}
        className={`border rounded p-1 h-10 ${
          errors[name] ? "border-red-500" : "border-slate-400"
        }`}
      />
      {errors[name] ? (
        <small style={{ color: "red" }}>{errors[name].message}</small>
      ) : null}
    </div>
  );
};
