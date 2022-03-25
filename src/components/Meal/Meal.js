import React from 'react';
import './Meal.css'

const Meal = (props) => {
    // console.log(props.meal)
    const {id,image,name,price} = props.meal ;
    return (
        <div className='meal'>
            <img className='food-image' src={image}alt="" />
            <h4>ID: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>Price: {price}</h4>
            <button>Add to Cart</button>
        </div>
    );
};

export default Meal;