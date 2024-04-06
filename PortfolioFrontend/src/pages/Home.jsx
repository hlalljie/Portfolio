// PortfolioFrontend/src/pages/Home.jsx
import {styled, css} from "styled-components";
// Components
import Header from "../Components/Sections/Header";
import ThemedSection from "../Components/Sections/ThemedSection";
import HeroBanner from "./HomeSections/HeroBanner";

function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
    </div>
  );
}

export default Home;
