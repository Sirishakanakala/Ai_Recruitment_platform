import React from 'react';

export default function Users() {
  const users = ([
    {
      Company_Name: 'Amazon',
      Contact_Details: '1234567890',
      Industry: 'IT Industry',
      Job_role: 'Software Developer',
      Company_Description: 'We are recruiting',
      Job_Openings: '10'
    }
  ]);

  return (
    <> 
     
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col">
            <h3 className="mt-3">Company Details</h3>
            <table className="table table-bordered table-center text-white mt-5" style={{
               backgroundColor: 'rgba(25, 55, 55, 0.1)',
               alignContent: 'center',
               border: 'white',
            }}>
              <thead style={{color: "white"}}>
                <tr>
                  <th>Company Name</th>
                  <th>Contact Details</th>
                  <th>Industry</th>
                  <th>Job Role</th>
                  <th>Company Description</th>
                  <th>Job Openings</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody  style={{color: "white"}}>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.Company_Name}</td>
                    <td>{user.Contact_Details}</td>
                    <td>{user.Industry}</td>
                    <td>{user.Job_role}</td>
                    <td>{user.Company_Description}</td>
                    <td>{user.Job_Openings}</td>
                    <td>
                      <button style={{
                        margin: '0.5rem',
                        padding: '1rem',
                        justifyContent:'space-around',
                        borderRadius: "1rem",
                        backgroundColor: 'whitesmoke',
                        fontWeight: '500',
                        border: 'none'
                      }}>Edit</button> 
                      <button style={{
                        margin: '0.5remrem',
                        padding: '1rem',
                        justifyContent:'space-around',
                        borderRadius: "1rem",
                        backgroundColor: 'whitesmoke',
                        fontWeight: '500',
                        border: 'none'
                      }}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
