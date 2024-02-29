import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/axios/axios";


function useFetchCustomer(pageNum, searchTerm, token) {
  const [customers, setCustomer] = useState([]);
  const [total, setTotal] = useState();

  console.log("current token ", token);

  useEffect(() => {
    const getCustomer = async () => {
      const api = searchTerm
        ? `/customer-custom-designs?populate=*&filters[$or][0][first_name][$containsi]=${searchTerm}&filters[$or][1][last_name][$containsi]=${searchTerm}&filters[$or][2][email][$containsi]=${searchTerm}&sort[1]=first_name`
        : `/customer-custom-designs?pagination[page]=${pageNum}&pagination[pageSize]=12&sort[1]=first_name&populate=*`;
      try {
        const response = await axiosInstance.get(api, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("consumer response ",response.data)

        if (response.data.data) {
          setTotal(response.data?.meta?.pagination?.total);
          const customerResponse = response.data?.data;
          const filteredData = customerResponse?.map((item) => {
            const data = {
              id: item?.id,
              first_name: item?.attributes?.first_name,
              last_name: item?.attributes?.last_name,
              email: item?.attributes?.email,
             
              budget: item?.attributes?.budget,
              phone: item?.attributes?.phone,
              sign_edge: item?.attributes?.sign_edge ,
              fixing_option: item?.attributes?.fixing_option ,
              indoor_outdoor:item?.attributes?.indoor_outdoor ,
              sign_content: item?.attributes?.sign_content,
              size: item?.attributes?.size,
              price: item?.attributes?.price,
              image:item?.attributes?.image?.data?.attributes?.url ,
              compartments:item?.attributes?.compartments,
              Postage:item?.attributes?.Postage,
              type:item?.attributes?.type,
              extra_comment:item?.attributes?.extra_comment,
              timber_specie:item?.attributes?.timber_specie,
              font:item?.attributes?.font
            };

            return data;
          });

          setCustomer(filteredData);
        }

        // setCustomer(response.data?.data)
      } catch (error) {
        console.log("response fetch error", error);
      }
    };

    getCustomer();
  }, [pageNum, searchTerm]);

  return { customerData: customers, total: total };
}

export default useFetchCustomer;
