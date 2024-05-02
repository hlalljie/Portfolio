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
  .bottomBackground .overlay {
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.withOpacity(theme.colors.black, 1)},
      ${({ theme }) => theme.withOpacity(theme.colors.black, 0.9)} 10%,
      ${({ theme }) => theme.withOpacity(theme.colors.black, 0.85)} 60%,
      ${({ theme }) => theme.withOpacity(theme.colors.black, 0.7)} 70%,
      transparent 80%
    );
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
        backgroundImage="./src/assets/homeBottomBanner.jpg"
        imgPosition="bottom"
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
