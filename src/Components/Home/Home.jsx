import React, { useState } from 'react'
import Style from '../Style.module.css'
import Image1 from '../../images/hero-img.png'
import Image2 from '../../images/spicyNoodles.jpg'
import Image3 from '../../images/freshVegetable.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Chef from '../Chef/Chef'
import Story from '../Story/Story'
import SpecialDishesh from '../SpecialDeshies/SpecialDishesh'
import Category from '../Category/Category'
export default function Home() {
  return <>
  <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className=''>
              Dive into Delights Of Delectable <span className={Style.food}>Food</span>
            </h1>
            <p>
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
            </p>
            <button className="btn btn-success">Order Now</button>
            <button className="btn ">Watch Video</button>
            <i className="fa-solid fa-play text-dark"></i>
          </div>
          <div className="col-md-6">

            <div className={Style.heroContainer}>
            <div className={Style.back}></div>
            <img src={Image1} className={Style.hero} alt="" />
            </div>

            <div className={`row ${Style.NoodlesCont}`}>
              <div className="col-md-6">
                <div className="d-flex card2 shadow align-items-center w-100">
                  <img src={Image2} className={Style.noodles} style={{"width": "30%" , 'height':'30%'}} alt="" />
                  <div>
                    <h6>Spicy noodles</h6>
                      <div>
                        <i className="fa-solid fa-star" style={{'color':'yellow'}}></i>
                        <i className="fa-solid fa-star" style={{'color':'yellow'}} ></i>
                        <i className="fa-solid fa-star" style={{'color':'yellow'}}></i>
                        <i className="fa-regular fa-star" style={{'color':'black'}}></i>
                        <i className="fa-regular fa-star"style={{'color':'black'}}></i>
                      </div>
                    <span>$18.00</span>
                  </div>
                </div> <br />
        
                
              </div>
              <div className="col-md-6 mx-auto">
                <div className="d-flex card1 shadow align-items-center w-100">
                  <img src={Image3} className={Style.freshVegetable} style={{"width": "30%" , 'height':'30%'}} alt=""/>
                  <div>
                    <h6>Vegetarian salad</h6>
                      <div>
                        <i className="fa-solid fa-star" style={{'color':'yellow'}}></i>
                        <i className="fa-solid fa-star" style={{'color':'yellow'}}></i>
                        <i className="fa-solid fa-star" style={{'color':'yellow'}}></i>
                        <i className="fa-solid fa-star" style={{'color':'yellow'}}></i>
                        <i className="fa-regular fa-star" style={{'color':'black'}}></i>
                      </div>
                    <span>$23.00</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
  </section>
  <Category/>
  <SpecialDishesh/>
  <Chef/>
  <Story/>
  </>
}
