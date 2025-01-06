import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

function SeoMeta() {
  return (
    <HelmetProvider>
    <Helmet>
      <meta property="og:image" content="https://gikonst.github.io/george-portfolio/preview.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gikonst.github.io/george-portfolio" />
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      
    </Helmet>
    </HelmetProvider>
  );
}

export default SeoMeta;
