const BASE_URL = 'https://www.strava.com/api/v3';
import { instance as axiosInstance } from "./axios";

export const fetchActivities = async (token: string) => {
  const response = await axiosInstance.get('/athlete/activities');
  console.log(response.data)
  return response.data;
};
