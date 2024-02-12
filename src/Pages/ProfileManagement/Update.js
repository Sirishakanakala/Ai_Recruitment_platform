import React, { useState,useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";

export default function Update() {
  const { id } = useParams()

  const [company_name, setCompany_name] = useState();
  const [contact_details, setContact_details] = useState();
  const [industry, setIndustry] = useState();
  const [job_role, setJob_role] = useState();
  const [company_description, setCompany_description] = useState();
  const [job_openings, setJob_openings] = useState();

  const navigate = useNavigate()
  
  useEffect(() => {
      axios.get('http://localhost:3001/profile/getUser/' + id)
      .then(result => {
         console.log("data user:",result)
         setCompany_name(result.data.company_name)
         setContact_details(result.data.contact_details);
         setIndustry(result.data.industry);
         setJob_role(result.data.job_role);
         setCompany_description(result.data.company_description);
         setJob_openings(result.data.job_openings);
      })
      .catch(err => console.log(err));
  }, [id])

  const Update = (e) =>{
    e.preventDefault();
     axios.put("http://localhost:3001/profile/update/" + id, 
     {company_name, contact_details, industry, job_role, company_description, job_openings})
     .then(result => {
        console.log("Updated result:",result)
        navigate('/profile')
     })
     .catch(err => console.log(err))
  }

  return (
    <>
      <div className="container mt-4 d-flex justify-content-center">
       <div
          className="card"
          style={{ width: '500px', backgroundColor: '#1a1224', borderRadius:'1rem', padding: '1rem' }}
        >
          <h3 className="mt-4 text-white text-center">Update Profile</h3>
          <form onSubmit={Update}>
            <div className="mb-2">
              <label htmlFor="companyName" className="form-label text-white">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                placeholder="Enter Company Name"
                value={company_name}
                onChange={(e) => setCompany_name(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="contactDetails" className="form-label text-white">
                Contact Details
              </label>
              <input
                type="text"
                className="form-control"
                id="contactDetails"
                placeholder="Enter Contact Details"
                value={contact_details}
                onChange={(e) => setContact_details(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="industry" className="form-label text-white">
                Industry
              </label>
              <input type="text" className="form-control" id="industry" placeholder="Enter Industry" 
               value={industry} onChange={(e) =>  setIndustry(e.target.value)}/>
            </div>
            <div className="mb-2">
              <label htmlFor="jobRole" className="form-label text-white">  
               Job Role
              </label>
              <input  type="text" className="form-control" id="jobRole"  placeholder="Enter Job Role"
               value={job_role} onChange={(e) =>  setJob_role(e.target.value)}/>
            </div>
            <div className="mb-2">
              <label  htmlFor="companyDescription" className="form-label text-white">
                Company Description
              </label>
              <textarea className="form-control" id="companyDescription" rows="3" placeholder="Enter Company Description" 
               value={company_description}  onChange={(e) =>  setCompany_description(e.target.value)}></textarea>
            </div>
            <div className="mb-2">
              <label htmlFor="jobOpenings" className="form-label text-white">
                Job Openings
              </label>
              <input type="text" className="form-control" id="jobOpenings"  placeholder="No. of Openings" 
               value={job_openings}  onChange={(e) => setJob_openings(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
