// PortfolioFrontend/src/pages/HomeSections/HeroBanner.jsx
import ThemedSection from "../../Components/Sections/ThemedSection";
import { css } from "styled-components";

const heroBannerStyles = css`
  padding: ${(props) => props.theme.padding.largeSection};
  .bannerContent {
    display: flex;
    align-items: center;
    justify-content: left;
    min-height: calc(100vh - 40px);
    .textContainer {
      background-color: ${(props) => props.theme.colors.fog};
      box-shadow: 0px 0 120px 120px ${(props) => props.theme.colors.fog};
      padding: 10px 0;
      width: 40%;
      > h1 {
        color: ${(props) => props.theme.colors.dark};
      }
      .subHeadingWrapper {
        display: flex;
        justify-content: left;
        gap: 30px;
        > h3 {
          margin: 0 0 0 0;
          color: ${(props) => props.theme.colors.darkAccent};
        }
      }
    }
  }
`;

/**
 * HeroBanner: Home Hero Banner Section
 * @returns {JSX.Element}
 */
function HeroBanner() {
  return (
    <ThemedSection themeName="light" additionalStyles={heroBannerStyles}>
      <div className="bannerContent">
        <div className="textContainer">
          <h1>Hi, I'm Hayden</h1>
          <div className="subHeadingWrapper">
            <h3> Developer</h3>
            <h3 className="tree">↟</h3>
            <h3>Designer</h3>
            <h3 className="tree">↟</h3>
            <h3>Educator</h3>
          </div>
          <p className="p1">
            I'm passionate about creating solutions through programming and
            design, and empowering others through education and mentorship.
          </p>
        </div>
      </div>
    </ThemedSection>
  );
}

export default HeroBanner;
