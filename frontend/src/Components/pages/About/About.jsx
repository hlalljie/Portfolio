// External Imports
import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

// Internal Imports
// Hooks
import usePayloadData from '@/hooks/usePayloadData';
// Layouts
import Header from '@/Components/shared/layout/Header';
import SharedBackground from '@/Components/shared/layout/SharedBackground';
import Footer from '@/Components/shared/layout/Footer';
// Sections
import AboutHero from './AboutHero';
import HomeExperience from '@/Components/pages/Home/HomeExperience/HomeExperience';
import AboutSideCard from './AboutSideCard';
import AboutTestimonial from './AboutTestimonial';
import AboutCTA from './AboutCTA';
// UI
import LoadingScreen from '@/Components/shared/ui/LoadingScreen';
// Static image data — reuse same images as Services page
import servicesData from '@/data/globals/services.json';

const StyledAbout = styled.div`
  width: 100%;

  /*
   * Main content background: heroImage with a light wash.
   * Starts fully transparent (image visible at top), builds to a consistent
   * ~50% white wash so dark text stays readable throughout.
   */
  .mainBackground {
    filter: grayscale(40%);
    .overlay {
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(245, 245, 245, 0.12) 15%,
        rgba(245, 245, 245, 0.2) 38%,
        rgba(245, 245, 245, 0.22) 55%,
        rgba(245, 245, 245, 0.82) 78%,
        rgba(245, 245, 245, 1) 100%
      );
    }
  }

  /*
   * CTA background: bottomImage. Solid white at the very top so it blends
   * seamlessly from the content above, then the image reveals as it fades out.
   */
  .ctaBackground {
    filter: grayscale(40%);
    .overlay {
      background: linear-gradient(
        to bottom,
        rgba(245, 245, 245, 1) 0%,
        rgba(245, 245, 245, 0.82) 30%,
        rgba(245, 245, 245, 0.75) 68%,
        rgba(245, 245, 245, 0.62) 76%,
        rgba(245, 245, 245, 0.42) 83%,
        rgba(245, 245, 245, 0.18) 91%,
        rgba(245, 245, 245, 0.05) 97%,
        transparent 100%
      );
    }
  }
`;

/**
 * About: About Page
 * @returns {JSX.Element}
 */
function About() {
  const id = 'homepage';

  const hookOptions = useMemo(
    () => ({
      type: 'global',
      id,
      resources: [
        {
          type: 'global',
          slug: id,
        },
      ],
    }),
    []
  );

  const { loading, pageData } = usePayloadData(hookOptions);

  if (
    loading ||
    !pageData ||
    pageData?.global === undefined ||
    pageData?.global[id] === undefined
  ) {
    return <LoadingScreen />;
  }

  return (
    <StyledAbout>
      <Helmet>
        <title>About | Hayden Lalljie</title>
        <meta
          name="description"
          content="Learn about Hayden Lalljie — a software developer and educator with a passion for creating impact through programming, user-centric design, and education."
        />
        <meta property="og:title" content="About | Hayden Lalljie" />
        <meta
          property="og:description"
          content="Learn about Hayden Lalljie — a software developer and educator with a passion for creating impact through programming, user-centric design, and education."
        />
        <meta property="og:url" content="https://haydenlalljie.com/about" />
      </Helmet>

      {/* One background image behind all main content sections */}
      <SharedBackground
        backgroundImageData={servicesData['sharedImages']['heroImage']}
        className="mainBackground"
      >
        <Header variant="dark" transparent />
        <AboutHero />
        <HomeExperience />
        <AboutSideCard />
        <AboutTestimonial />
      </SharedBackground>

      {/* Separate background for the CTA — blends in from white at the top */}
      <SharedBackground
        backgroundImageData={servicesData['sharedImages']['bottomImage']}
        imgPosition="0% 60%"
        className="ctaBackground"
      >
        <AboutCTA />
        <Footer variant="dark" />
      </SharedBackground>
    </StyledAbout>
  );
}

export default About;
