import React from "react";
import Helmet from "react-helmet";
import Flex, { FlexItem } from "@instructure/ui-layout/lib/components/Flex";
import Heading from "@instructure/ui-elements/lib/components/Heading";
import Text from "@instructure/ui-elements/lib/components/Text";
import Button from "@instructure/ui-buttons/lib/components/Button";
import { push } from "gatsby";

import theme from "@instructure/ui-themes/lib/canvas";
import variables from "../../utils/variables";
import { StaticQuery, graphql } from "gatsby";

theme.use();

const ctaButtonProps = {
  size: "small"
}

const Header = () => (
  <div
    css={{
      "background-color": variables.mainBlueColor,
      color: variables.mainWhiteColor
    }}
  >
    <div css={{
      'display': 'grid',
      'grid-template-columns': 'repeat(4, 1fr)',
      'grid-gap': '10px',
      'grid-auto-rows': '200px',
      'grid-template-areas': `
        '. a a .'
        '. a a .'
      `
    }}>
      <div css={{
        'grid-area': 'a',
        'align-self': 'center',
        'justify-self': 'center'
      }}>a</div>
    </div>
  </div>
);

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LandingPageSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
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
        <div>{children}</div>
      </>
    )}
  />
);
