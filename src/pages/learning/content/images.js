import React from "react";
import Layout from "../../../components/layouts/layout";

const ImagesPage = () => (
  <Layout>
    <div>
      <h2>Images</h2>
      <p>
        One of the easiest ways to make sure the content you create is
        accessible is through good alternative text (alt text). Alt text is
        placed on images so that screenreaders can read a description of the
        image.
      </p>
      <iframe
        css={{
          display: "block",
          margin: "0 auto"
        }}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UeGfWJMcaLw?rel=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
    </div>
  </Layout>
);

export default ImagesPage;
