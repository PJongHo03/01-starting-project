import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(key, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [key]: +newValue,
      };
    });
  }

  return (
    <>
      <Header></Header>
      <UserInput onChange={handleChange} userInput={userInput}></UserInput>
      {!inputIsValid && <p>정확한 값을 입력해 주세요</p>}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App;
