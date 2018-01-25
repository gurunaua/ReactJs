import React, { Component } from 'react';

class Coba1 extends Component {

  constructor(){
    super();
    this.state = {
      txt: "ini adalah state",
      txt2: "s",
      txt3: "ini text 3"
    }

    this.update2=this.update2.bind(this)
  }

  update(e){
    this.setState({txt:e.target.value})
  }

  update2(){
    this.setState({txt2:"b"})
  }

  update3(e){
    this.setState({txt3:e.target.value})
  }

  render() {
    return (
      <div>
        <h1>#Coba1</h1>
        <p>Hai : {this.state.txt}</p>
        <p>Hai : {this.state.txt2}</p>
         {/*cara1*/}
        <input type="text" onChange={this.update.bind(this)}/>
        {/* cara2*/}
        <input type="text" onChange={this.update2}/><br/>

        {/* cara3*/}
        <Gabung update3={this.update3.bind(this)}/>
        <p>Hai : {this.state.txt3}</p>
      </div>
    )
  }
}

const Gabung = (props) => <input type="text" onChange={props.update3}/>

export default Coba1;
