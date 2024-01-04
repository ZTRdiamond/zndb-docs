import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{ padding: '2rem' }}
    >
      <div className="container">
        <h1 className="hero__title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction"
          >
            Documentation
          </Link>
        </div>
          <div style={{ marginTop: '1rem' }}>
            {/* Tambahkan tombol Trakteer di sini */}
            <a href="https://trakteer.id/zanixongroup" target="_blank">
              <img
                id="wse-buttons-preview"
                src="https://cdn.trakteer.id/images/embed/trbtn-red-1.png?date=18-11-2023"
                height="50"
                style={{ border: '0px', height: '50px' }}
                alt="Trakteer Saya"
              />
            </a>
          </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`ZanixonDB`}
      description="A simple JSON database with ease use, You can use this database for your small games based on nodejs or you can use this database for other usage.">
      <main>
      </main>
      <HomepageHeader />
    </Layout>
  );
}
