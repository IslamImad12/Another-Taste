import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state = {
    Ayman:'Hello world',
    name:'Eslam'
  }
  render() {
    return <>
    <Child hambozo={this.state.Ayman} hamada={this.state.name}/>
    </>
  }
}
