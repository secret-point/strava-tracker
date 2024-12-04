import axios from 'axios';
const BASE_URL = 'https://www.strava.com/api/v3';
const ACCESS_TOKEN = '062b4e7d7b534b5b40b7b15f8df9b5660a202864';

export const instance = axios.create({
  baseURL: BASE_URL,
  maxBodyLength: Infinity,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ACCESS_TOKEN}`
  }
});
