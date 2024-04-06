// PortfolioFrontend/src/pages/Home.jsx
//import styled from "styled-components";
// Components
import Header from "../Components/Sections/Header";
import HeroBanner from "./HomeSections/HeroBanner";
//import ThemedSection from "../Components/Sections/ThemedSection";
import SharedBackground from "../Components/Wrappers/SharedBackground";

/**
 * Home: Home Page
 * @returns {JSX.Element}
 */
function Home() {
  return (
    <SharedBackground backgroundImage={"https://images.unsplash.com/photo-1542572937-0913e7e3e61b?w=2500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPVjV0MGpSVTFqVXx8ZW58MHx8fHx8"}>
      <Header />
      <HeroBanner />
      {/* 
      <About/>
      <Experience/>
      <Projects/>
      <Contact/> 
      */}
    </SharedBackground>
  );
}





export default Home;
