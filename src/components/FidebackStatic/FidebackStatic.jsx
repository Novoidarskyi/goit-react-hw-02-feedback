import React, { Component } from 'react';
import css from './FidebackStatic.module.css';
import Statistics from './Statistics';
import FeedbackOption from './FeedbackOption';
import Section from 'components/Section';
import Notification from 'components/Notification';

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

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    (this.state.good * 100) / this.countTotalFeedback();

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className = {css.container}>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={this.state}
            onLeaveFeedback={this.handelClick}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}
