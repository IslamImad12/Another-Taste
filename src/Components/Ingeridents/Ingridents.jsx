import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img1 from '../../images/meals/meal-1.jpg'
export default function Ingeridents() {
   async function getMeals(){
       let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
       let meal = response.data.meals
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
                <img src={img1} width={200} className='mx-auto' alt="" />
                <h2>{meal.strIngredient}</h2>
                <p>{meal.strDescription}</p>
            </div>)}
        </div>
    </div>
  </>
}
