import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Juice() {
   async function getMeals(){
       let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`)
       let meal = response.data.drinks
    //    console.log(meal[0].strCategory);
        setMeal(meal)
    }
    let [meal , setMeal] = useState([])
    useEffect(()=> {
        getMeals();
    } , [])
  return <>
    <div className="container my-2">
        <div className="row text-center ">
            {meal.map((meal)=> <div className='col-md-3 card text-center'>
                <img src={meal.strDrinkThumb} width={200} className='mx-auto' alt="" />
                <h6>id drink:{meal.idDrink}</h6>
            </div>)}
        </div>
    </div>
  </>
}
