import React, { useState } from 'react';
import { FaHome, FaBriefcase, FaComment, FaUserFriends, FaSignInAlt, FaBars, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const SideMenu = ({ children }) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <FaBriefcase />
    },
    {
      path: "/chat",
      name: "Chatbot",
      icon: <FaComment />
    },
    {
      path: "/process",
      name: "Recruitment Process",
      icon: <FaUserFriends />
    },
    // {
    //     path:"/login",
    //     name:"Login",
    //     icon:<FaSignInAlt/>
    // }
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
        <img src="/images/logo.png" alt="Logo" style={{ display: isOpen ? "block" : "none", width: "50px", height: "50px" }} />
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
          </NavLink>
        ))}
        <div className="bottom_section">
          {isAuthenticated && (
            <div className="user_info">
              <FaUser/><span style={{display: isOpen ? "block" : "none"}}>{user.name}</span>
            </div>
          )}
          <div className="auth_buttons">
            {isAuthenticated ? (
              <button onClick={() => logout({ returnTo: window.location.origin })}>
                <FaSignInAlt /> <span  style={{display: isOpen ? "block" : "none"}}>Log Out</span>
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>
               <FaSignInAlt/> <span  style={{display: isOpen ? "block" : "none"}}>Log In</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideMenu;

// import React , {useState} from 'react';
// import { FaHome, FaBriefcase, FaComment, FaUserFriends, FaSignInAlt , FaBars, FaUser} from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";

// const SideMenu = ({children}) => {
    
//   const { loginWithRedirect , isAuthenticated , logout ,user} = useAuth0();

//   const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/",
//             name:"Home",
//             icon:<FaHome/>
//         },
//         {
//             path:"/profile",
//             name:"Profile",
//             icon:<FaBriefcase/>
//         },
//         {
//             path:"/chat",
//             name:"Chatbot",
//             icon:<FaComment/>
//         },
//         {
//             path:"/process",
//             name:"Recruitment Process",
//             icon:<FaUserFriends/>
//         },
//         // {
//         //     path:"/login",
//         //     name:"Login",
//         //     icon:<FaSignInAlt/>
//         // }
//     ]
//   return (
    
//        <div className="container">
//            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//                <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }

//              {
//                 isAuthenticated && 
//                 <p style={{
//                     border:"none", 
//                     backgroundColor:"black", 
//                     color:"white", fontSize: "1.5rem", 
//                     marginTop: "3rem",
//                     margin: "auto",
//                     marginLeft: "1rem",
//                     }}><FaUser/>
//                 <span 
//                         style={{display: isOpen ? "block" : "none"}}>
//                         {user.name}</span>
//                 </p>
//              }
//              {
//                 isAuthenticated ?
//                 (
//                     <button onClick={() => 
//                         logout({ logoutParams: { returnTo: window.location.origin } 
//                         })} style={{
//                             border:"none", 
//                             backgroundColor:"black", 
//                             color:"white", fontSize: "1.5rem", 
//                             marginTop: "3rem",
//                             margin: "auto",
//                             marginLeft: "1rem",
//                             }}>
//                             <FaSignInAlt/>
//                             <span style={{display: isOpen ? "block" : "none"}}>Log Out</span>
//                      </button>
//                 )  : (
//                     <button onClick={() => loginWithRedirect()} style={{
//                         border:"none", 
//                         backgroundColor:"black", 
//                         color:"white", fontSize: "1.5rem", 
//                         marginTop: "3rem",
//                         margin: "auto",
//                         marginLeft: "1rem",
//                         }}> <FaSignInAlt/><span 
//                         style={{display: isOpen ? "block" : "none"}}>
//                         Log In</span>
//                         </button>
//                 )
//              }
              
//            </div>
//            <main>{children}</main>
//         </div>
  
//   );
// };

// export default SideMenu;
