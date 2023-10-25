import React, { useState, useEffect } from 'react';
import './nav.scss'
import { NavLink, useHistory, useLocation } from 'react-router-dom';


const Nav = (props) => {
    const [isShow, setIsShow] = useState(true);
    let location = useLocation();
    let path = ['/admin', '/admin/users', '/admin/products'];
    useEffect(() => {
        for (let i = 0; i < path.length; i++) {
            if (location.pathname === path[i]) {
                setIsShow(false);
            }
        }
    }, []);

    let history = useHistory();

    const handleClickShoppingCarrt = () => {
        history.push('/shoppingCart');
    };

    const handleClickImageTextLogo = () => {
        history.push('/');
    };


    return (
        <>
            {isShow === true &&
                <nav className="navbar navbar-expand-lg p-0">
                    <div className="container-fluid parent-header">
                        <div className="topnav">
                            <div className='container'>
                                <div className='topnav-content1'>
                                    <div className='image-logo' onClick={() => handleClickImageTextLogo()}></div>
                                    <div className='text-logo' onClick={() => handleClickImageTextLogo()}>FF function food</div>
                                    <div className='search d-none d-lg-block'>
                                        <input className='input-search' type='text' placeholder='Tìm kiếm sản phẩm...' />
                                        <i className="fa fas fa-search search-icon"></i>
                                    </div>
                                    <div className='cart' onClick={() => handleClickShoppingCarrt()}>
                                        <i className="shopping-icon fa fas fa-shopping-cart"></i>
                                        <span className='shopping-cart'>Giỏ hàng</span>
                                    </div>
                                    <div className='login-register'>
                                        <NavLink to="/login" exact className=' login'>Đăng nhập</NavLink>
                                        <NavLink to="/register" exact className='register'>Đăng ký</NavLink>
                                    </div>
                                </div>


                                <button className="navbar-toggler icon-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className='topnav-content2'>
                                    <div className="collapse navbar-collapse show-content-nav-mb" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink to="/" exact className='text-sm-dark'>Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/news" >News</NavLink>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <NavLink to="/contact" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Contact
                                                </NavLink>
                                                <ul className="dropdown-menu">
                                                    <li><NavLink className="dropdown-item " to="/action">Action</NavLink></li>
                                                    <li><NavLink className="dropdown-item " to="/abc">Another action</NavLink></li>
                                                    <li><NavLink className="dropdown-item " to="/xyz">Another action</NavLink></li>
                                                    <li><NavLink className="dropdown-item " to="/ew">Another action</NavLink></li>
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

export default Nav;