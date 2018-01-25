import React, { Component } from 'react';

class Coba2 extends Component {
  render() {
    return (
      <div>
        <h1>#Coba2</h1>
        <h3>belajar mengakses child</h3>
        <Tombol> Kamu <Cinta/> ???</Tombol>
        <Cinta/>
      </div>
    )
  }
}

const Tombol = (props) => <button>{props.children}</button>

class Cinta extends React.Component {

  render(){
    return <span>&hearts;</span>
  }
}

export default Coba2;
