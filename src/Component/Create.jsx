import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();
    const header = { "Access-Control-Allow-Origin": "*" };


    const handleClick = (e) => {
        e.preventDefault();
        axios.post(
            'https://65ace813adbd5aa31bdfbba8.mockapi.io/CRUD-APP',
            { name: name, email: email, header, }
        )

            .then(() => {
                history("/read");
            })

    }
    return (
        <>
            <div className='head'>
                <h1>Create Operation</h1>
                <Link to={'/read'}><button className='btn btn-primary' >Show Data</button> </Link> </div>
                

            <form className='create'>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>


                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>

        </>
    )
}

export default Create