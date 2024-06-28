

export default function UserInput({ userData, onSelect }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userData.initialInvestment}
            onChange={(event) =>
              onSelect("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userData.annualInvestment}
            onChange={(event) =>
              onSelect("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userData.expectedReturn}
            onChange={(event) => onSelect("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userData.duration}
            onChange={(event) => onSelect("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
