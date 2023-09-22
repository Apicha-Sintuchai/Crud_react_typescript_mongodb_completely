import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


type Props = {
    _id: number
    Bookname: string
    Bookdetail: string
    BookPrice: number
    file: string
    shortstory:string
}

const FormPost = () => {
    const [post, setpost] = useState<{ [key: string]: string | File }>({})
    const url = 'http://localhost:1234/store/some'
    //:React.ChangeEvent<HTMLInputElement>
    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.name === 'file' && e.target.files) {
            setpost({
                ...post,
                [e.target.name]: e.target.files[0],
            });
        } else {
            setpost({
                ...post,
                [e.target.name]: e.target.value,
            });
        }
    }
    //React.FormEvent<HTMLFormElement>
    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const goimage = new FormData()
        for (const key in post) {
            goimage.append(key, post[key])
        }

        axios.post(url, goimage).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
        getdata()
    }
    const remove = async (id: any) => {
        axios.delete('http://localhost:1234/store/some/' + id).then((res) => {
            console.log(res)
        }).then((err) => {
            console.log(err)
        })
        getdata()

    }
    const getdata = async () => {
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

    // const onedit = () => {
        
    // }
    const [read, setread] = useState<Props[] | null>([])

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
                <input type='file' name='file' placeholder='file' onChange={(e) => onchange(e)}
                ></input>
                <input type='text' name='Link' placeholder='Link' onChange={(e) => onchange(e)}
                ></input>
                <button>submit</button>
                <br></br>
            </form>
            {/* <button onSubmit={remove}>delete</button> */}
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                        <th scope="col">Bookname</th>
                        <th scope="col">Bookdetail</th>
                        <th scope="col">Price</th>
                        <th scope="col">shortstory</th>
                        <th scope="col">delete</th>
                        {/* <th scope="col">edit</th> */}
                        
                    </tr>
                </thead>
                <tbody>
                   

                {
                    read ? read.map((res,index) =>(
                        <tr key={index}>
                         <td>{index + 1}</td>   
                        <th scope="row">{res.Bookname}</th>
                        <td>{res.Bookdetail}</td>
                        <td>{res.BookPrice}</td>
                        <td>{res.file}</td>
                        <td>{res.shortstory}</td>
                        <td onClick={() =>remove(res._id)}>delete</td>
                        <Link to={'/for/admin/edit/' + res._id}><td>edit</td></Link>

                    </tr>
                    )) : null
                }    
                </tbody>
            </table>

        </div>
    )
}

export default FormPost