import React from 'react';
import './nav.scss'
import { NavLink, useHistory } from 'react-router-dom';


const Nav = (props) => {
    let history = useHistory();

    const handleClickShoppingCarrt = () => {
        history.push('/shoppingCart');
    };

    const handleClickImageTextLogo = () => {
        history.push('/');
    };


    return (
        <>
            {/* <div className="topnav">
                <div className='container'>
                    <div className='topnav-content1'>
                        <div className='image-logo' onClick={() => handleClickImageTextLogo()}></div>
                        <div className='text-logo' onClick={() => handleClickImageTextLogo()}>FF function food</div>
                        <div className='search'>
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

                    <div className='topnav-content2'>
                        <NavLink to="/" exact >Home</NavLink>
                        <NavLink to="/news" >News</NavLink>
                        <NavLink to="/contact" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Contact</NavLink>
                        <NavLink to="/about" >About</NavLink>
                    </div>
                </div>
            </div > */}


            <nav className="navbar navbar-expand-lg">
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
                                <div class="collapse navbar-collapse show-content-nav-mb" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <NavLink to="/" exact >Home</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink to="/news" >News</NavLink>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <NavLink to="/contact" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Contact
                                            </NavLink>
                                            <ul class="dropdown-menu">
                                                <li><NavLink class="dropdown-item text-dark" to="/">Action</NavLink></li>
                                                <li><NavLink class="dropdown-item text-dark" to="/">Another action</NavLink></li>
                                                <li><NavLink class="dropdown-item text-dark" to="/">Another action</NavLink></li>
                                                <li><NavLink class="dropdown-item text-dark" to="/">Another action</NavLink></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink to="/about" >About</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <form class="d-flex d-lg-none d-block m-5 w-50" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </nav>
        </>

    )
};

export default Nav;