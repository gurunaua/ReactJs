import React, { Component } from 'react';


class ContonState extends Component {

  constructor(){
    super();
    this.state = {
      names: ['john Doe', 'filastro'],
      currentName:''
    }
  }

  addMethod(){
    let currentNames = this.state.names
    currentNames.push(this.state.currentName)
    this.setState({
      names:currentNames
    })
  }

  render() {
    return (
      <div>
        <h1>#Halaman ContonState</h1>
        <span>{this.state.currentName}</span><br/>
        <input
          type="text"
          name="name_name"
          onChange={(e)=>this.setState({currentName:e.target.value})}/>
        <input type="submit" value="Add Name" onClick={()=>this.addMethod()}/>
        <h2>nama-nama:</h2>
        {this.state.names.map(
          name =>{
            if(name==='filastro'){
              return <h2>{name}</h2>
            }else{
              return <h3>{name}</h3>
            }
          }
        )}
      </div>
    )
  }
}

export default ContonState;
