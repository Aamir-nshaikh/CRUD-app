import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  Link } from "react-router-dom";

const Read = () => {

    const [data, setData] = useState([]);



    function getData() {
        axios
            .get('https://65ace813adbd5aa31bdfbba8.mockapi.io/CRUD-APP')
            .then((res) => setData(res.data))

    }

    function handleDelete(id) {
        axios.delete(`https://65ace813adbd5aa31bdfbba8.mockapi.io/CRUD-APP/${id}`)
            .then(() => {
                getData()
            })
    }

    const setToLocalStorage = (id,name,email) =>{
        localStorage.setItem("id" ,id)
        localStorage.setItem("name" ,name);
        localStorage.setItem("email" ,email);

    };

    useEffect(() => {
        getData();
    }, []);


    return (<>
    <div className='head'> 
    <h1>Read Operation</h1>
    <Link to={'/'}>
            <button type='submit' className='btn btn-primary m-2'>Back</button>
          </Link>
    </div>
       
        <div className='table'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Add</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {data.map((eachData) => {
                    return (
                        <>
                            <tbody>
                                <tr>
                                    <th scope="row">{eachData.id}
                                    </th>
                                    <td>{[eachData.name]}</td>
                                    <td>{eachData.email}</td>

                                    <td>
                                        <Link to='/update'><button className="btn btn-success" onClick={() => setToLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button></Link>

                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handleDelete(eachData.id)}>Delete</button>
                                    </td>
                                </tr>

                            </tbody>

                        </>
                    )
                })



                }


            </table>
        </div>
    </>
    )
}

export default Read