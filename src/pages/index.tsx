import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="home--container">
          <a href="https://www.postman.com/dolphinlabs">
            <div className="home--block">
              <i className="icon--postman home--block-icon"></i>
              <h4> Published Postman collections </h4>
            </div>
          </a>
          <a href="https://github.com/dolphinsec/nodoc">
          <div className="home--block">
            <i className="icon--github home--block-icon"></i>
              <h4>Open-source specifications</h4>
          </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | ${siteConfig.tagline}`}
      description={`${siteConfig.title} | ${siteConfig.tagline}`}
    >
      <HomepageHeader />
    </Layout>
  );
}
