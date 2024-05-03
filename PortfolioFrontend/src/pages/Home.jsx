//\\ PortfolioFrontend/src/pages/Home.jsx //\\

/// Imports \\\
import styled from "styled-components";

/// Components \\\
import SharedBackground from "../Components/Wrappers/SharedBackground";

// Sections
import Header from "../Components/Sections/Header";
import HeroBanner from "./HomeSections/HeroBanner";
import HomeExperience from "./HomeSections/HomeExperience";
import HomeFeaturedProjects from "./HomeSections/HomeFeaturedProjects";
import HomeAbout from "./HomeSections/HomeAbout";
import HomeContact from "./HomeSections/HomeContact";
import Footer from "../Components/Sections/Footer";

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
      <SharedBackground
        backgroundImage={
          "https://images.unsplash.com/photo-1542572937-0913e7e3e61b?w=2500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPVjV0MGpSVTFqVXx8ZW58MHx8fHx8"
        }
      >
        <Header />
        <HeroBanner />
        <HomeExperience />

        <HomeFeaturedProjects />
      </SharedBackground>
      <SharedBackground
        backgroundImage="./src/assets/homeBottomBackground.jpg"
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
