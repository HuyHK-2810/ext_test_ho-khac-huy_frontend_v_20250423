import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import axiosClient from '../query/axiosClient';

const fetchHistory = async (page, perPage, textFilter) => {
  const response = await axiosClient.get(`/api/history`, {
    params: {
      page,
      perPage,
      textFilter,
    },
  });
  return response.data;
};

export const useInfiniteHistory = () => {
  const perPage = 8;
  const [page, setPage] = useState(1);
  const [textFilter, setTextFilter] = useState('');
  const [historyData, setHistoryData] = useState([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['history', { page, perPage, textFilter }],
    queryFn: () => fetchHistory(page, perPage, textFilter),
    options: {
      keepPreviousData: true,
      staleTime: 5000,
      enabled: page > 0 && perPage > 0,
    },
  });

  useEffect(() => {
    setHistoryData((prevHistory) => {
      if (page === 1) {
        return data?.data || [];
      } else {
        return [...prevHistory, ...(data?.data || [])];
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

  const loadNewFilter = (value) => {
    setPage(1);

    setTextFilter(value);
  };

  return {
    historyData,
    isLoading,
    isError,
    loadNextPage,
    loadNewFilter
  };
};
