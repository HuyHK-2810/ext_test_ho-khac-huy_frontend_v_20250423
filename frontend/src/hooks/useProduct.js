import { useQuery } from '@tanstack/react-query';
import axiosClient from '../axiosClient';

export const useProducts = () => {
  return useQuery(['products'], () =>
    axiosClient.get('/api/products').then((res) => res.data)
  );
};
