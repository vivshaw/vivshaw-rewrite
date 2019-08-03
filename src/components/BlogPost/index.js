import React from "react";
import { Flex } from "rebass";

import BlogHeader from "./BlogHeader";
import BlogCopy from "./BlogCopy";

const BlogPost = ({ title, blurb, date, image, html, timeToRead }) => (
  <Flex
    css={`
      max-width: 45em;
    `}
    width={1}
    mt={["8vh", "10vh", "15vh"]}
    flexDirection="column"
    margin="auto"
  >
    <BlogHeader
      title={title}
      blurb={blurb}
      date={date}
      image={image}
      timeToRead={timeToRead}
    />

    <BlogCopy dangerouslySetInnerHTML={{ __html: html }} />
  </Flex>
);

export default BlogPost;
