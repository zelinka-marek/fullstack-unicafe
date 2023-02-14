import { useState } from "react";
import { Button } from "./components/button";
import { StatList } from "./components/stat-list";

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
        <Button onClick={() => addFeedback("good")}>good</Button>
        <Button onClick={() => addFeedback("neutral")}>neutral</Button>
        <Button onClick={() => addFeedback("bad")}>bad</Button>
      </div>
      <h2>Statistics</h2>
      <StatList feedback={feedback} />
    </>
  );
}
