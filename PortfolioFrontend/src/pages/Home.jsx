//\\ PortfolioFrontend/src/pages/Home.jsx //\\

/// Unused Imports \\\
//import styled from "styled-components";
//import ThemedSection from "../Components/Sections/ThemedSection";

/// Components \\\
import Header from "../Components/Sections/Header";
import SharedBackground from "../Components/Wrappers/SharedBackground";
// Sections
import HeroBanner from "./HomeSections/HeroBanner";
import HomeExperience from "./HomeSections/HomeExperience";
import HomeFeaturedProjects from "./HomeSections/HomeFeaturedProjects";
import HomeAbout from "./HomeSections/HomeAbout";
/**
 * Home: Home Page
 * @returns {JSX.Element}
 */
function Home() {
  return (
    <>
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
      {/* <HomeAbout /> */}
    </>
  );
}

export default Home;
