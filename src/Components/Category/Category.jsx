import React from 'react'
import Style from '../Style.module.css'
import a from '../../images/mainDish.png'
import b from '../../images/BreakFast.png'
import c from '../../images/dessert.png'
import d from '../../images/juice.png'
import { Link } from 'react-router-dom'
import Meals from '../Meals/Meals'
export default function Category() {
  return <>
      <section class="text-center my-5">
    <div class="container">
      <p>Customer Favorites</p>
    <h2>Popular Catagories</h2>
      <br /> 
      <div class="food d-flex" >
        <div class="container">
          <div class="row ">
            
            <div class="col-md-3">
            <Link to='/meals' style={{'textDecoration':'none'}}>
              <div class="card card3 py-4 shadow">
                <div class="back1"></div>
                <img src={a} class={`mx-auto ${Style.mainDish}`} alt="" />
                <br />
                <h6>Main Dish</h6>
                <p>(14 dishes)</p>
              </div>
            </Link>
            </div>

            <div class="col-md-3">
            <Link to='/juice' style={{'textDecoration':'none'}}>
              <div class="card card3 py-4 shadow">
                <div class="back1"></div>
                <img src={d} class={`mx-auto ${Style.mainDish}`} alt="" />
                <br />
                <h6>Juices</h6>
                <p>(100 Juices)</p>
              </div>
            </Link>
            </div>

            <div class="col-md-3">
              <Link to='/ingeridents' style={{'textDecoration':'none'}}>
              <div class="card card3 py-4 shadow">
                <div class="back1"></div>
                <img src={c}  class={`mx-auto ${Style.mainDish}`} alt="" />
                <br />
                <h6>Ingeridents</h6>
                <p>(96 Ingeridents)</p>
              </div>
              </Link>
            </div>

                <div class="col-md-3">
                <Link to='/allmeal' style={{'textDecoration':'none'}}>
                  <div class="card card3 py-4 shadow">
                    <div class="back1"></div>
                    <img src={b} class={`mx-auto ${Style.mainDish}`} alt="" />
                    <br />
                    <h6>Browse All</h6>
                    <p>(255 Items)</p>
                  </div>
                </Link>
                </div>
              
            
          </div>
        </div>
      </div>
      </div>
  </section>
  </>
}
