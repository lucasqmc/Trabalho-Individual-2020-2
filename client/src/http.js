import axios from 'axios';

const ENDPOINT_PROD = 'https://gces-api2.herokuapp.com/';
const ENDPOINT_DEV = 'http://localhost:8000';
const enviroment = process.env.NODE_ENV
const baseURL = enviroment === 'development' ? ENDPOINT_DEV : ENDPOINT_PROD

export const http = axios.create({
  baseURL
});
