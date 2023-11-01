import './Cart.scss';

const Cart = (props) => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-9 cart-item">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sản phẩm</th>
                                    <th scope="col"></th>
                                    <th scope="col">Đơn giá</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Thành tiền</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-3 total-cost">
                        <h4 className='mt-2'>Tổng tiền</h4>
                        <div className='pay'>
                            <p>Tạm tính</p>
                            <span>22000 đ</span>
                        </div>
                        <div className='order'>
                            Đặt hàng
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Cart;