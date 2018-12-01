import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { Container } from 'reactstrap';
import Assessment from '../../components/Assessment';
import Layout from '../../components/Layout';

import styles from './index.module.css';

const MakrookonomiaPage = () => (
  <Layout>
    <Container className={styles.container}>
      <h2>Makroökonómia kvíz</h2>

      <StaticQuery
        query={graphql`
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
        `}
        render={data =>
          data.allAssessmentsYaml.edges.map(({ node }: any) => (
            <Assessment
              key={node.id}
              question={node.question}
              correctAnswer={node.correctAnswer ? 'Igaz' : 'Hamis'}
              incorrectAnswerChoices={[node.correctAnswer ? 'Hamis' : 'Igaz']}
              className="mt-3 mb-4"
            />
          ))
        }
      />
    </Container>
  </Layout>
);

export default MakrookonomiaPage;
