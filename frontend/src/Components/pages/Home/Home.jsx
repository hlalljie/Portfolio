// External Imports
import { useEffect } from 'react';
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
  // Load page data
  const { loading, fetchData, pageData } = usePayloadData({
    type: 'global',
    slug: 'homepage',
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (
    loading ||
    !pageData ||
    pageData?.globalType === undefined ||
    pageData.globalType !== 'homepage'
  ) {
    return <LoadingScreen />;
  }

  return (
    <StyledHome>
      <SharedBackground
        backgroundImageData={pageData['sharedImages']['homeHeroBannerImage']}
        className="topBackground"
      >
        <Header />
        <HeroBanner />
        <HomeExperience />

        <HomeFeaturedProjects />
      </SharedBackground>
      <SharedBackground
        backgroundImageData={
          pageData['sharedImages']['homeBottomBackgroundImage']
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
