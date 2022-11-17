import React from 'react';
import './Home.css';
import banner from '../../../Assets/Img/banner/Cooler-Master-ARGB-Gaming-Casing-Slider_1662897193.webp';
import banner2 from '../../../Assets/Img/banner/Hp-1-year-Bonus-Warranty-Slider_1662897037.webp';
import banner3 from '../../../Assets/Img/banner/Huawei-Laptop-Offer-Slider_1662964959.webp';
import UseProducts from '../../../Hooks/UseProducts';
import Product from '../../Products/Product/Product';

const Home = () => {
    const [products, setProducts] = UseProducts([]);

    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={banner} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={banner2} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={banner3} alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div className='pt-5 pb-1'><h1 className='text-center my-5 fw-bold'>Porducts</h1></div>
            <div className='container-xl my-5'>
                <div className='products-dev'>
                    {
                        products.slice(0, 10).map(product => <Product key={product._id} product={product} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;