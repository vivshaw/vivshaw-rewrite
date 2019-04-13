import React from "react";
import styled from "styled-components";

import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//FIXME: Get from SCSS theme
const primary = "#ec008c";

const Slashed = styled.span`
  font-size: 40px;
  font-weight: 400;
  position: relative;
  z-index: 1;

  &:before {
    height: 45%;
    background: ${primary};
    overflow: hidden;
    position: absolute;
    left: 0px;
    padding-left: 0px;
    top: 0px;
    content: attr(title);
    z-index: 3;
  }

  &:after {
    height: 60%;
    background: ${primary};
    overflow: hidden;
    position: absolute;
    left: 0px;
    padding-left: 2px;
    top: 0px;
    content: attr(title);
    z-index: 2;
  }
`;

const BrandIcon = styled.span`
  font-size: 35px;
  margin-right: 10px;
  transform: rotate(45deg);
`;

const WebBrand = () => (
  <a className="navbar-item" href="https://vivshaw.github.io">
    <BrandIcon className="icon">
      <FontAwesomeIcon icon={faAdjust} />
    </BrandIcon>
    <Slashed className="is-uppercase has-text-weight-bold" title="VIV">
      VIV
    </Slashed>
    <Slashed className="is-uppercase" title="SHAW">
      SHAW
    </Slashed>
  </a>
);

export default WebBrand;
