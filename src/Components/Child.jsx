import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
export default class Child extends Component {
  render() {
    console.log(this.props.hambozo);
    return  <>
    <div>Child</div>
    <h2>{this.props.hambozo}</h2>
    <h3>{this.props.hamada}</h3>
    </>
  }
}
