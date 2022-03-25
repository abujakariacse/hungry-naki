import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const {meal,addToCart} = props;
    const {id,image,name,price} = meal ;
    return (
        <div className='meal'>
            <img className='food-image' src={image}alt="" />
            <div className='food-info'>
            <h4>Id: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>Price: {price}</h4>
            </div>
            <button onClick={()=>{addToCart(meal)}}>Add to Cart</button>
        </div>
    );
};

export default Meal;