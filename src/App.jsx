import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    InitialInvestment: 10000,
    AnnualInvestment: 1200,
    ExpectedReturn: 6,
    Duration: 10,
  });

  function handleChange(key, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [key]: newValue,
      };
    });
  }

  return (
    <>
      <Header></Header>
      <UserInput onChange={handleChange} userInput={userInput}></UserInput>
      <Result input={userInput}></Result>
    </>
  );
}

export default App;
