import React from "react";
import Helmet from "react-helmet";
import Button from "@instructure/ui-buttons/lib/components/Button";
import NewsletterForm from "../newsletter-form";
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
      backgroundColor: variables.mainBlueColor,
      color: variables.mainWhiteColor
    }}
  >
    <div
      css={{
        display: "grid",
        height: "100vh",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "10px",
        gridAutoRows: "auto",
        gridTemplateAreas: `
        '. hero hero .'
        '. hero hero .'
        '. hero hero .'
      `
      }}
    >
      <div
        css={{
          gridArea: "hero",
          alignSelf: "center",
          justifySelf: "center"
        }}
      >
        <div
          css={{
            display: "grid",
            height: "100%",
            gridTemplateRows: "repeat(4, 1fr)",
            gridTemplateAreas: `
              '. title title .'
              'subtitle subtitle subtitle subtitle'

              'cta1 . . cta2'
              'newsletter newsletter newsletter newsletter'
            `
          }}
        >
          <header
            css={{
              gridArea: "title",
              alignSelf: "center",
              justifySelf: "center"
            }}
          >
            <h1
              css={{
                color: variables.mainWhiteColor,
                fontSize: "5em"
              }}
            >
              learn a11y
            </h1>
          </header>
          <div
            css={{
              gridArea: "subtitle",
              alignSelf: "center",
              justifySelf: "center",
              fontSize: "2em",
              textAlign: "center"
            }}
          >
            Your source on how to be a better content creator and web developer
            focused on accessibility!
          </div>
          <div
            css={{
              gridArea: "cta1",
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center"
            }}
          >
            <div css={{ marginBottom: "3px" }}>Content Creator?</div>
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
              gridArea: "cta2",
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center"
            }}
          >
            <div css={{ "margin-bottom": "3px" }}>Web Developer?</div>
            <div>Coming Soon!</div>
          </div>
        </div>
        <div
          css={{
            gridArea: "newsletter",
            alignSelf: "center",
            justifySelf: "center",
            textAlign: "center"
          }}
        >
          <NewsletterForm />
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
        >
          <html lang="en" dir="ltr" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
      </>
    )}
  />
);
