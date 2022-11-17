import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseProductDetails from '../../Hooks/UsePorductDetails';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productsId } = useParams();
    const [products] = UseProductDetails(productsId);
    const navigate = useNavigate();

      const navigateToBuyNow = id =>{
         navigate(`/add-to-cart/${id}`);
     } 

    return (
        <div className='container'>
            <div className='products-details my-5'>
                <div className='products-details-dev'>
                    <h2 className='text-center mt-3 fw-bold'>{products.name}</h2>
                    <h4 className='text-center mt-3 fw-bold'>Price in Bangladesh</h4>
                    <h6 className='text-center mt-4'><span style={{ padding: '8px', border: '1px solid rgb(201, 201, 201)' }}>Official </span> <span style={{ padding: '8px', border: '1px solid rgb(201, 201, 201)' }}>{products.price}</span></h6>
                    <img className='img-fluid mt-4' src={products.img} />
                    <h4 className='text-center mt-3 fw-bold'>{products.name} Full Specifications</h4>

                    <table class="table table-striped mb-5">
                        <tbody>
                            <tr>
                                <td>First Release</td>
                                <td>{products.first_release}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Colors</td>
                                <td>{products.color}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Network</td>
                                <td>{products.network}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>WLAN</td>
                                <td>{products.WLAN}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>SIM</td>
                                <td>{products.SIM}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>GPS</td>
                                <td>{products.GPS}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>USB</td>
                                <td>{products.USB}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>USB Type-C</td>
                                <td>{products.USB_Type_C}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>OTG</td>
                                <td>{products.OTG}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Bluetooth</td>
                                <td>{products.bluetooth}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Size</td>
                                <td>{products.size}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Resolution</td>
                                <td>{products.resolution}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Back Camera</td>
                                <td>{products.back_camera}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Front Camera</td>
                                <td>{products.front_camera}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{products.weight}</td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={() => navigateToBuyNow(products._id)}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;