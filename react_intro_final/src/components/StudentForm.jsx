import React, { Component } from 'react';

class User extends Component {
  state = { name: String() };
  updateStudentName = e => this.setState({ name: e.target.value });
  resetStudentName = _ => this.setState({ name: String() });
  submitNewStudent = _ => {
    const { name } = this.state;
    this.props.addStudent(name);
    this.setState({ name: String() });
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <input type="text" placeholder="Enter name..." onChange={this.updateStudentName} value={name} />
        <button type="button" onClick={this.submitNewStudent}>
          Add Student
        </button>
        <button type="button" onClick={this.resetStudentName}>
          Reset Student
        </button>
        <p>
          <strong>Student Name:</strong> {name}
        </p>
      </div>
    );
  }
}

export default User;
