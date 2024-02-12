import React from 'react'
import { Routes, Route } from 'react-router-dom';
import User from './ProfileManagement/User';
import Create from './ProfileManagement/Create';
import Update from './ProfileManagement/Update';


export default function ProfileManagement() {
  return (
    <>
      <h1 className='text-center mt-2'>Profile Management</h1>
      <Routes>
        <Route path='/' element={<User/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/update/:id' element={<Update/>} />
      </Routes>
    </>
  )
}
