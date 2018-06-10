import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Flex, { FlexItem } from "@instructure/ui-layout/lib/components/Flex";
import Heading from "@instructure/ui-elements/lib/components/Heading";
import Text from "@instructure/ui-elements/lib/components/Text";
import Button from "@instructure/ui-buttons/lib/components/Button";
import { navigateTo } from "gatsby-link";
import Header from "../components/header";

import theme from "@instructure/ui-themes/lib/canvas";

theme.use();

const Layout = ({ data, children }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: "A site to help people learn accessibility"
        },
        { name: "keywords", content: "a11y, web, development" }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
