import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {

  const [company_name, setCompany_name] = useState();
  const [contact_details, setContact_details] = useState();
  const [industry, setIndustry] = useState();
  const [job_role, setJob_role] = useState();
  const [company_description, setCompany_description] = useState();
  const [job_openings, setJob_openings] = useState();
  
  const navigate = useNavigate()

  const Submit = (e) =>{
     e.preventDefault();
     axios.post("http://localhost:3001/profile/create/", {company_name, contact_details, industry, job_role, company_description, job_openings})
     .then(result => {
        console.log("data result:",result)
        navigate('/profile')
     })
     .catch(err => console.log(err))
  }

  return (
    <>  
      <div className="container mt-4 d-flex justify-content-center">
        <div className="card" style={{ width: '500px', backgroundColor: '#1a1224', borderRadius:'1rem', padding: '1rem' }}> 
          <h3 className='mt-4 text-white text-center'>Create New Profile</h3>
          <form onSubmit={Submit}>
            <div className="mb-2">
              <label htmlFor="companyName" className="form-label text-white">Company Name</label>
              <input type="text" className="form-control" id="companyName" placeholder="Enter Company Name" 
              onChange={(e) => setCompany_name(e.target.value)}/>
            </div>
            <div className="mb-2">
              <label htmlFor="contactDetails" className="form-label text-white">Contact Details</label>
              <input type="text" className="form-control" id="contactDetails" placeholder="Enter Contact Details"
              onChange={(e) => setContact_details(e.target.value)} />
            </div>
            <div className="mb-2">
              <label htmlFor="industry" className="form-label text-white">Industry</label>
              <input type="text" className="form-control" id="industry" placeholder="Enter Industry"
              onChange={(e) =>  setIndustry(e.target.value)} />
            </div>
            <div className="mb-2">
              <label htmlFor="jobRole" className="form-label text-white">Job Role</label>
              <input type="text" className="form-control" id="jobRole" placeholder="Enter Job Role" 
              onChange={(e) =>  setJob_role(e.target.value)}/>
            </div>
            <div className="mb-2">
              <label htmlFor="companyDescription" className="form-label text-white">Company Description</label>
              <textarea className="form-control" id="companyDescription" rows="3" placeholder="Enter Company Description"
              onChange={(e) =>  setCompany_description(e.target.value)}></textarea>
            </div>
            <div className="mb-2">
              <label htmlFor="jobOpenings" className="form-label text-white">Job Openings</label>
              <input type="text" className="form-control" id="jobOpenings" placeholder="No. of Openings"
              onChange={(e) => setJob_openings(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
