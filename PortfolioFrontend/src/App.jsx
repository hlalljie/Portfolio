//import { useState } from 'react'

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet";

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

function App() {
  return (
    <>
      <Helmet>
        <title>Hayden Lalljie</title>
        <meta
          name="description"
          content="Hayden Lalljie is a web developer, web designer and educator who creates solutions through programming, and user-centric design while empowering others though education and mentorship"
        />
      </Helmet>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
