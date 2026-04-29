import { useState } from "react";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <AddStudent addStudent={addStudent} />

      <h2>Student List</h2>

      {students.map((student) => (
        <div key={student.id}>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;