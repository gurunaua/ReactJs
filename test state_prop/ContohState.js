import React, { Component } from 'react';

import ContohProp1 from './ContohProp1'

class ContohState extends Component {

  constructor(){
    super();
    this.state = {
      names: ['john Doe', 'filastro'],
      currentName:'',
      currentStudent: '',
      studentName:'',
      studentAge:0,
      students:[
        {"name":"kelvin", "age":20}
      ]
    }
  }

  addMethod(){
    let currentNames = this.state.names
    currentNames.push(this.state.currentName)
    this.setState({
      names:currentNames
    })
  }

  addStudentMethod(){
    let currentStudent = this.state.students
    currentStudent.push({"name":this.state.studentName, "age":this.state.studentAge})
    this.setState({
      students:currentStudent
    })
    // let currentStudent = this.state.students

    console.log('students: ',this.state.students)

    // this.setState(
    //   {
    //     students:st
    //   }
    // )

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

        {/* di bawah ini nampilin di beda component */}
        <input
            type="text"
            name="name_student"
            onChange={(e)=>this.setState({studentName:e.target.value})}/>
        <input
            type="text"
            name="age_student"
            onChange={(e)=>this.setState({studentAge:e.target.value})}/>
        <input type="submit" value="Add Student" onClick={()=>this.addStudentMethod()}/>
        <h1>############################################</h1>
        <ContohProp1 names={this.state.names} students={this.state.students}/>
      </div>
    )
  }
}

export default ContohState;
