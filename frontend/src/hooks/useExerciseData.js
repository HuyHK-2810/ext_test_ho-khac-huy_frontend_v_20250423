import { useQuery } from "@tanstack/react-query";
import axiosClient from "../query/axiosClient";

export const useExerciseData = () => {
  return useQuery({
    queryKey: ['exercise-data'],
    queryFn: async () => {
      const { data } = await axiosClient.get(`/api/exercise-data`);
      return data;
    },
  });
};
