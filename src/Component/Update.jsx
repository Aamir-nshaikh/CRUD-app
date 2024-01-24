import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Update = () => {

  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://65ace813adbd5aa31bdfbba8.mockapi.io/CRUD-APP/${id}`,
      {
        name: name,
        email: email,
      }).then(() => {

        navigate('/read');
      })


  };
  useEffect(() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
  }, []);

  return (
    <>

      <h1 className='head'>Update Operation</h1>

      <form className='update'>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control"
            value={name} onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        <div className='btn'>
          <button type="submit" className="btn btn-primary" onClick={handleUpdate}
          >Update</button>
          <Link to={'/read'}>
            <button type='submit' className='btn btn-primary m-2'>Back</button>
          </Link>
        </div>


      </form>

    </>
  )
}

export default Update