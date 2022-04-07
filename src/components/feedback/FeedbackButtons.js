import React from 'react';

const FeedbackButtons = ({ handleInctrement }) => (
  <section className="FeedbackButton-conrainer">
    <h1>Please leave feedback</h1>
    <button type="button" id="good" onClick={handleInctrement}>
      Good
    </button>
    <button type="button" id="neutral" onClick={handleInctrement}>
      Neutral
    </button>
    <button type="button" id="bad" onClick={handleInctrement}>
      Bad
    </button>
  </section>
);

export default FeedbackButtons;
