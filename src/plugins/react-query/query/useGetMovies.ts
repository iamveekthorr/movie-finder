/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';

import { interceptor } from '../../axios/axios.config';

const getAllMovies = async (query?: string) => {
  if (!query) return [];

  const response = await interceptor.get(
    `/shows${query ? `?q=?${query}` : ''}`
  );
  return response.data as any;
};

const useGetAllMovies = (query?: string) => {
  return useQuery({
    queryKey: ['GET_ALL_MOVIES', query],
    queryFn: () => getAllMovies(query),
  });
};

export default useGetAllMovies;
