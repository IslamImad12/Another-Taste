import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Meals() {
   async function getMeals(){
       let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
       let meal = response.data.categories
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
                <img src={meal.strCategoryThumb} width={200} className='mx-auto' alt="" />
                <h2>{meal.strCategory}</h2>
            </div>)}
        </div>
    </div>
  </>
}
