import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { useHistory } from 'react-router-dom';


const Header = () => {
    let history = useHistory();

   const handleClick = () =>{

    history.push("/appointment");
    
   }

    return (
        <div className="container header-container">
            <div className="header">
                <nav>
                <Link to="/">
                     <span>Home</span> 
                </Link>
                <Link to="/dashboard">
                     <span>Dashboard</span> 
                </Link>
                <Link to="/about">
                     <span>About</span> 
                </Link>
                <Link to="/dashboard">
                     <span>Contact US</span> 
                </Link>
                <Link to="/blog">
                     <span>Blog</span> 
                </Link>
                </nav>
            </div>
            <div className="banner">
            <h2>Your New Smile </h2>
            <h2>Starts Here</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit deserunt earum expedita rem repellendus?</p>
            <button type="button" onClick={handleClick}>Get Appointment</button>

            </div>

            
            
        </div>
    );
};

export default Header;