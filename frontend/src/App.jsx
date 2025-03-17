// External Imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';

// Internal Imports
// Pages
import Home from '@/Components/pages/Home/Home';
import Portfolio from '@/Components/pages/Portfolio/Portfolio';
import Projects from '@/Components/pages/Projects/Projects';
import Project from '@/Components/pages/Project/Project';
import ErrorPage from '@/Components/pages/ErrorPage/ErrorPage';
// Styles
import GlobalStyle from './GlobalStyles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/projects',
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/portfolio/:projectSlug',
    element: <Project />,
    errorElement: <ErrorPage />,
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
