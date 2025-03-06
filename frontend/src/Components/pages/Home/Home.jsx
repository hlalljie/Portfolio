// External Imports
import styled from 'styled-components';

// Internal Imports
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
  return (
    <StyledHome>
      <SharedBackground imgName="heroBanner" imgExtension=".jpeg">
        <Header />
        <HeroBanner />
        <HomeExperience />

        <HomeFeaturedProjects />
      </SharedBackground>
      <SharedBackground
        imgName="homeBottomBackground"
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
