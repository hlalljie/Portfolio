// External Imports
import { useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';

// Internal Imports
// Hooks
import usePayloadData from '@/hooks/usePayloadData';
// Layouts
import Header from '@/Components/shared/layout/Header';
import SharedBackground from '@/Components/shared/layout/SharedBackground';
import Footer from '@/Components/shared/layout/Footer';
// Sections
import HeroBanner from './HomeHeroBanner';
import HomeExperience from './HomeExperience/HomeExperience';
import HomeFeaturedProjects from './HomeFeaturedProjects';
import HomeAbout from './HomeAbout';
import HomeContact from './HomeContact';
// UI
import LoadingScreen from '@/Components/shared/ui/LoadingScreen';

const StyledHome = styled.div`
  width: 100%;
  .bottomBackground {
    filter: grayscale(40%);
    .overlay {
      background: linear-gradient(
        to bottom,
        ${({ theme }) => theme.withOpacity(theme.colors.black, 1)} 0%,
        ${({ theme }) => theme.withOpacity(theme.colors.black, 0.7)} 50%,
        ${({ theme }) => theme.withOpacity(theme.colors.black, 0.4)} 85%,
        transparent 95%
      );
    }
  }
`;

/**
 * Home: Home Page
 * @returns {JSX.Element}
 */
function Home() {
  const id = 'homepage';

  const initialFetchRef = useRef(null);

  const hookOptions = useMemo(
    () => ({
      type: 'global',
      id: id,
      resources: [
        {
          type: 'global',
          slug: id,
        },
      ],
    }),
    []
  );

  // Load page data
  const { loading, fetchData, pageData } = usePayloadData(hookOptions);

  useEffect(() => {
    if (!initialFetchRef.current !== id) {
      fetchData();
      initialFetchRef.current = id;
    }
  }, [fetchData]);

  if (
    loading ||
    !pageData ||
    pageData?.global === undefined ||
    pageData?.global[id] === undefined
  ) {
    console.log('Loading homepage, data:', pageData);
    return <LoadingScreen />;
  }

  const homepageData = pageData['global'][id];

  return (
    <StyledHome>
      <SharedBackground
        backgroundImageData={
          homepageData['sharedImages']['homeHeroBannerImage']
        }
        className="topBackground"
      >
        <Header />
        <HeroBanner />
        <HomeExperience />

        <HomeFeaturedProjects />
      </SharedBackground>
      <SharedBackground
        backgroundImageData={
          homepageData['sharedImages']['homeBottomBackgroundImage']
        }
        imgPosition="0% 60%"
        className="bottomBackground"
      >
        <HomeAbout />
        <HomeContact />
        <Footer />
      </SharedBackground>
    </StyledHome>
  );
}

export default Home;
