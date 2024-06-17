//import { useState } from 'react'

// Libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

import GlobalStyle from "./GlobalStyles";
import CaseStudyTemplate from "./Components/UI/CaseStudyTemplate";

// Page Imports
import Home from "./pages/Home";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "caseStudies/:caseStudyId",
    element: <CaseStudyTemplate />,
  },
]);

/**
 * App: Main App
 * @returns {JSX.Element}
 */
function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Hayden Lalljie</title>
          <meta
            name="description"
            content="Hayden Lalljie is a web developer, web designer and educator who creates solutions through programming, and user-centric design while empowering others though education and mentorship"
          />
          {/* Open Graph meta tags */}
          <meta property="og:title" content="Hayden Lalljie" />
          <meta
            property="og:description"
            content="Hayden Lalljie is a web developer, web designer and educator who creates solutions through programming, and user-centric design while empowering others though education and mentorship"
          />
          <meta property="og:url" content="https://haydenlalljie.com" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/hl_favicon192w.png" />
          <meta property="og:image:width" content="192" />
          <meta property="og:image:height" content="192" />

          {/* Twitter Card meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Hayden Lalljie" />
          <meta
            name="twitter:description"
            content="Hayden Lalljie is a web developer, web designer and educator who creates solutions through programming, and user-centric design while empowering others though education and mentorship"
          />
          <meta name="twitter:image" content="/images/hl_favicon192w.png" />
          <link
            rel="icon"
            sizes="16x16"
            type="image/png"
            href="/images/hl_favicon16w.png"
          />
          <link
            rel="icon"
            sizes="32x32"
            type="image/png"
            href="/images/hl_favicon32w.png"
          />
          <link
            rel="icon"
            sizes="192x192"
            type="image/png"
            href="/images/hl_favicon192w.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            type="image/png"
            href="/images/hl_favicon180w.png"
          />
        </Helmet>

        <GlobalStyle />
        <RouterProvider router={router} />
        <Analytics />
      </HelmetProvider>
    </>
  );
}

export default App;
