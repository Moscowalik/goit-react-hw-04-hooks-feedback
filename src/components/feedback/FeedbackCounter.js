import React, { Component } from 'react';
import FeedbackButtons from './FeedbackButtons';
import FeedbackStatistic from './FeedbackStatistic';
// import Value from './Value';
// import './Counter.css';

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleInctrement = e => {
    const { id } = e.target;
    this.setState(prevstate => ({ [id]: prevstate[id] + 1 }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  percentageGoodFeedback = () => {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    const result = (100 * good) / sum;
    return result ? Math.floor(result) : null;
  };

  render() {
    return (
      <div className="Counter">
        <FeedbackButtons handleInctrement={this.handleInctrement} />
        <FeedbackStatistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.totalFeedback}
          percentage={this.percentageGoodFeedback}
        />
      </div>
    );
  }
}
export default Counter;
