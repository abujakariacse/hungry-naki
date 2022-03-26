// Font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Meal.css'
// Single Meal/Card item
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
            <button className='addtocart-btn' onClick={()=>{addToCart(meal)}}>Add to Cart <FontAwesomeIcon  icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Meal;