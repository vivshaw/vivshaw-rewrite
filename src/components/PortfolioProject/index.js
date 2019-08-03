import React from "react";
import { Flex, Box } from "rebass";

import VizContent from "./VizContent";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioCopy from "./PortfolioCopy";

export default ({ image, title, blurb, html }) => (
  <Flex flexDirection="row" mt={["8vh", "10vh", "15vh"]} mx="4vw">
    <VizContent image={image} />

    <Box pl={5}>
      <PortfolioHeader title={title} blurb={blurb} />
      <PortfolioCopy dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  </Flex>
);
