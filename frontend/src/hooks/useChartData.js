import { useQuery } from "@tanstack/react-query";
import axiosClient from "../query/axiosClient";

export const useChartData = () => {
  return useQuery({
    queryKey: ['chartData'],
    queryFn: async () => {
      const { data } = await axiosClient.get("http://localhost:5000/api/chart-data");
      return data;
    },
  });
};
