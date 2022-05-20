import React from 'react';

const FeedbackButtons = ({ onClickGood, onClickNeutral, onClickBad }) => (
  <section className="FeedbackButton-conrainer">
    <h1>Please leave feedback</h1>
    <button type="button" id="good" onClick={onClickGood}>
      Good
    </button>
    <button type="button" id="neutral" onClick={onClickNeutral}>
      Neutral
    </button>
    <button type="button" id="bad" onClick={onClickBad}>
      Bad
    </button>
  </section>
);

export default FeedbackButtons;
