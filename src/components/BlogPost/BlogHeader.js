import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Box, Text, Flex } from "rebass";

const BlogHeader = ({ title, blurb, date, image, timeToRead }) => {
  return (
    <Box>
      <Img fluid={image.childImageSharp.fluid} alt="" />

      <Text
        as="h1"
        fontFamily="serif"
        fontWeight={400}
        fontSize={"36px"}
        lineHeight={"44px"}
        mt={3}
        mx={"4vw"}
      >
        {title}
      </Text>

      {blurb && (
        <Text
          as="h2"
          fontFamily="sans"
          fontSize={4}
          fontWeight={300}
          color="grey.6"
          mx={"4vw"}
          mt={1}
        >
          {blurb}
        </Text>
      )}

      <Flex mx={"4vw"} my={4} flexDirection="row" alignItems="center">
        <Box
          css={`
            height: 48px;
            border-radius: 50%;
          `}
          backgroundColor="red"
          width={"48px"}
          mr={2}
        ></Box>
        <Box>
          <Text
            fontFamily="sans"
            fontWeight="normal"
            fontSize={1}
            as="h6"
            mb={1}
          >
            Hannah Vivian Shaw
          </Text>
          <Text
            as="h6"
            fontFamily="sans"
            fontWeight="normal"
            fontSize={1}
            color="grey.6"
          >
            {date} · {timeToRead} min read
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

FrontMatter.PropTypes = {
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string,
};

export default BlogHeader;
