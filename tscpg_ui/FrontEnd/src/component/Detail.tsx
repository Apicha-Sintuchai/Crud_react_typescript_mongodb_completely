
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


type APis = {
  _id: any;
  Bookname: string;
  Bookdetail: string;
  BookPrice: number;
  file: string;
  shotstory: string;
  Link?:any
}

const Detail = () => {
  const [read, setread] = useState<APis | null>(null); // Specify the type of read
  const param = useParams<{ id: string }>(); // Specify the type of param

  function getdata() {
    return (
      axios
        .get('http://localhost:1234/store/some/' + param.id)
        .then((res) => {
          setread(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  }

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <div className='Image flex flex-wrap justify-between mx-auto p-10'>
        {read && <img src={'http://localhost:1234/Picsave/' + read.file}></img>}
        <div className='Box-Detail '>
          <div className='insidedetail font-bold  text-4xl m-5'>
            <h2>ชื่อสินค้า:  {read && <h1>{read.Bookname}</h1 >}</h2>
           
          </div>
          <div className='insidedetail-detail font-bold text-3xl m-5'>
            
          <h2>ชื่อสินค้า:  {read && <h1>{read.Bookdetail}</h1>}</h2>
          </div>
          <div className='insidedetail-price font-bold text-3xl m-5'>
          <h2>ชื่อสินค้า:  {read && <h1>{read.BookPrice}</h1>}</h2>
          </div>
        </div>
      </div> 
      <div className='moredetail'>
        <div className='some font-bold text-4xl'>
          <h2>
          {read && <h1>{read.shotstory}</h1>}
          </h2>
          <Link to={read?.Link}>
           <h2>
          {read && <h1>{read.shotstory}</h1>}
          </h2></Link>
           
        </div>
      </div>

    </div>
  )
}

export default Detail