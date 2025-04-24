import { useQuery } from "@tanstack/react-query";
import axiosClient from "../query/axiosClient";

export const useAchievementRate = () => {
  return useQuery({
    queryKey: ['achievement-rate'],
    queryFn: async () => {
      const { data } = await axiosClient.get("http://localhost:5000/api/achievement-rate");
      return data;
    },
  });
};
