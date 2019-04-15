import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FrontMatterWrap = styled.div`
  margin-bottom: 1em;
`;

const FrontMatter = ({ title, blurb }) => {
  return (
    <FrontMatterWrap>
      <h1 className="is-size-3">{title}</h1>

      {blurb && <h2 className="is-size-5">{blurb}</h2>}
    </FrontMatterWrap>
  );
};

FrontMatter.PropTypes = {
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string,
};

export default FrontMatter;
