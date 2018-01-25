import React, { Component } from 'react';


export default class ContonProp1 extends Component {

  render() {
    return (
      <div>
        <h1>#Halaman ContonProp1</h1>
        <h2>nama-nama:</h2>
        {
           this.props.names.map(
           name =>{
             return <h2>{name}</h2>
           }
         )
      }
        <h1>###students###</h1>
        {this.props.students.map( (student, index) =>{
          return(
            <h2 key={index}>{student.name},{student.age}</h2>
          )
        }
      )}
        <h1>###students###</h1>
      </div>
    )
  }
}
