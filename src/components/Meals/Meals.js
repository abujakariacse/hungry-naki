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
    // Cart state declare
    const [cart,setCart] = useState([]);
    const addToCart = (meal) =>{
        const newCart = [...cart,meal]
        if(cart.length < 4){
            setCart(newCart)
        }
        else{
            alert("You can't add more than 4 meal")
        }
    };
    // Function for choose for me button
    const randomItems =()=>{
        const random = cart[Math.floor(Math.random() * cart.length)];
        setCart([random]);
    }
    // Function for choose again button
    const chooseAgain = () =>{
        setCart([])
    }
    return (
        <div className='shop-container'>
            <div className='meal-container'> 
            {
                meals.map(meal=><Meal meal={meal} key = {meal.id} addToCart={addToCart}></Meal>)
            }
        </div>
        <div className="cart-container">
           <Cart cart={cart} random={randomItems} chooseAgain={chooseAgain}></Cart>
        </div>
        </div>
    );
};

export default Meals;