import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals,setMeals] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setMeals(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='meal-container'> 
            {
                meals.map(meal=><Meal meal={meal} key = {meal.id}></Meal>)
            }
        </div>
        <div className="cart-container">
            <h2>Order Summery</h2>
        </div>
        </div>
    );
};

export default Meals;