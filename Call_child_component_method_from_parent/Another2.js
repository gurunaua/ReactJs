import React, { Component } from 'react';

export default class Another2 extends Component {

  constructor(props){
    super(props);
  }

  callFuncA(){
    this.props.funcA(this, 1234);
  }

  render() {
    return (
      <div>
        <h1>#Another2</h1>
        <input type="submit" value="Call funcA" onClick={()=>this.callFuncA()}/>
      </div>
    )
  }
}
