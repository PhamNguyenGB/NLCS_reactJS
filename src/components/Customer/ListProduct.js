import { useEffect, useState } from "react";
import { getListProduct } from '../../services/customerService';
import { NavLink, useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const ListProduct = (props) => {
    const [listProduct, setListProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentLimit, setCurrentLimit] = useState(20);
    const [totalPages, setTotalPages] = useState(0);

    const { categoryName } = useParams();

    let history = useHistory();

    useEffect(() => {
        fetchProducts();
    }, [currentPage, categoryName]);

    const fetchProducts = async () => {
        let response = await getListProduct(categoryName, currentPage, currentLimit);
        if (response && response.EC === 0) {
            setTotalPages(response.DT.totalPages);
            setListProduct(response.DT[0].Products);
        }
    };


    const handlePageClick = async (event) => {
        setCurrentPage(+event.selected + 1);
    };

    const handleOnclick = async (data) => {
        history.push(`/product/${data.name}/${data.id}`);
    };

    return (
        <>
            <div className='container position-relative'>
                <div className='products row mt-5'>
                    <h3>{categoryName}</h3>
                    {listProduct && listProduct.length > 0 ?
                        <>
                            {listProduct.map((item, index) => {
                                return (

                                    <div className="card card-product col-3 m-2" key={`product-${index}`}>
                                        <img role='button' src={`http://localhost:8888${item.img}`} alt="..." onClick={() => handleOnclick(item)} />
                                        <div className="card-body mt-5">
                                            <h6 className="card-title card-title-product" role='button' onClick={() => handleOnclick(item)}>{item.name}</h6>
                                            <h4 className="card-text mt-5 text-primary" role='button' onClick={() => handleOnclick(item)}>{item.price} vnđ</h4>
                                            <a href="#" className="btn btn-primary mt-3" onClick={() => handleOnclick(item)}>Mua ngay</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                        :
                        <>
                            Không tìm thấy loại sản phẩm này!
                        </>

                    }
                </div>

                {totalPages > 1 &&
                    <div className="user-footer position-absolute end-0 mt-5">
                        <ReactPaginate
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={totalPages}
                            previousLabel="< previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                }

            </div>
        </>
    )
};

export default ListProduct;