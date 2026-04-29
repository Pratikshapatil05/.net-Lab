import StudentInfo from "./StudentInfo";

function App() {
  // Simple event function
  const showMessage = () => {
    alert("Button Clicked!");
  };
  return (
    <>
      <h1>student info</h1>
      <button onClick={showMessage}>
        Click Me
      </button>
      <StudentInfo name="Pratiksha" age="21" course="AIML" />
    </>
  )
}
export default App

