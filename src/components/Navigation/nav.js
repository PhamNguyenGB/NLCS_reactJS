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
            <div className="topnav">
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
                        <NavLink to="/contact" >Contact</NavLink>
                        <NavLink to="/about" >About</NavLink>
                    </div>
                </div>
            </div >

        </>

    )
};

export default Nav;