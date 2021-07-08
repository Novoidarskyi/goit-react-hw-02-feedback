// import css from './FidebackStatic.module.css';

import React, { Component } from 'react';

export default class FidebackStatic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelClick = e => {
    const name = e.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
 
  countPositiveFeedbackPercentage = () => (this.state.good * 100) / this.countTotalFeedback();
  
  render() {
    const { good, neutral, bad } = this.state;
    return (      
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          {Object.keys(this.state).map(key => (
            <li key={key}>
              <button type="button" name={key} onClick={this.handelClick}>
                {key[0].toUpperCase() + key.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: { good>0 ? this.countPositiveFeedbackPercentage().toFixed(2) : 0}%;              
     </p>
      </div>
    );
  }
}
