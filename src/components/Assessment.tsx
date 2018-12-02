import * as React from 'react';
import { Button } from 'reactstrap';

import styles from './Assessment.module.css';

interface Props {
  question: string;
  correctAnswer: string;
  incorrectAnswerChoices: string[];
  answerShufflingFunction: (answerChoices: string[]) => string[];
  className?: string;
}

interface State {
  submittedAnswer: string | null;
}

export default class Assessment extends React.Component<Props, State> {
  static defaultProps = {
    answerShufflingFunction: (answerChoices: string[]) => answerChoices.sort(),
  };

  /* eslint-disable react/destructuring-assignment */
  shuffledAnswerChoices: string[] = this.props.answerShufflingFunction([
    this.props.correctAnswer,
    ...this.props.incorrectAnswerChoices,
  ]);
  /* eslint-enable react/destructuring-assignment */

  state = {
    submittedAnswer: null,
  };

  handleAnswerChoiceButtonClick = (
    event: React.FormEvent<HTMLButtonElement>,
  ) => {
    this.setState({ submittedAnswer: event.currentTarget.value });
  };

  render() {
    const { shuffledAnswerChoices } = this;
    const { question, correctAnswer, className } = this.props;
    const { submittedAnswer } = this.state;

    return (
      <div className={className}>
        <p className="mb-0">{question}</p>

        <div>
          {shuffledAnswerChoices.map(answerChoice => {
            let color = 'secondary';
            if (submittedAnswer != null) {
              if (answerChoice === correctAnswer) {
                color = 'success';
              } else if (answerChoice === submittedAnswer) {
                color = 'danger';
              }
            }

            return (
              <Button
                key={answerChoice}
                value={answerChoice}
                disabled={submittedAnswer != null}
                onClick={this.handleAnswerChoiceButtonClick}
                outline={color === 'secondary'}
                color={color}
                className={`mt-3 mr-3 ${styles.answerChoiceButton}`}
              >
                {answerChoice}
              </Button>
            );
          })}
        </div>
      </div>
    );
  }
}
