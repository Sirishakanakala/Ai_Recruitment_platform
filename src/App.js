import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import SideMenu from './components/SideMenu';
import Home from './Pages/Home';
import ProfileManagement from './Pages/ProfileManagement';
import ChatInterface from './Pages/ChatInterface';
import RecruitmentProcess from './Pages/RecruitmentProcess';
import Login from './Pages/Login';

function App() {

  return (
       <Router>
         <SideMenu>
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<ProfileManagement/>} />
          <Route path='/chat' element={<ChatInterface/>} />
          <Route path='/process' element={<RecruitmentProcess/>} />
          <Route path='/login' element={<Login/>} />
         </Routes>
         </SideMenu>
       </Router>
  );
}

export default App;
