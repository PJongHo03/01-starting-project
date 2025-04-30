export default function UserInput({ onChange, userInput }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>초기 투자 금액</label>
            <input
              type="number"
              required
              value={userInput.InitialInvestment}
              onChange={(event) =>
                onChange("InitialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>연간 투자 금액</label>
            <input
              type="number"
              required
              value={userInput.AnnualInvestment}
              onChange={(event) =>
                onChange("AnnualInvestment", event.target.value)
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
              value={userInput.ExpectedReturn}
              onChange={(event) =>
                onChange("ExpectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label>지속 투자</label>
            <input
              type="number"
              required
              value={userInput.Duration}
              onChange={(event) => onChange("Duration", event.target.value)}
            />
          </p>
        </div>
      </section>
    </>
  );
}
