import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {_id, name, img, price, brand, available, network} = product;
    const navigate = useNavigate();

    const navigateToDetails = _id =>{
        navigate(`/products/${_id}`);
    }

    return (
        <div>
            <div className='product-dev'>
                <img className='img-fluid' src={img} alt='mobile' />
                <div className='px-3'>
                    <h6 className=''>{name}</h6>
                    <p className='m-0 fw-bold'>Brand: {brand}</p>
                    <small>
                        <p className='m-0 fw-bold'>Price: {price} ৳</p>
                        <p className='m-0'>Available: {available} Pics</p>
                        <p className='m-0'>Network: {network}</p>
                        <p className='m-0'>SIM: Dual Nano SIM</p>
                        <p className='m-0'>Size: 6.5 inches</p>
                    </small>
                </div>
                <div onClick={ () => navigateToDetails(_id)} className='add-cart-btn-dev'>
                    <button>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;