import { useQuery } from "@tanstack/react-query";
import axiosClient from "../query/axiosClient";
import { useState, useEffect } from 'react';

// export const useBodyRecordData = () => {
//    const [textFilter, setTextFilter] = useState('');
//   return useQuery({
//     queryKey: ['body-record-data'],
//     queryFn: async () => {
//       const { data } = await axiosClient.get("http://localhost:5000/api/body-record-data");
//       return data;
//     },
//   });
// };
const fetchBodyRecordData = async (textFilter) => {
  const response = await axiosClient.get(`/api/body-record-data`, {
    params: {

      textFilter,
    },
  });
  return response.data;
};

export const useGetFilterBodyRecord = () => {
  const [textFilter, setTextFilter] = useState("day");
  const { data, isLoading, isError } = useQuery({
    queryKey: ['body-record-data', { textFilter }],
    queryFn: () => fetchBodyRecordData(textFilter),
    options: {
      keepPreviousData: true,
      staleTime: 5000,

    },
  });

  const loadNewFilter = (value) => {
    setTextFilter(value);
  };

  return {
    data,
    isLoading,
    isError,
    loadNewFilter
  };
};
