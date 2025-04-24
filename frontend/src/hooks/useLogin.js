import { useMutation } from '@tanstack/react-query';
import axiosClient from '../query/axiosClient';

export const useLogin = () => {
  return useMutation({
    mutationFn: (data) =>
      axiosClient.post('/api/login', data).then((res) => res.data)
  })
};
