import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { Container } from 'reactstrap';
import Helmet from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Layout.module.css';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className={styles.root}>
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
              language
            }
          }
        }
      `}
      render={data => (
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.language} />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
        </Helmet>
      )}
    />

    <main className={`${styles.main} mt-3`}>{children}</main>

    <Container tag="footer" className="text-center p-3">
      Forrás:{' '}
      <a href="http://kgt.bme.hu/tantargyak/bsc/BMEGT30A001">
        Mikro- és makroökonómia - BME-GTK Közgazdaságtan Tanszék
      </a>
    </Container>
  </div>
);

export default Layout;
