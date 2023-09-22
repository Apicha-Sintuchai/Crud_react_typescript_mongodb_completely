import axios from "axios";

export const handleremove = async(id:any) => 
  await axios.delete('http://localhost:5000/api/product/' + id)

  export const handlepost = async(data:any) => 
  await axios.post('http://localhost:5000/api/product/' ,data)

  export const handleget = async() => 
  {
   return await axios.get('http://localhost:5000/api/product' )
  }

  export const read = async(id:any) => 
  {
   return await axios.get('http://localhost:5000/api/product/' + id )
  }
  export const put = async(id:any,data:any) => 
  {
   return await axios.put('http://localhost:5000/api/product/' + id,data )
  }
 

 
 