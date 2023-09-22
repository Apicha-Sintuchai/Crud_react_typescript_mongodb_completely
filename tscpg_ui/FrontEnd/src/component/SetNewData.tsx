import axios from 'axios';
import React from 'react'

import { useEffect, useState } from 'react'
import { Form, useParams } from 'react-router-dom';

type Props = {
    _id: any;
    Bookname: string;
    Bookdetail: string;
    BookPrice: number;
    file: string;
    shotstory: string;
}

const SetNewData = () => {
    const [update, setupdate] = useState<{ [key: string]: string | File }>()
    const [file,fileold] = useState<string | undefined>(undefined)
    const param = useParams<{ id: string }>()
    console.log(param)
    const Getdata =async ()  =>{
        axios
        .get('http://localhost:1234/store/some/' + param.id)
        .then((res) => {
            setupdate(res.data);
            fileold(res.data.file)
            console.log(file)
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    useEffect(() => {
        Getdata()
    
      
    }, [])

    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.name === 'file' && e.target.files) {
            setupdate({
                ...update,
                [e.target.name]: e.target.files[0],
            });
        } else {
            setupdate({
                ...update,
                [e.target.name]: e.target.value,
            });
        }
    }
    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const goimage = new FormData();
        for (const key in update) {
            goimage.append(key, update[key]);
        }
        if (file) {
            goimage.append('fileold', file); // ใส่ fileold ในกรณีที่ file มีค่า
        }
        axios
            .put('http://localhost:1234/store/some/' + param.id, goimage)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
  return (
    <div>
        <form onSubmit={submit} encType='multipart/form-data'>
                <input type='text' name='Bookname' placeholder='Bookname'
                    onChange={(e) => onchange(e)}
                ></input>
                <input type='text' name='Bookdetail' placeholder='Bookdetail'
                    onChange={(e) => onchange(e)}
                ></input>
                <input type='number' name='BookPrice' placeholder='BookPrice'
                    onChange={(e) => onchange(e)}
                ></input>
                <input type='text' name='shotstory' placeholder='shotstory'
                    onChange={(e) => onchange(e)}
                ></input>
                {/* <input type='file' name='file' placeholder='file' onChange={(e) => onchange(e)}
                ></input> */}
                <button>submit</button>
                <br></br>
            </form>
    </div>
  )
}

export default SetNewData