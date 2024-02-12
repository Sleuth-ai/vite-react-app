import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { StatsigProvider, useGate } from "statsig-react";

function App() {
  const [count, setCount] = useState(0);

  const { value } = useGate("vite_react_app_header");
  console.log("statsig value:", value);

  return (
    <StatsigProvider
      sdkKey="client-mlNIMwXe6gzQSN6S0kAsGOLG0dM7AScbq1Wl9bYac76"
      waitForInitialization={true}
      user={{ userID: "user123" }}
    >
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        {value ? <h1>Passes Gate</h1> : <h1>Fails Gate</h1>}
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    </StatsigProvider>
  );
}

export default App;
