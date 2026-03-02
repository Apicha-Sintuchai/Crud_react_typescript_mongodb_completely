import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const handleremove = async(id:any) =>
  await axios.delete(`${API_URL}/store/some/${id}`)

  export const handlepost = async(data:any) =>
  await axios.post(`${API_URL}/store/some` ,data)

  export const handleget = async() =>
  {
   return await axios.get(`${API_URL}/store/some`)
  }

  export const read = async(id:any) =>
  {
   return await axios.get(`${API_URL}/store/some/${id}`)
  }
  export const put = async(id:any,data:any) =>
  {
   return await axios.put(`${API_URL}/store/some/${id}`,data)
  }
 

 
 