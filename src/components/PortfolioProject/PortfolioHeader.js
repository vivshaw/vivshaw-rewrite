import React from "react";
import { Text } from "rebass";

export default ({ title, blurb }) => (
  <>
    <Text
      as="h1"
      fontFamily="serif"
      fontWeight={400}
      fontSize={6}
      lineHeight={"44px"}
      mb={3}
    >
      {title}
    </Text>

    {blurb && (
      <Text
        as="h2"
        fontFamily="sans"
        fontSize={5}
        fontWeight={300}
        color="grey.6"
        mb={4}
      >
        {blurb}
      </Text>
    )}
  </>
);
