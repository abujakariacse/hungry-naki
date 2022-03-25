import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'
// Fetching data from json file
const Meals = () => {
    const [meals,setMeals] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setMeals(data))
    },[]);
    const [cart,setCart] = useState([]);
    const addToCart = (meal) =>{
        const newCart = [...cart,meal]
        setCart(newCart)
    };
    return (
        <div className='shop-container'>
            <div className='meal-container'> 
            {
                meals.map(meal=><Meal meal={meal} key = {meal.id} addToCart={addToCart}></Meal>)
            }
        </div>
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Meals;