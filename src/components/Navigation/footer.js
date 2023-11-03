import './footer.scss';
import { NavLink, useHistory } from 'react-router-dom';

const Footer = (props) => {
    return (
        <>
            <div className="footer-container">
                <div className='top-footer'></div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 box-footer'>
                            <h5 className='text-center'>Về chúng tôi</h5>
                            <NavLink to="/about">Giới thiệu</NavLink>
                            <NavLink to="/">Chính sách bảo mật</NavLink>
                            <NavLink to="/">Chính sách hàng hóa</NavLink>
                            <NavLink to="/">Chính sách giao hàng</NavLink>
                            <NavLink to="/">Chương trình khách hàng thân thiết</NavLink>
                            <NavLink to="/">Tuyển dụng</NavLink>
                        </div>
                        <div className='col-3 box-footer'>
                            <h5 className='text-center'>Thực phẩm chức năng</h5>
                            <NavLink to="/">TPCN nhóm dạ dày</NavLink>
                            <NavLink to="/">TPCN nhóm tim mạch</NavLink>
                            <NavLink to="/">TPCN nhóm hô hấp</NavLink>
                            <NavLink to="/">TPCN giảm cân</NavLink>
                            <NavLink to="/">TPCN cho gan</NavLink>
                            <NavLink to="/">TPCN chăm sóc sắc đẹp</NavLink>

                        </div>
                        <div className='col-3 box-footer'>
                            <h5 className='text-center'>Tổng đài CSKH</h5>
                            <NavLink to="/">Hỗ trợ đặt hàng và khiếu nại 18006821</NavLink>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className='col-3 box-footer'>
                            <h5 className='text-center'>Theo dõi chúng tôi trên</h5>
                            <div className='icon-footer'><i className="facebook fa fab fa-facebook-f"></i> Facebook</div>
                            <div className='icon-footer'><i className="youtube fa fab fa-youtube"></i> Youtube</div>
                            <div className='icon-footer'><i className="google fa fab fa-google"></i> Google</div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;