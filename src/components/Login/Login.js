import React, { useState } from 'react';
import './Login.scss'
import { NavLink, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/userService';


const Login = (props) => {

    let history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const defaultObjInput = {
        isValidUsername: true,
        isValidPassword: true,
    }
    const [objCheckInput, setObjCheckInput] = useState(defaultObjInput);

    const handleLogin = async () => {
        setObjCheckInput(defaultObjInput);
        if (!username) {
            toast.error("Vui lòng nhập vào tên đăng nhập");
            setObjCheckInput({ ...defaultObjInput, isValidUsername: false });
            return;
        }
        if (!password) {
            toast.error("Vui lòng nhập vào mật khẩu");
            setObjCheckInput({ ...defaultObjInput, isValidPassword: false });
            return;
        }
        let response = await loginUser(username, password);
        let serverData = response.data;
        if (+serverData.EC === 0) {
            toast.success(serverData.EM);
            history.push("/");
        } else {
            toast.error(serverData.EM);
        }
    };


    return (
        <div className='login-container'>
            <div className='container'>
                <div className='row px-3 px-sm-0 '>
                    <div className='col-3'></div>
                    <div className='col-9 box-login'>
                        <h1>Đăng nhập</h1>

                        <div className='content col-10 col-sm-7 d-flex flex-column gap-3 py-3'>
                            <label><b>Tên đăng nhập</b></label>
                            <input
                                type='text'
                                className={objCheckInput.isValidUsername ? 'form-control' : 'form-control is-invalid'}
                                placeholder='username'
                                value={username}
                                onChange={(event) => { setUsername(event.target.value) }}
                            />
                            <label><b>Mật khẩu:</b></label>
                            <input
                                type='password'
                                className={objCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'}
                                placeholder='Password'
                                value={password}
                                onChange={(event) => { setPassword(event.target.value) }}
                            />
                            <button className='btn btn-secondary' onClick={() => handleLogin()}>Đăng nhập</button>
                            <span className='text-center'>Chưa có tài khoản?<NavLink to='/register'>Đăng ký ngay.</NavLink></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;