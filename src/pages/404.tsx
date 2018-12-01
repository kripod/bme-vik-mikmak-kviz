import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Az oldal nem található</title>
    </Helmet>

    <h2>Az oldal nem található</h2>
    <p>A kért oldal nem érhető el.</p>
  </Layout>
);

export default NotFoundPage;
