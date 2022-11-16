import React from 'react';
import './Product.css';

const Product = () => {

    return (
        <div>
            <div className='product-dev'>
                <img className='img-fluid' src='https://www.mobiledokan.com/wp-content/uploads/2022/10/Samsung-Galaxy-A04s.jpg' alt='mobile' />
                <div className='px-3'>
                    <h6 className=''>Samsung Galaxy A04s</h6>
                    <p className='m-0 fw-bold'>Brand: Samsung</p>
                    <small>
                        <p className='m-0 fw-bold'>Price: ৳ 3500</p>
                        <p className='m-0'>Available: 100 Pics</p>
                        <p className='m-0'>Network: 2G, 3G, 4G</p>
                        <p className='m-0'>SIM: Dual Nano SIM</p>
                        <p className='m-0'>Size: 6.5 inches</p>
                    </small>
                </div>
                <div className='add-cart-btn-dev'>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;