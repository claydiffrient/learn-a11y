import React from "react";
import Helmet from "react-helmet";
import Button from "@instructure/ui-buttons/lib/components/Button";
import { push } from "gatsby";

import theme from "@instructure/ui-themes/lib/canvas";
import variables from "../../utils/variables";
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
    <div
      css={{
        display: "grid",
        height: "100vh",
        "grid-template-columns": "repeat(4, 1fr)",
        "grid-gap": "10px",
        "grid-auto-rows": "auto",
        "grid-template-areas": `
        '. hero hero .'
        '. hero hero .'
        '. hero hero .'
      `
      }}
    >
      <div
        css={{
          "grid-area": "hero",
          "align-self": "center",
          "justify-self": "center"
        }}
      >
        <div
          css={{
            display: "grid",
            height: "100%",
            "grid-template-rows": "repeat(4, 1fr)",
            "grid-template-areas": `
              '. title title .'
              'subtitle subtitle subtitle subtitle'

              'cta1 . . cta2'
            `
          }}
        >
          <header
            css={{
              "grid-area": "title",
              "align-self": "center",
              "justify-self": "center"
            }}
          >
            <h1
              css={{
                color: variables.mainWhiteColor,
                "font-size": "5em"
              }}
            >
              learn a11y
            </h1>
          </header>
          <div
            css={{
              "grid-area": "subtitle",
              "align-self": "center",
              "justify-self": "center",
              "font-size": "2em",
              "text-align": "center"
            }}
          >
            Your source on how to be a better content creator and web developer
            focused on accessibility!
          </div>
          <div
            css={{
              "grid-area": "cta1",
              "align-self": "center",
              "justify-self": "center",
              "text-align": "center"
            }}
          >
            <div css={{ "margin-bottom": "3px" }}>Content Creator?</div>
            <Button
              onClick={() => {
                push("/learning/content");
              }}
              {...ctaButtonProps}
            >
              Learn More
            </Button>
          </div>
          <div
            css={{
              "grid-area": "cta2",
              "align-self": "center",
              "justify-self": "center",
              "text-align": "center"
            }}
          >
            <div css={{ "margin-bottom": "3px" }}>Web Developer?</div>
            <div>Coming Soon!</div>
          </div>
        </div>
      </div>
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
