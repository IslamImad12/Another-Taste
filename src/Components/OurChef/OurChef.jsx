import React from 'react'
import Image4 from '../../images/chef.png'
import Style from '../Style.module.css'
import chef1 from '../../images/chef1.jpg'
import chef2 from '../../images/chef2.jpg'
import chef3 from '../../images/chef3.jpg'
export default function OurChef() {
  return <>
      <section class="section3 py-5">
    <div class="container">
      <p class="text-center text-danger">Testimonials</p>
      <div class="row m-auto">
          <div class="col-md-4 card mx-4"  style={{'width':'300px'}}>
            <img src={chef1} alt="" style={{'height':'200px'}} />
            <p>"Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors - it's how you combine them that sets you apart."</p>
            <p>4.3 (16.2k Reviews)</p>
          </div>
          <div class="col-md-4 card mx-4"  style={{'width':'300px'}}>
            <img src={chef2} alt="" style={{'height':'200px'}} />
            <p>"The only real stumbling block is fear of failure. In cooking, you've got to have a what-the-hell attitude."</p>
            <p>4.6 (13.9k Reviews)</p>
          </div>
          <div class="col-md-4 card mx-4"  style={{'width':'300px'}}>
            <img src={chef3} alt="" style={{'height':'200px'}}/>
            <p>“I had the pleasure of dining at Foodi last night, <br />and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
            <p>4.9 (18.6k Reviews)</p>
          </div>
          
      </div>
    </div>
  </section>
  </>
}
