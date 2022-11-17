import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Add product')
                e.target.reset();
            })
    };

    return (
        <div class="col">
            <div class="card border-0 profile-dev">
                <div className='pt-4 ps-4'>
                    <h4 className='fw-bold side-header'>Add Product</h4>
                </div>
                <hr />
                <div class="card-body pt-2 pb-4 ps-4 pr-4 ">
                    <div className='addreview-dev'>
                        <h5 className='text-center pt-3 pb-2'>Add Product</h5>
                        <form className='d-flex flex-column px-3 pb-4 review-form'
                            onSubmit={handleSubmit(onSubmit)}>

                            <input className='mb-2' placeholder='Name' type='text' {...register("name", { required: true })} />

                            <input className='mb-2' placeholder='Brand' type='text' {...register("brand", {required: true})} />

                            <input className='mb-2' placeholder='Price' type="text" {...register("price", {required: true})} />

                            <input className='mb-2' placeholder='Color' type="text" {...register("color", {required: true})} />

                            <input className='mb-2' placeholder='Available Quantity' type='text' {...register("available", { required: true })} />

                            <input className='mb-2' placeholder='first Release' type='text' {...register("first_release", { required: true })} />

                            <input className='mb-2' placeholder='Network' type='text' {...register("network", { required: true })} />

                            <input className='mb-2' placeholder='GPS' type='text' {...register("GPS", { required: true })} />

                            <input className='mb-2' placeholder='USB' type='text' {...register("USB", { required: true })} />

                            <input className='mb-2' placeholder='USB Type C' type='text' {...register("USB_Type_C", { required: true })} />

                            <input className='mb-2' placeholder='OTG' type='text' {...register("OTG", { required: true })} />

                            <input className='mb-2' placeholder='SIM' type='text' {...register("SIM", { required: true })} />

                            <input className='mb-2' placeholder='WLAN' type='text' {...register("WLAN", { required: true })} />

                            <input className='mb-2' placeholder='Bluetooth' type='text' {...register("bluetooth", { required: true })} />

                            <input className='mb-2' placeholder='Size' type='text' {...register("size", { required: true })} />


                            <input className='mb-2' placeholder='Resolution' type='text' {...register("resolution", { required: true })} />

                            <input className='mb-2' placeholder='Back Camera' type='text' {...register("back_camera", { required: true })} />

                            <input className='mb-2' placeholder='Front Camera' type='text' {...register("front_camera", { required: true })} />

                            <input className='mb-2' placeholder='Weight' type='text' {...register("weight", { required: true })} />

                            <input className='mb-2' placeholder='Product Photo URL' type='text' {...register("img", { required: true })} />

                            <input type="submit" value='Add Product' className='add-review-submit fw-bold' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;