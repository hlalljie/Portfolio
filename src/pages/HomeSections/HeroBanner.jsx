// PortfolioFrontend/src/pages/HomeSections/HeroBanner.jsx
import ThemedSection from "../../Components/Sections/ThemedSection";
import { css } from "styled-components";
import { tablet } from "../../styles/mediaQueries";
import { fadeIn, comeFromLeft } from "../../styles/animations";

const heroBannerStyles = css`
  padding: ${(props) => props.theme.padding.largeSection};

  .bannerContent {
    display: flex;
    align-items: center;
    justify-content: left;
    min-height: calc(100vh - 40px);

    .textContainer {
      background-color: ${(props) => props.theme.colors.fog};
      width: 50%;
      box-shadow: 0px 0 120px 120px ${(props) => props.theme.colors.fog};
      animation: ${comeFromLeft} 2s, ${fadeIn} 2.5s ease-in-out forwards;
      padding: 10px 0;
      > h1 {
        color: ${(props) => props.theme.colors.dark};
      }
      .subHeadingWrapper {
        display: flex;
        justify-content: left;
        column-gap: 30px;
        > h3 {
          margin: 0 0 0 0;
          color: ${(props) => props.theme.colors.darkAccent};
        }
      }
    }
  }
  ${tablet(css`
    padding: 55px 7%;
    &.largeSection {
      min-height: 0;
    }

    .bannerContent {
      min-height: 0;
      .textContainer {
        width: 100%;
        .subHeadingWrapper {
          text-align: center;
          column-gap: 15px;
          flex-wrap: wrap;

          .tree {
            display: none;
          }
        }
      }
    }
  `)}
`;

/**
 * HeroBanner: Home Hero Banner Section
 * @returns {JSX.Element}
 */
function HeroBanner() {
  return (
    <ThemedSection themeName="light" additionalStyles={heroBannerStyles}>
      {(inView) => (
        <div className="bannerContent">
          <div className="textContainer">
            <h1>Hi, I'm Hayden</h1>
            <div className="subHeadingWrapper">
              <h3>
                {" "}
                Developer<span className="mobileOnly">,</span>
              </h3>
              <h3 className="tree">↟</h3>
              <h3>
                Designer<span className="mobileOnly">,</span>
              </h3>
              <h3 className="tree">↟</h3>
              <h3>Educator</h3>
            </div>
            <p className="largeP">
              I'm passionate about creating solutions through programming and
              design, and empowering others through education and mentorship.
            </p>
          </div>
        </div>
      )}
    </ThemedSection>
  );
}

export default HeroBanner;
