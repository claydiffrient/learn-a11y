import React from "react";
import Flex, { FlexItem } from "@instructure/ui-layout/lib/components/Flex";
import Heading from "@instructure/ui-elements/lib/components/Heading";
import { Link } from "gatsby";
import variables from "../utils/variables";

const navProps = {
  padding: "small"
};

const linkCss = {
  color: variables.mainWhiteColor,
  "text-decoration": "none",
  "&:hover": {
    opacity: 0.6
  }
};

const Header = ({ siteTitle }) => (
  <div
    css={{
      backgroundColor: variables.mainBlueColor,
      color: variables.mainWhiteColor
    }}
  >
    <div
      css={{
        display: "grid",
        "grid-template-columns": "1fr 3fr",
        "grid-auto-columns": "auto",
        "grid-template-areas": `
        'logo navitems'
      `
      }}
    >
      <Link
        css={{
          "grid-area": "logo",
          ...linkCss
        }}
        to="/"
      >
        <h1
          css={{
            color: variables.mainWhiteColor,
            margin: "0.75rem",
            "font-size": "2.5rem"
          }}
        >
          learn a11y
        </h1>
      </Link>
      <nav
        css={{
          "grid-area": "navitems",
          display: "flex",
          "justify-content": "flex-start"
        }}
      >
        <div css={{ margin: "1rem", "line-height": "2em" }}>
          <Link css={linkCss} to="/learning/content">
            Content Creators
          </Link>
        </div>
        <div css={{ margin: "1rem", "line-height": "2em" }}>
          <Link css={linkCss} to="/learning/applications">
            Web Developers
          </Link>
        </div>
      </nav>
    </div>
  </div>
);

export default Header;
