import React from 'react';
import './Login.scss'
import { NavLink } from 'react-router-dom';

const Login = (props) => {
    return (
        <div className='login-container'>
            <div className='container'>
                <div className='row px-3 px-sm-0 '>
                    <div className='col-3'></div>
                    <div className='col-9 box-login'>
                        <h1>Đăng nhập</h1>

                        <div className='content col-10 col-sm-7 d-flex flex-column gap-3 py-3'>
                            <label><b>Tên đăng nhập</b></label>
                            <input type='text' className='form-control' placeholder='username' />
                            <label><b>Mật khẩu:</b></label>
                            <input type='password' className='form-control' placeholder='Password' />
                            <button className='btn btn-secondary'>Đăng nhập</button>
                            <span className='text-center'>Chưa có tài khoản?<NavLink to='/register'>Đăng ký ngay.</NavLink></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;