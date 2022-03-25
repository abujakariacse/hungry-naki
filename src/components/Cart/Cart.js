import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)
    
    return (
            <div>
                <div className='info'>
                    <img className='cart-img' src={cart.image} alt="" />
                    <h4 className='name'>{cart.name}</h4>
                </div>
            </div>
            
    );
};

export default Cart;