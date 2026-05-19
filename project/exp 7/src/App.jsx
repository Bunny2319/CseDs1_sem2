import "./App.css";

function Student(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Student Information</h1>

      <Student
        name="Anjali Dewari"
        course="BTech (Computer Science)"
        marks="92"
      />

      <Student
        name="Jatin Rajput"
        course="BTech (Computer Science)"
        marks="95"
      />

      <Student
        name="Harshita Bhardwaj"
        course="BTech (Computer Science)"
        marks="91"
      />
    </div>
  );
}

export default App;