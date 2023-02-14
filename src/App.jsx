import { useState } from "react";

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
      <div>
        good <strong>{feedback.good}</strong>
      </div>
      <div>
        neutral <strong>{feedback.neutral}</strong>
      </div>
      <div>
        bad <strong>{feedback.bad}</strong>
      </div>
    </>
  );
}
