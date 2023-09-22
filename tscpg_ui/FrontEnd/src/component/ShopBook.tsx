
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'axios';


type Props = {
  _id: number
  Bookname: string
  Bookdetail: string
  BookPrice: number
  file: string
}


const ShopBook = () => {
  function getdata() {
    axios.get('http://localhost:1234/store/some').then((res) => {
      console.log(res)
      setread(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    getdata()


  }, [])
  const [read, setread] = useState<Props[] | null>([])
  return (
    <div className='flex flex-wrap  flex-row'>{read ? read.map((res, index) => (       
      <div className="card w-96 bg-base-100 shadow-xl " key={index}>
        <figure><img src={'http://localhost:1234/Picsave/' + res.file} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{res.Bookname}!</h2>
          <p>{res.Bookdetail}</p>
          <div className="card-actions justify-end">
            <Link to={'/hi/' + res._id}>
              <button className='btn btn-primary'>awdadw</button>
            </Link>
          </div>
        </div>
      </div>
    )) : null}</div>
    
  )
}

export default ShopBook