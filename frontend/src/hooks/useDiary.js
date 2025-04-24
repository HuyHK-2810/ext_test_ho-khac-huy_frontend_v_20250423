import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import axiosClient from '../query/axiosClient';

const fetchDiary = async (page, perPage) => {
  const response = await axiosClient.get(`/api/diary`, {
    params: {
      page,
      perPage,
    },
  });
  return response.data;
};

export const useInfiniteDiary = () => {
  const perPage = 8;
  const [page, setPage] = useState(1);
  const [diaryData, setDiaryData] = useState([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['diary', { page, perPage }],
    queryFn: () => fetchDiary(page, perPage),
    options: {
      keepPreviousData: true,
      staleTime: 5000,
      enabled: page > 0 && perPage > 0,
    },
  });

  useEffect(() => {
    setDiaryData((prevDiary) => {
      if (page === 1) {
        return data?.data || [];
      } else {
        return [...prevDiary, ...(data?.data || [])];
      }
    });
  }, [JSON.stringify(data?.data)])

  const loadNextPage = () => {
    if (data && data.total <= data.data.length) {
      return;
    }
    const nextPage = page + 1;
    setPage(nextPage);
  };


  return {
    diaryData,
    isLoading,
    isError,
    loadNextPage,
  };
};
