import axios, { AxiosRequestConfig } from 'axios';

export const get = async (url: string, config?: AxiosRequestConfig<any>) => { 
  try{
    return await axios.get(url, config);
  }catch(error){
    console.log(error);
  }
};

export const post = async(url: string, data?: any, config?: AxiosRequestConfig<any>) => {
  try{
    return await axios.post(url, data, config);
  }catch(error){
    console.log(error);
  }
};

export const put = async(url: string, data?: any, config?: AxiosRequestConfig<any>) => {
  try{
    return await axios.put(url, data, config);
  }catch (error){
    console.log(error)
  }
};