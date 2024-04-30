import React, { Component } from 'react'
import Home from '../Home/Home'
import Child from '../Child'
import Style from '../Style.module.css'
import { Link } from 'react-router-dom'
import Icon from '../../images/favicon.png'
export default class Navbar extends Component {
  state = {
    
  }
  render() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <img src={Icon} alt="" width={'50px'} className='mx-3' />
        <a className={`${Style.logo} navbar-brand`} style={{'color':'#39DB4A'}} href="#">Another <br /> Taste</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="home">Home <span class="sr-only">(current)</span></Link>
          <Link className="nav-item nav-link" to="meals">meals</Link>
          <Link className="nav-item nav-link" to="juice">drinks</Link>
          <Link className="nav-item nav-link" to="ourChef">chefs</Link>
          <Link className="nav-item nav-link" to="contact">Contact</Link>
        </div>
      </div>
      </div>
    </nav>

    </>
    
  }
}
