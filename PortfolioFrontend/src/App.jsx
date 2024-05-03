//import { useState } from 'react'

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyle from "./GlobalStyles";

// Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

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
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
