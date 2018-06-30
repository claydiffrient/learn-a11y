import React from "react";
import { Link } from "gatsby";
import List, { ListItem } from "@instructure/ui-elements/lib/components/List";
import variables from "../utils/variables";

const navProps = {
  padding: "small"
};

const SideNavigation = ({ curPage }) => (
  <div
    css={{
      width: "10rem",
      padding: "10px",
      "background-color": variables.offBlue
    }}
  >
    <List variant="unstyled">
      <ListItem>
        <Link to="/learning/content/">Content Home</Link>
      </ListItem>
      <ListItem>
        <Link to="/learning/content/images">Images</Link>
      </ListItem>
    </List>
  </div>
);

export default SideNavigation;
