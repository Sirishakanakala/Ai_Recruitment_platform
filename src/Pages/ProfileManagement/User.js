import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function User() {
  // const users = [
  //   {
  //     Company_Name: 'Amazon',
  //     Contact_Details: '1234567890',
  //     Industry: 'IT Industry',
  //     Job_role: 'Software Developer',
  //     Company_Description: 'We are recruiting',
  //     Job_Openings: '10'
  //   }
  // ];
  // const [users, setUsers] = useState([{
  //     Company_Name: 'Amazon',
  //     Contact_Details: '1234567890',
  //     Industry: 'IT Industry',
  //     Job_role: 'Software Developer',
  //     Company_Description: 'We are recruiting',
  //     Job_Openings: '10' 
  // }])
  const [users, setUsers] = useState([])
  
  useEffect( () => {
      axios.get('http://localhost:3001/profile/')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  },[])

  const handleDelete = (id) =>{
    // axios.delete('/profile/delete/' + id)
    axios.delete(`http://localhost:3001/profile/delete/${id}`)
    .then(res => {
      console.log("Deleted User:", res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }
  return (
    <> 
       <div className="container mt-4">
        <Link to='/profile/create' className='btn btn-light'>Create New Profile</Link>
      </div>
      <div className="container mt-4">
        <div className="row">
          {users.map((user, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="card custom-card" style={{ backgroundColor: '#291c32', borderRadius: '1rem' }}>
                <div className="card-header">
                  <h5 className="card-title">{user.company_name}</h5>
                </div>
                <div className="card-body">
                  <p><b style={{ color: "#b49ec5" }}>Contact Details: </b>{user.contact_details}</p>
                  <p><b style={{ color: "#b49ec5" }}>Industry: </b> {user.industry}</p>
                  <p><b style={{ color: "#b49ec5" }}>Job Role: </b>{user.job_role}</p>
                  <p><b style={{ color: "#b49ec5" }}>Company Description: </b> {user.company_description}</p>
                  <p><b style={{ color: "#b49ec5" }}>Job Openings: </b>{user.job_openings}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <Link to={`/profile/update/${user._id}`} className="btn btn-light" 
                  style={{  fontWeight: '600', backgroundColor: 'transparent' ,border:'none'}}
                  ><FaEdit/></Link>
                  <button className="btn btn" 
                  style={{  fontWeight: '600', backgroundColor: 'transparent' }}
                  onClick={(e) => handleDelete(user._id)}
                  ><FaTrash style={{color:'black'}}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
