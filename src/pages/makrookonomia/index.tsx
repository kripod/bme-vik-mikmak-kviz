import { graphql } from 'gatsby';
import shuffle from 'lodash.shuffle';
import * as React from 'react';
import { Container } from 'reactstrap';
import Assessment from '../../components/Assessment';
import Layout from '../../components/Layout';

import styles from './index.module.css';

interface Props {
  data: any;
}

export default class MakrookonomiaPage extends React.Component<Props> {
  /* eslint-disable react/destructuring-assignment */
  shuffledAssessmentEdges = shuffle(this.props.data.allAssessmentsYaml.edges);
  /* eslint-enable react/destructuring-assignment */

  render() {
    const { shuffledAssessmentEdges } = this;

    return (
      <Layout>
        <Container className={styles.container}>
          <h2>Makroökonómia kvíz</h2>

          {shuffledAssessmentEdges.map(({ node }: any) => (
            <Assessment
              key={node.id}
              question={node.question}
              correctAnswer={node.correctAnswer ? 'Igaz' : 'Hamis'}
              incorrectAnswerChoices={[node.correctAnswer ? 'Hamis' : 'Igaz']}
              className="mt-3 mb-4"
            />
          ))}
        </Container>
      </Layout>
    );
  }
}

export const query = graphql`
  {
    allAssessmentsYaml {
      edges {
        node {
          id
          question
          correctAnswer
        }
      }
    }
  }
`;
