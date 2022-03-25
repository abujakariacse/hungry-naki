import React from 'react';
import './Meal.css'

const Meal = (props) => {
    // console.log(props)
    const {id,image,name,price} = props.meal ;
    return (
        <div className='meal'>
            <img className='food-image' src={image}alt="" />
            <h3>ID: {id}</h3>
            <h3>Name: {name}</h3>
            <h3>Price: {price}</h3>
            <button onClick={()=>{props.addToCart(props.meal)}}>Add to Cart</button>
        </div>
    );
};

export default Meal;