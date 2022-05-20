import React from 'react';

const FeedbackStatistic = props => (
  <div className="FeedbackButton-conrainer">
    <h2>Statistics</h2>
    <p>Good: {props.good}</p>
    <p>Neutral :{props.neutral}</p>
    <p>Bad: {props.bad} </p>
    <p>Total: {props.total} </p>
    <p>Positive feedback: {props.percentage()}%</p>
  </div>
);

export default FeedbackStatistic;
