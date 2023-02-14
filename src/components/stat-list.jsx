const decimalFormatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
});

const percentageFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
});

function StatItem(props) {
  const { name, value } = props;

  return (
    <tr>
      <td style={{ textAlign: "left", paddingRight: 16 }}>{name}</td>
      <td>
        <strong>{value}</strong>
      </td>
    </tr>
  );
}

export function StatList(props) {
  const { feedback } = props;
  const allFeedback = feedback.good + feedback.neutral + feedback.bad;
  const average = (feedback.good - feedback.bad) / allFeedback;
  const positive = feedback.good / allFeedback;

  if (allFeedback === 0) {
    return (
      <div style={{ color: "red" }}>
        <em>No feedback given yet</em>
      </div>
    );
  }

  return (
    <table>
      <tbody>
        <StatItem name="good" value={decimalFormatter.format(feedback.good)} />
        <StatItem
          name="neutral"
          value={decimalFormatter.format(feedback.neutral)}
        />
        <StatItem name="bad" value={decimalFormatter.format(feedback.bad)} />
        <StatItem name="all" value={decimalFormatter.format(allFeedback)} />
        <StatItem name="average" value={decimalFormatter.format(average)} />
        <StatItem
          name="positive"
          value={percentageFormatter.format(positive)}
        />
      </tbody>
    </table>
  );
}
