import React from "react";
import Archive from "../_layouts/archive";
import Article from "../_layouts/article";
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

  if (pageContext.frontmatter.layout === "archive") {
    Layout = Archive;
  }

  if (pageContext.frontmatter.layout === "article") {
    Layout = Article;
  }

  return <Layout pageContext={pageContext}>{children}</Layout>;
};

export default LayoutFromFrontMatter;
