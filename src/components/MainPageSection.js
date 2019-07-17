import React from "react";
import { Text } from "rebass";

const MainPageSection = props => (
  <Text
    {...props}
    fontSize={"60px"}
    fontFamily={"Alegreya Sans"}
    lineHeight={7 / 6}
    width={2 / 3}
    as="h2"
    fontWeight="normal"
    color="grey.8"
  />
);

export default MainPageSection;
