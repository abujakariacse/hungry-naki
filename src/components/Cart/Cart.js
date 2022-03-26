import React from 'react';
import './Cart.css'
// Shopping Cart
const Cart = (props) => {
    const {cart,random,chooseAgain} = props;
    
    
    return (
            <div>
                <div className='info'>
                    {
                        cart.map(meal=><h4 key={meal.id}>{meal.name}</h4>)
                     }
            
                </div>
                <button onClick={random} className='choose-btn'>Choose 1 for me</button><br />
                <button onClick={chooseAgain} className='choose-again'>Choose Again</button>
            </div>
            
    );
};

export default Cart;