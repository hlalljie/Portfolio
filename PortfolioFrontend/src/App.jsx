//import { useState } from 'react'

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import GlobalStyle from "./GlobalStyles";

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
          <link
            rel="icon"
            sizes="16x16"
            type="image/png"
            href="./src/assets/hl_favicon16w.png"
          />
          <link
            rel="icon"
            sizes="32x32"
            type="image/png"
            href="./src/assets/hl_favicon32w.png"
          />
          <link
            rel="icon"
            sizes="192x192"
            type="image/png"
            href="./src/assets/hl_favicon192w.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            type="image/png"
            href="./src/assets/hl_favicon180w.png"
          />
        </Helmet>

        <GlobalStyle />
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
