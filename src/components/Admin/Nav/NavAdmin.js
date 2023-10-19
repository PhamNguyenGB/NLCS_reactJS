import React, { useState, useEffect } from 'react';
import './NavAdmin.scss'
import { NavLink, useLocation } from 'react-router-dom';


const NavAdmin = (props) => {
    const [isShow, setIsShow] = useState(true);
    let location = useLocation();
    useEffect(() => {
        if (location.pathname === '/home' || location.pathname === '/news' || location.pathname === 'about' ||
            location.pathname === '/admin' || location.pathname === '/' || location.pathname === '/login' ||
            location.pathname === '/register' || location.pathname === '/shoppingCart') {
            setIsShow(false);
        }
    }, []);

    return (
        <>
            {isShow === true &&
                <nav className="navbar navbar-expand-lg p-0">
                    <div className="container-fluid parent-header">
                        <div className="topnav">
                            <div className='container'>
                                <button className="navbar-toggler icon-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className='topnav-content2'>
                                    <div className="collapse navbar-collapse show-content-nav-mb" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink to="/admin/users" exact className='text-sm-dark'>Users</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/news" >News</NavLink>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <NavLink to="/contact" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Contact
                                                </NavLink>
                                                <ul className="dropdown-menu">
                                                    <li><NavLink className="dropdown-item text-dark" to="/action">Action</NavLink></li>
                                                    <li><NavLink className="dropdown-item text-dark" to="/abc">Another action</NavLink></li>
                                                    <li><NavLink className="dropdown-item text-dark" to="/xyz">Another action</NavLink></li>
                                                    <li><NavLink className="dropdown-item text-dark" to="/ew">Another action</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/about" >About</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <form className="d-flex d-lg-none d-block w-50 search-mb" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-dark" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div >
                </nav>
            }
        </>

    )
};

export default NavAdmin;