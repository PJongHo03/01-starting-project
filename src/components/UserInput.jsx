import { useState } from "react";

export default function UserInput() {
  const [UserInput, setUserInput] = useState({
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
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>초기 투자 금액</label>
            <input
              type="number"
              required
              value={UserInput.InitialInvestment}
              onChange={(event) =>
                handleChange("InitialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>연간 투자 금액</label>
            <input
              type="number"
              required
              value={UserInput.AnnualInvestment}
              onChange={(event) =>
                handleChange("AnnualInvestment", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>예상 수익</label>
            <input
              type="number"
              required
              value={UserInput.ExpectedReturn}
              onChange={(event) =>
                handleChange("ExpectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label>지속 투자</label>
            <input
              type="number"
              required
              value={UserInput.Duration}
              onChange={(event) => handleChange("Duration", event.target.value)}
            />
          </p>
        </div>
      </section>
    </>
  );
}
