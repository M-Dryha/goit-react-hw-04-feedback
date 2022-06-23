import { useState, useEffect } from 'react';
import Section from './Section';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalClick, setTotalClick] = useState(0);
  const [newPercentage, setNewPercentage] = useState(0);

  useEffect(() => {
    setTotalClick(bad + neutral + good);
    setNewPercentage(((good / (bad + neutral + good)) * 100).toFixed(0));
  }, [bad, good, neutral]);

  const onSelectUpdate = type => {
    const name = type.target.name;
    switch (name) {
      case 'good':
        setGood(g => g + 1);
        break;
      case 'neutral':
        setNeutral(n => n + 1);
        break;
      case 'bad':
        setBad(b => b + 1);
        break;
      default:
        return;
    }
  };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onSelect={onSelectUpdate}
        />
      </Section>

      <Section title="Statistics">
        {totalClick === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalCount={totalClick}
            newPercentage={newPercentage}
          />
        )}
      </Section>
    </div>
  );
};
