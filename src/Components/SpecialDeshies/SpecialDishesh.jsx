import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import img1 from '../../images/meals/meal-1.jpg'
import img2 from '../../images/meals/meal-2.jpg'
import img3 from '../../images/meals/meal-3.jpg'
import img4 from '../../images/meals/meal-4.jpg'
import img5 from '../../images/meals/meal-5.jpg'
import img6 from '../../images/meals/meal-6.jpg'
import img7 from '../../images/meals/meal-7.jpg'

export default function SpecialDeshies() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
  };
  return <> <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
      <p>Special Dishes</p>
      <h2>Standout Dishes From Our Menu</h2>
      </div>
      <div className="col-md-12">
      <Slider {...settings}>
  <div>
    <img src={img1} width={300} height={200}  alt="" />
    </div>
    <div>
    <img src={img2} width={300} height={200} alt="" />
    </div>
    <div>
    <img src={img3} width={300} height={200}  alt="" />
    </div>
    <div>
    <img src={img4} width={300} height={200}  alt="" />
    </div>
    <div>
    <img src={img5} width={300} height={200}  alt="" />
    </div>
    <div>
    <img src={img6} width={300} height={200}  alt="" />
    </div>
    <div>
    <img src={img7} width={300} height={200}  alt="" />
  </div>
</Slider>
      </div>
    </div>
  </div>
</>
}
// `https://forkify-api.herokuapp.com/api/search?q=${data}`