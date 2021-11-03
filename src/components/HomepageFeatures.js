import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'API Documentation',
    Svg: require('../../static/img/api.svg').default,
    description: (
      <>
        Explore our APIs. Learn how to build apps and integrations with the SelfCommunity platform
      </>
    ),
  },
  {
    title: 'API Reference',
    Svg: require('../../static/img/api_reference.svg').default,
    description: (
      <>
          Harness the power of our v2 APIs. Discover the endpoints you can use to build innovative community solutions.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
