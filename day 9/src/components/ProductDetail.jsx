import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    {/* Now we need a product id which is pass from the product page. */}
    const proid = useParams();
    const proDetail = DATA.filter(x=>x.pid === proid.pid)
    console.log(proid);
    const id = parseInt(proid.id);
    const product  = DATA[id];
    

    // We need to store useDispatch in a variable
    const dispatch = useDispatch()
console.log(product);
    const handleCart = () => {
        console.log(product);
        if (cartBtn === "Add to Cart") {
            dispatch(addToCart(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product?.img} alt={product?.title}height="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{product?.title}</h1>
                    <hr />
                    <h2 className="my-4">₹{product?.price}</h2>
                    <p className="lead">{product?.desc}</p>
                    <button onClick={()=>handleCart()} className="btn btn-outline-primary my-5">{cartBtn}</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail