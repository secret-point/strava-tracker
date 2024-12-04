import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { Activity } from '../types/activity';
import { instance as axiosInstance } from '../utils/axios';

const fetchActivities = async (token: string): Promise<Activity[]> => {
  const res = await axiosInstance.get('/athlete/activities');
  return res.data
};

export const useActivities = (token: string) => {
  return useQuery<Activity[], Error>({
    queryKey: ['activities', token],
    queryFn: () => fetchActivities(token),
    enabled: !!token,
  });
};