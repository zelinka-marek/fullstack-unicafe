import { useState } from "react";

const decimalFormatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
});

const percentageFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
});

const checkNaN = (value) => (isNaN(value) ? 0 : value);

function Stats(props) {
  const { feedback } = props;
  const allFeedback = feedback.good + feedback.neutral + feedback.bad;
  const average = checkNaN((feedback.good - feedback.bad) / allFeedback);
  const positive = checkNaN(feedback.good / allFeedback);

  return (
    <div>
      <div>
        good <strong>{decimalFormatter.format(feedback.good)}</strong>
      </div>
      <div>
        neutral <strong>{decimalFormatter.format(feedback.neutral)}</strong>
      </div>
      <div>
        bad <strong>{decimalFormatter.format(feedback.bad)}</strong>
      </div>
      <div>
        all <strong>{decimalFormatter.format(allFeedback)}</strong>
      </div>
      <div>
        average <strong>{decimalFormatter.format(average)}</strong>
      </div>
      <div>
        positive <strong>{percentageFormatter.format(positive)}</strong>
      </div>
    </div>
  );
}

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const addFeedback = (type) => {
    setFeedback((feedback) => ({
      ...feedback,
      [type]: feedback[type] + 1,
    }));
  };

  return (
    <>
      <h1>Give feedback</h1>
      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={() => addFeedback("good")}>
          good
        </button>
        <button type="button" onClick={() => addFeedback("neutral")}>
          neutral
        </button>
        <button type="button" onClick={() => addFeedback("bad")}>
          bad
        </button>
      </div>
      <h2>Statistics</h2>
      <Stats feedback={feedback} />
    </>
  );
}
