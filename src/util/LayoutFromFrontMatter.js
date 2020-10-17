import React from "react";
import Home from "../_layouts/home";

/*
 * This wrapper component reads the "layout" parameter specified in each page's frontmatter,
 * and applies that specific layout to the page.
 */
const LayoutFromFrontMatter = ({ pageContext, children }) => {
  let Layout = React.Fragment;

  if (pageContext.frontmatter.layout === "home") {
    Layout = Home;
  }

  return <Layout>{children}</Layout>;
};

export default LayoutFromFrontMatter;
