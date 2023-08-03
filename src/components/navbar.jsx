import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'
function Navbar(){

    return(
        <div className="nav">
            <nav className="navbar">
                <div className="img">
                    
                    <h1><Link to={'/'} className="link">Hello test</Link> </h1>
                </div>
                <div className="links">
                      <a href="#sec-2" className="linkstyle">About me</a>
            <Link to={'/Projects'} className="linkstyle">Projects</Link>
            <Link to={'/Roadmap'} className="linkstyle">Roadmap</Link>
                </div>
               
            </nav>
            

        </div>
    )


}export default Navbar;