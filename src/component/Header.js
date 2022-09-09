import React from 'react'
import {Link} from "react-router-dom";


function Header() {

    return (
        <>
            <div className='container nav_bg'>
                <div className='row'>
                    <div className='col-lg-11 max-auto'>

                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid">
                                <Link to="/" className="navbar-brand" >DIGITAL TECH</Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" activeClassName="menu_active" className="nav-link active" aria-current="page">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" activeClassName="menu_active" className="nav-link" aria-current="page">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/service" activeClassName="menu_active" className="nav-link" aria-current="page">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" activeClassName="menu_active" className="nav-link" aria-current="page">Faq's</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" activeClassName="menu_active" className="nav-link" aria-current="page">Contact Us</Link>
                                    </li>
                                </ul>
                                </div>
                                
                            </div>
                        </nav>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Header