import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div>
            <h1>Total Order: {props.cart.length}</h1>
            
        </div>
    );
};

export default Cart;