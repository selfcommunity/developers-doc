import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
    {
        title: <Link to="/docs/api/intro">API Documentation</Link>,
        Svg: require('../../static/img/api.svg').default,
        description: (
            <>
                Explore our APIs.<br/>Learn how to build apps and integrations with the SelfCommunity platform.
            </>
        ),
    },
    {
        title: <Link to="/docs/apireference/v2/intro">API Reference</Link>,
        Svg: require('../../static/img/api_reference.svg').default,
        description: (
            <>
                Harness the power of our v2 APIs.<br/>Discover the endpoints you can use to build innovative community
                solutions.
            </>
        ),
    },
    {
        title: <Link to="/docs/sdk/community-js/intro">Community-JS SDK</Link>,
        Svg: require('../../static/img/api.svg').default,
        description: (
            <>
                Quickly embed a beautiful community within your eCommerce, Website or APP.<br/>
                A set of React Components for integrating an empowered Social Networking Technology Community in your frontend.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col-xs-6')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
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
