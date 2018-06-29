import React from "react";
import styles from "./header.module.css";
import Flex, { FlexItem } from "@instructure/ui-layout/lib/components/Flex";
import Heading from "@instructure/ui-elements/lib/components/Heading";
import { Link } from "gatsby";

const navProps = {
  padding: "small"
};

const Header = ({ siteTitle }) => (
  <div className={styles.root}>
    <Flex>
      <FlexItem shrink>
        <Link to="/">
          <Heading level="h1" margin="small">
            learn a11y
          </Heading>
        </Link>
      </FlexItem>
      <FlexItem {...navProps}>
        <Link to="/learning/content">Content Creators</Link>
      </FlexItem>
      <FlexItem {...navProps}>
        <Link to="/learning/applications">Web Developers</Link>
      </FlexItem>
    </Flex>
  </div>
);

export default Header;
