import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 11,
    duration: 9,
  });

  const isValid = userInput.duration > 0;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((preValue) => {
      return {
        ...preValue,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userData={userInput} onSelect={handleChange} />
      {isValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than 0.</p>
      )}
    </>
  );
}

export default App;
