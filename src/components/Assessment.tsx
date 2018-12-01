import * as React from 'react';
import { Button } from 'reactstrap';

interface Props {
  question: string;
  correctAnswer: string;
  incorrectAnswerChoices: string[];
  answerSortingFunction: (answerChoices: string[]) => string[];
  className?: string;
}

interface State {
  submittedAnswer: string | null;
}

export default class Assessment extends React.Component<Props, State> {
  static defaultProps = {
    answerSortingFunction: (answerChoices: string[]) => answerChoices.sort(),
  };

  /* eslint-disable react/destructuring-assignment */
  shuffledAnswerChoices: string[] = this.props.answerSortingFunction([
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
    const { question, correctAnswer, ...props } = this.props;
    const { submittedAnswer } = this.state;

    return (
      <div {...props}>
        <p>{question}</p>
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
                className="mr-3"
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
