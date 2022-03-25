import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cartinfo} = props
    
    return (
            <div className='cart-info'>
                <h4>Name: {cartinfo.name}</h4>
            </div>
    );
};

export default Cart;