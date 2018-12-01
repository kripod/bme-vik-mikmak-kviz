import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <ul>
      <li>
        <Link to="/makrookonomia/">Makroökonómia</Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
