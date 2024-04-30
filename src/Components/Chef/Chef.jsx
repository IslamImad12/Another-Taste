import React from 'react'
import Image4 from '../../images/chef.png'
import Style from '../Style.module.css'

export default function Chef() {
  return <>
      <section class="section3 py-5">
    <div class="container">
      <p class="text-center text-danger">Testimonials</p>
      <div class="row">
          <div class="col-md-6">
            <div class={Style.chefBackground}>
              <div class={Style.backChef}></div>
              <img src={Image4} alt="chef" class={Style.chef}/>
              <div class={`${Style.BestChefBack} shadow`}></div>
              <p class={Style.BestChef}>Our Best Chef <span class={Style.Emoji}></span></p> 
            </div>
          </div>
          <div class="col-md-6">
            <h2>What Our Customers <br/> Say About Us</h2>
            <p>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
            <p>Customer Feedback</p>
            <p>4.9 (18.6k Reviews)</p>

          </div>
      </div>
    </div>
  </section>
  </>
}
