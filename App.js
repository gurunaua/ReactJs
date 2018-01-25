import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Coba1 from './Coba1';
import Coba2 from './Coba2';

class App extends Component {
  render() {
    let te = this.props.text
    return (
      <div>
        <h1>Coba</h1>
        <p>ini ssssd sdfadsfjajsd nunuud</p>
        <p>{this.props.text}</p>
        <p>{te}</p>
        <br></br>
        <Coba1/>
        <br></br>
        <Coba2/>
      </div>
    )
  }
}

App.propTypes = {
  text:   React.propTypes,
  cat:   React.propTypes
}

App.defaultProps = {
  text : "dddddddddddd"
}
export default App;
