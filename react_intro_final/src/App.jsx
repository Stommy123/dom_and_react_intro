import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

class App extends Component {
  state = { students: [] };
  addStudent = name => {
    const { students } = this.state;
    const newStudentList = [...students, name];
    this.setState({ students: newStudentList });
  };
  render() {
    const { students } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <StudentForm addStudent={this.addStudent} />
        <hr />
        <StudentList students={students} />
      </div>
    );
  }
}

export default App;
