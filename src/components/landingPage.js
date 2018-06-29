import React from "react";
import Helmet from "react-helmet";
import Flex, { FlexItem } from "@instructure/ui-layout/lib/components/Flex";
import Heading from "@instructure/ui-elements/lib/components/Heading";
import Text from "@instructure/ui-elements/lib/components/Text";
import Button from "@instructure/ui-buttons/lib/components/Button";
import { push } from "gatsby";

import theme from "@instructure/ui-themes/lib/canvas";
import variables from "../utils/variables";
import { StaticQuery, graphql } from "gatsby";

theme.use();

const ctaButtonProps = {
  size: "small"
};

const Header = () => (
  <div
    css={{
      "background-color": variables.mainBlueColor,
      color: variables.mainWhiteColor
    }}
  >
    <Flex height="100vh" justifyItems="center" padding="large">
      <FlexItem shrink grow textAlign="center">
        <Heading
          theme={{
            h1FontSize: "4rem"
          }}
          level="h1"
          margin="0 0 medium"
        >
          learn a11y
        </Heading>

        <Flex wrapItems justifyItems="space-around" margin="0 0 medium">
          <FlexItem padding="small">
            <Text size="large" as="div">
              Your source on how to be a better content creator and web
              developer
            </Text>
          </FlexItem>
        </Flex>

        <Flex wrapItems justifyItems="space-around" margin="0 0 medium">
          <FlexItem padding="small">
            <Text size="medium" as="div">
              Content Creator?
            </Text>
            <Button
              onClick={() => {
                push("/learning/content");
              }}
              {...ctaButtonProps}
            >
              Learn More
            </Button>
          </FlexItem>
          <FlexItem padding="small">
            <Text size="medium" as="div">
              Web Developer?
            </Text>
            <Text size="small" as="div">
              Coming Soon!
            </Text>
          </FlexItem>
        </Flex>

        <div />
      </FlexItem>
    </Flex>
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
