import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

function SeoMeta() {
  return (
    <HelmetProvider>
    <Helmet>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://gikonst.github.io/george-portfolio/prevImg.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gikonst.github.io/george-portfolio"/>
      <meta property="og:title" content="George's Portfolio Website"/>
      <meta property="og:description" content="Explore George's projects, skills, and portfolio."/>
    </Helmet>
    </HelmetProvider>
  );
}

export default SeoMeta;
