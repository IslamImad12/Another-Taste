import React from 'react'
import Style from '../Style.module.css'
import Icon from '../../images/favicon.png'
export default function Footer() {
  return <>
<footer className={Style.foot}>
    <div className="container py-5">
    <section >
        <div class="container">
        <div class="row mx-auto">
            <div class="col-md-3 text-center">
            <img src={Icon} alt="" width={'50px'} className='mx-3' /> <br />
            <a class="navbar-brand logo" href="#">Another Taste</a> <br /> <br />
            <p>Savor the artistry where every dish is a culinary masterpiece</p>
            </div>
            <div class="col-md-3 text-center">
            <h4>Useful links</h4>
            <p>About us</p>
            <p>Events</p>
            <p>Blogs</p>
            <p>FAQ</p>
            </div>
            <div class="col-md-3 text-center">
            <h4>Main Menu</h4>
            <p>Home</p>
            <p>Offers</p>
            <p>Menus</p>
            <p>Reservation</p>
            </div>
            <div class="col-md-3 text-center">
            <h4>Contact Us</h4>
            <p>example@email.com</p>
            <p>+20 118 248 9636</p>
            <p>Social media</p>
            </div>
        </div>
        </div>
    </section>
    <section >
        <div class="container" >
        <div class="row d-flex justify-content-center align-items-center" 
        style={{"position": "relative", "top": "50%"}}>
            <div class="col-md-12 text-center">
            <p class="">Copyright &copy; All rights reserved</p>
            <i class="fa-brands fa-facebook-f mx-1 text-dark"></i>
            <i class="fa-brands fa-instagram mx-1 text-dark"></i>
            <i class="fa-brands fa-twitter mx-1 text-dark"></i>
            <i class="fa-brands fa-youtube mx-1 text-dark"></i>
            </div>
            
        </div>
        </div>
    </section>
    </div>
</footer>
  </>
}
