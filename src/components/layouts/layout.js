import React from "react";
import Helmet from "react-helmet";
import Header from "../header";
import { StaticQuery, graphql } from "gatsby";

import theme from "@instructure/ui-themes/lib/canvas";
import SidebarNavigation from "../side-navigation";

theme.use();

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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
        <div css={{ margin: "0 1em" }}>
          <div
            css={{
              display: "grid",
              "grid-template-columns": "1fr 9fr",
              "grid-auto-columns": "auto",
              "grid-template-areas": `
                'nav content'
              `
            }}
          >
            <nav css={{ "grid-area": "nav", "margin-top": "1.45rem" }}>
              <SidebarNavigation />
            </nav>
            <section
              css={{
                "grid-area": "content",
                margin: "0 auto",
                maxWidth: 1200,
                padding: "0px 1.0875rem 1.45rem",
                paddingTop: 0
              }}
            >
              {children}
            </section>
          </div>
        </div>
      </>
    )}
  />
);
