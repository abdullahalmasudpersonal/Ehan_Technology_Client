import React from 'react';
import Product from '../Product/Product';
import './Products.css';
import UseProducts from '../../../Hooks/UseProducts';
const Products = () => {
    const [products, setProducts] = UseProducts([]);

    return (
        <div className='container-xl my-5'>
            <div className='products-dev'>
                {
                    products.map(product => <Product key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;