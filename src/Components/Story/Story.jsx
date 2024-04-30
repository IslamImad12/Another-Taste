import React from 'react'

export default function Story() {
  return <>
      <section class="py-5">
        <div class="container">
        <div class="row">

            <div class="col-md-6">
            <p>Our Story & Services</p>
            <h2>Our Culinary Journey <br/> And Services</h2>
            <p>Rooted in passion, we curate unforgettable dining <br/>
                experiences and offer exceptional services, <br/>
                blending culinary artistry with warm hospitality.</p>
                <button class="btn btn-success">Explore</button>
            </div>

            <div class="col-md-6">
            <div class="row text-center">

                <div class="col-md-6 my-3">
                <div class="card shadow p-3">
                    <i class="fa-solid fa-plate-wheat"  style={{"font-size": "30px"}}></i>
                    <h5>Catering</h5>
                    <p>Delight your guests with our flavors and  presentation</p>
                </div>
                </div>

                <div class="col-md-6 my-3">
                <div class="card shadow p-3">
                    <i class="fa-solid fa-clock-rotate-left"  style={{"font-size": "30px"}}></i>
                    <h5>Fast delivery</h5>
                    <p>We deliver your order promptly to your door</p>
                </div>
                </div>

                <div class="col-md-6 my-3">
                <div class="card shadow p-3">
                    <i class="fa-solid fa-cart-shopping" style={{"font-size": "30px"}}></i>
                    <h5>Online Ordering</h5>
                    <p>Explore menu & order with ease using our Online Ordering </p>
                </div>
                </div>
                <div class="col-md-6 my-3">
                <div class="card shadow p-3">
                    <i class="fa-solid fa-gift" style={{"font-size": "30px"}}></i>
                    <h5>Gift Cards</h5>
                    <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
                </div>
                </div>
    
            </div>
            </div>
        </div>
        </div>
      </section>
  </>
}
