import { useState } from "react";
import "./App.css";

function App() {
  const [percent, setPercent] = useState(0);

  function handleButton(num) {
    const newPercent = percent + num;
    if (newPercent < 0 || newPercent > 100) {
      return;
    }
    setPercent(newPercent);
  }
  return (
    <>
      <h1 className="container-heading">Progress Bar</h1>
      <div className="bar">
        <div
          className="progress-fill"
          style={{
            width: `${percent}%`,
            backgroundColor:
              percent > 80 ? "green" : percent < 40 ? "red" : "orange",
          }}
        ></div>
      </div>
      <div className="progress-btn-container">
        <button onClick={() => handleButton(+10)}>+10%</button>
        <button onClick={() => handleButton(-10)}>-10%</button>
      </div>
    </>
  );
}

export default App;
