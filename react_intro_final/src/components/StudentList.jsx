import React from 'react';
import Student from './Student';

const StudentList = ({ students }) => (
  <div className="students">
    {students.map(name => (
      <Student key={name} name={name} />
    ))}
  </div>
);

export default StudentList;
