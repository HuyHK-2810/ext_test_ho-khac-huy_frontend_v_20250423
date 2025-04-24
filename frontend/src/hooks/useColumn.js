import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import axiosClient from '../query/axiosClient';

const fetchColumn = async (page, perPage, textFilter) => {
  const response = await axiosClient.get(`/api/column`, {
    params: {
      page,
      perPage,
      textFilter,
    },
  });
  return response.data;
};

export const useInfiniteColumn = () => {
  const perPage = 8;
  const [page, setPage] = useState(1);
  const [textFilter, setTextFilter] = useState('');
  const [columnData, setColumnData] = useState([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['column', { page, perPage, textFilter }],
    queryFn: () => fetchColumn(page, perPage, textFilter),
    options: {
      keepPreviousData: true,
      staleTime: 5000,
      enabled: page > 0 && perPage > 0,
    },
  });

  useEffect(() => {
    setColumnData((prevColumn) => {
      if (page === 1) {
        return data?.data || [];
      } else {
        return [...prevColumn, ...(data?.data || [])];
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
    columnData,
    isLoading,
    isError,
    loadNextPage,
    loadNewFilter
  };
};
