import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//FIXME: get from theme
const borderColor = "#aaaaaa";

const TOCWrap = styled.div`
  border: 1px solid ${borderColor};
  //FIXME: Make it full-width on mobile
  margin-left: 0.5em;
  margin-right: 0.5em;
  margin-bottom: 1em;

  ul {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  li {
    border-bottom: 1px solid ${borderColor};

    > a {
      display: block;
      padding: 7px 1.618rem;
      border-left: 2px solid transparent;
      color: black;
      &:hover,
      &:focus {
        background: #dddddd;
      }
    }
  }

  h6 {
    margin: 0;
    padding: 7px 1.618rem;
    background: ${borderColor};
    &:hover {
      background: #bbbbbb;
    }

    a {
      color: black;
    }
  }
`;

const TOC = ({ title, contentHtml }) => {
  return (
    <TOCWrap>
      <h6>{title || "Overview"}</h6>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </TOCWrap>
  );
};

TOC.PropTypes = {
  title: PropTypes.string,
  contentHtml: PropTypes.string.isRequired,
};

export default TOC;
