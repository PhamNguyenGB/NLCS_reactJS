import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import { toast } from 'react-toastify';
import { createUser, updateUser } from '../../../services/userService';
import { createProduct } from '../../../services/productService';

const ModalUser = (props) => {

    const { action, dataModelUser } = props;

    const defaultUserData = {
        name: '',
        ingredients: '',
        objectOfUse: '',
        price: '',
        img: '',
        quantity: '',
        uses: '',
        preserve: '',
        pack: '',
        origin: '',
        productionSite: '',
        listProductId: '',
    }

    const validInputDefault = {
        name: true,
        ingredients: true,
        objectOfUse: true,
        price: true,
        img: true,
        quantity: true,
        uses: true,
        preserve: true,
        pack: true,
        origin: true,
        productionSite: true,
        listProductId: true,
    }

    const [productData, setProductData] = useState(defaultUserData);
    const [validInput, setValidInput] = useState(validInputDefault);

    let history = useHistory();

    const handleOnchangeInput = (value, name) => {
        let _productData = _.cloneDeep(productData);
        _productData[name] = value;
        setProductData(_productData);
    };

    const checkValidateInput = () => {
        //create new user
        if (action === 'UPDATE') {
            return true;
        }
        setValidInput(validInputDefault);
        let arr = ['name', 'ingredients', 'objectOfUse', 'uses', 'preserve', 'pack', 'origin', 'productionSite', 'price', 'quantity', 'img', 'listProductId'];
        let check = true;
        for (let i = 0; i < arr.length; i++) {
            if (!productData[arr[i]]) {
                let _validInput = _.cloneDeep(validInputDefault);
                _validInput[arr[i]] = false;

                setValidInput(_validInput);

                toast.error(`empty input ${arr[i]}`);
                check = false;
                break;
            }
        }
        return check;
    }

    const handleConfirmProduct = async () => {
        // create user
        let check = checkValidateInput();
        if (check === true) {
            let serverData = action === 'CREATE' ? await createProduct(productData) : await updateUser(productData);
            if (+serverData.EC === 0) {
                toast.success(serverData.EM);
                setProductData(defaultUserData);
                props.onHide();
            }
        }
    };

    const handleCloseModalUser = () => {
        props.onHide();
        setProductData(defaultUserData);
        setValidInput(validInputDefault);
    };

    useEffect(() => {
        if (action === 'UPDATE') {
            setProductData({ ...dataModelUser, groupId: dataModelUser.Group ? dataModelUser.Group.id : '' });
        }
    }, [dataModelUser]);

    return (
        <>
            <Modal size="lg" show={props.isShowModalUser} className='modal-user' onHide={() => handleCloseModalUser()} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span>{action === 'CREATE' ? 'Thêm mới sản phẩm' : 'Cập nhật sản phẩm'}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='content-body row '>
                        <div className='col-12 form-group'>
                            <label>Tên sản phẩm: </label>
                            <input
                                className={validInput.name ? 'form-control' : 'form-control is-invalid'}
                                type='text'
                                value={productData.name}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'name')}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Thành phần: </label>
                            <input
                                disabled={action === 'CREATE' ? false : true}
                                className={validInput.ingredients ? 'form-control' : 'form-control is-invalid'}
                                type='text'
                                value={productData.ingredients}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'ingredients')}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Đối tượng sử dụng: </label>
                            <input
                                className={validInput.objectOfUse ? 'form-control' : 'form-control is-invalid'}
                                type='text'
                                value={productData.objectOfUse}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'objectOfUse')}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Cách dùng: </label>
                            <input
                                disabled={action === 'CREATE' ? false : true}
                                className={validInput.uses ? 'form-control' : 'form-control is-invalid'}
                                type='text'
                                value={productData.uses}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'uses')}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Bảo quản: </label>
                            <input
                                className={validInput.preserve ? 'form-control' : 'form-control is-invalid'}
                                type='text'
                                value={productData.preserve}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'preserve')}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Đóng gói: </label>
                            <input
                                className={validInput.pack ? 'form-control' : 'form-control is-invalid'}
                                type='text'
                                value={productData.pack}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'pack')}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Xuất xứ thương hiệu: </label>
                            <input
                                className={validInput.origin ? 'form-control' : 'form-control is-invalid'}
                                type='text'
                                value={productData.origin}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'origin')}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Nơi sản xuất: </label>
                            <input
                                className={validInput.productionSite ? 'form-control' : 'form-control is-invalid'}
                                type='text'
                                value={productData.productionSite}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'productionSite')}
                            />
                        </div>
                        <div className='col-3 form-group'>
                            <label>Giá: </label>
                            <input
                                className={validInput.price ? 'form-control' : 'form-control is-invalid'}
                                type='text'
                                value={productData.price}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'price')}
                            />
                        </div>
                        <div className='col-3 form-group'>
                            <label>Số lượng hàng: </label>
                            <input
                                className={validInput.quantity ? 'form-control' : 'form-control is-invalid'}
                                type='text'
                                value={productData.quantity}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'quantity')}
                            />
                        </div>
                        <form className='col-3' enctype="multipart/form-data">
                            <div className=' form-group'>
                                <label>image:</label>
                                <input
                                    className={validInput.img ? 'form-control' : 'form-control is-invalid'}
                                    type='file'
                                    value={productData.img}
                                    onChange={(event) => handleOnchangeInput(event.target.value, 'img')}
                                />
                            </div>
                        </form>
                        <div className='col-3 form-group'>
                            <label>Loại sản phẩm:</label>
                            <select
                                className={validInput.listProductId ? 'form-select' : 'form-select is-invalid'}
                                aria-label=""
                                onChange={(event) => handleOnchangeInput(event.target.value, 'listProductId')}
                                disabled={action === 'CREATE' ? false : true}
                                value={productData.listProductId}
                            >
                                <option defaultValue value=''>Open this select menu</option>
                                <option value="1">Customer</option>
                                <option value="2">Admin</option>
                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseModalUser()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleConfirmProduct()}>
                        {action === "CREATE" ? "Save" : "Update"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default ModalUser;