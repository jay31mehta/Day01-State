import { useState } from "react";
import "./App.css";

const messages = ["Learn React *", "Apply for the job", "Invest in Income!!!"];

function App() {
  const [step, setstep] = useState(1);
  const [Close, setClose] = useState(true);

  function handlePrevious() {
    setstep(step - 1);
  }
  function handleNext() {
    setstep(step + 1);
  }

  function HandleClose() {
    setClose(!Close);
  }

  return (
    <div>
      <button onClick={() => HandleClose()}>X</button>
      {Close && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons" />
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={() => {
              handlePrevious();
            }}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={() => handleNext()}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
