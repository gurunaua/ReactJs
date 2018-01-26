import React, { Component } from 'react';

import Another2 from './Another2'

export default class CallAnotherMethod extends Component {

  constructor(){
    super()
  }

  clickA(e, code){
    alert(code)
  }

  render() {
    return (
      <div>
        <h1>#CallAnotherMethod</h1>
        <Another2 funcA={this.clickA}/>
      </div>
    )
  }
}
