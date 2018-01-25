import React, { Component } from 'react';

class ValidationExample extends Component {
  render() {
    return (
      <div>
        <h1>#ValidationExample</h1>
        <Title tx="asdasdddd" />
      </div>
    )
  }
}

const Title = (props) => <h2>{props.tx}</h2>

Title.propTypes={
  text(props, propName, component){
    if(!(propName in props)){
      return new Error('${propName} belum di tulis')
    }
    if(props[propName].length < 6){
      return new Error('${propName} terlalalu pendek')
    }
  }
}

export default ValidationExample;
