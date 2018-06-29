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
    <Flex>
      <FlexItem shrink>
        <Link css={linkCss} to="/">
          <Heading level="h1" margin="small">
            learn a11y
          </Heading>
        </Link>
      </FlexItem>
      <FlexItem {...navProps}>
        <Link css={linkCss} to="/learning/content">
          Content Creators
        </Link>
      </FlexItem>
      <FlexItem {...navProps}>
        <Link css={linkCss} to="/learning/applications">
          Web Developers
        </Link>
      </FlexItem>
    </Flex>
  </div>
);

export default Header;
