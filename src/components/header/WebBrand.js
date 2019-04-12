import React from "react";
import "./WebBrand.scss";

import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WebBrand = () => (
  <a className="navbar-item" href="https://vivshaw.github.io">
    <span className="icon brand-icon">
      <FontAwesomeIcon icon={faAdjust} />
    </span>
    <span className="is-uppercase slashed bold" title="VIV">
      VIV
    </span>
    <span className="is-uppercase slashed" title="SHAW">
      SHAW
    </span>
  </a>
);

export default WebBrand;
