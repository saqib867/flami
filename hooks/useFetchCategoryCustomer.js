import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/axios/axios";


function useFetchCategoryCustomer(active,searchTerm,page) {
  const [data, setData] = useState([]);
  const [total,setTotal] = useState(0)

  const activeTab =
    active == 2
      ? "sign"
      : active == 3
      ? "box"
      : active == 4
      ? "chopping_serving_board"
      : active == 5
      ? "timber_serving_board"
      : active == 6
      ? "olive_wood_heart"
      : "";   

  useEffect(() => {
    if (active != 1) {
      const getData = async () => {
        try {
          const api = searchTerm
          ? `/customers?populate[0]=${activeTab}&populate[1]=${activeTab}.heroImg&populate[2]=${activeTab}.categories_data&filters[$or][0][first_name][$containsi]=${searchTerm}&filters[$or][1][last_name][$containsi]=${searchTerm}&filters[$or][2][email][$containsi]=${searchTerm}&sort[1]=first_name`
          : `/customers?populate[0]=${activeTab}&populate[1]=${activeTab}.heroImg&populate[2]=${activeTab}.categories_data&pagination[page]=${page}&pagination[pageSize]=12`;
          const response = await axiosInstance.get(api);
          setTotal(response.data?.meta?.pagination?.total)
          console.log("response.data?.meta?.pagination?.total ",response.data?.meta?.pagination?.total)
          const getData = response?.data?.data?.filter(
            (item) => item?.attributes[activeTab]?.data
          );
          console.log("get data ==> ", getData);
          setData(getData);
        } catch (error) {
          console.log("errors => ", error);
        }
      };

      getData();
    }
  }, [active,searchTerm]);

  return { data: data,to:total };
}

export default useFetchCategoryCustomer;
