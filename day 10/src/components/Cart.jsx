// import React from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import {delItem} from '../redux/actions/index'
// import { NavLink } from 'react-router-dom'


// const Cart = () => {
//     const state = useSelector((state)=> state.addItem)
//     const dispatch = useDispatch()

//     const handleClose = (item) => {
//         dispatch(delItem(item))
//     }

//     const cartItems = (cartItem) => {
//         return(
//             <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
//                 <div className="container py-4">
//                     <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
//                     <div className="row justify-content-center">
//                         <div className="col-md-4">
//                             <img src={cartItem.img} alt={cartItem.title} height="200px" width="180px" />
//                         </div>
//                         <div className="col-md-4">
//                             <h3>{cartItem.title}</h3>
//                             <p className="lead fw-bold">₹{cartItem.price}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     const emptyCart = () => {
//         return (
//             <div className="px-4 my-5 bg-light rounded-3 py-5">
//                 <div className="container py-4">
//                     <div className="row">
//                         <h3>Your Cart is Empty</h3>
//                     </div>
//                     </div>
//                 </div>
//         );
//     }

//     const button = () => {
//         return(
//             <div className="container">
//                 <div className="row">
//                     <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <>
//             {state?.length === 0 && emptyCart()}
//             {state?.length !== 0 && state.map(cartItems)}
//             {state?.length !== 0 && button()}
//         </>
//     )
// }

// export default Cart

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
//import { Footer } from './../../components/Footer';
import { useNavigate } from 'react-router-dom';
// import { PlusCircle, MinusCircle, Trash } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import CartSVG from '../assets/ico/cart.webp';
import { selectCart } from '../redux/cartSlice';
import Checkout from './Checkout';

const Cart = () => { 
  const cartItems = useSelector(state=>state.cart.items);
  console.log(cartItems);
  console.log(cartItems.product);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId, itemName) => {

    dispatch(removeFromCart(itemId));

    toast.success(`${itemName} removed from cart !`, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };


  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };


  const totalAmount = cartItems?.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className='main'>
      {/* <Navbar /> */}
      {cartItems?.length === 0 ? (
        <div className='cart-empty shadow card'>
          <img src={CartSVG} alt="login-img" className='auth-svg' />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div>
          <div className='cart-title-container'>
            <h1 className='cart-title primary'>Your Cart</h1>
            <button className='cart-checkout-btn shadow' onClick={handleCheckout}>Checkout </button>
          </div>
          <div className='shadow bg-white cart-table-container'>
            <table className='cart-data-table'>
              <thead className='cart-data-thead shadow'>
                <tr>
                  <th>
                    Product
                  </th>
                  <th>
                    Product Name
                  </th>
                  <th>
                    Price
                  </th>
                  <th>
                    Order Quantity
                  </th>
                  <th>
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((product) => (
                  <tr key={product.pid}>
                    <td> <img src={product.img} className='mini-product-img' /></td>
                    <td>{product.title}</td>
                    <td>₹ {product.price}</td>
                    <td>
                      <span className='d-flex-r'>
                        <button className='  bg-white shadow' onClick={() => handleDecreaseQuantity(product.pid)}>  </button>
                        <h3> {product.quantity}</h3>
                        <button className='data-btn-mini bg-white shadow' onClick={() => handleIncreaseQuantity(product.pid)}> </button>
                      </span>
                    </td>
                    <td>    
                      <button className='data-btn-mini bg-white shadow' onClick={() => handleRemoveItem(product.pid, product.productname)}> </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className='cart-total card'>Total: ₹{totalAmount}</p>
        </div>
      )}


      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
     {/* <Footer /> */}
    </div>
  );
};  

export default  Cart ;