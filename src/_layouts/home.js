import React from "react";
import BackgroundImage from "../_includes/background-image";
import BrowserUpgrade from "../_includes/browser-upgrade";
import Footer from "../_includes/footer";

const Home = ({ children }) => {
  return (
    <>
      <BackgroundImage />

      <div className="page-lead">
        <div className="page-lead-content">
          <h1>Hannah Vivian Shaw</h1>
          <h2>
            <a href="{{ site.url }}/about/" className="lead-link">
              <em>I{"'"}m a Vermont developer</em>
            </a>{" "}
            working mainly in Javascript &amp; Python. I{"'"}m into the
            React/Redux ecosystem, functional programming, and machine learning.
          </h2>
          <a href="{{ site.url }}/work/" className="btn-inverse">
            See my work
          </a>{" "}
          &nbsp; or &nbsp;{" "}
          <a href="https://github.com/vivshaw/" className="btn-inverse">
            Find me on GitHub
          </a>
        </div>
      </div>

      <div id="page-wrapper">
        <BrowserUpgrade />

        <div id="main" role="main">
          <div className="wrap">
            <div className="archive-wrap">
              <div className="page-content home-content">{children}</div>
            </div>
          </div>
        </div>

        <Footer home />
      </div>
    </>
  );
};

export default Home;
