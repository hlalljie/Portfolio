import { useMediaQuery } from "react-responsive";
import ThemedSection from "../../Components/Sections/ThemedSection";
import { css } from "styled-components";
import ExperienceSelector from "../../Components/UI/ExperienceSelector";
import ExperienceAccordion from "../../Components/UI/ExperienceAccordion";
import { tablet, breakpoints } from "../../styles/mediaQueries";

const homeExperienceStyles = css`
  padding: ${(props) => props.theme.padding.largeSection};
  .sectionTitle {
    text-align: center;
    margin: 0;
    color: ${(props) => props.theme.colors.darkAccent};
  }
  ${tablet(css`
    .sectionTitle {
      text-align: left;
      color: ${(props) => props.theme.colors.black};
    }
  `)}// mobile
`;

/**
 * Home Experience: Home Experience Section
 * @returns {JSX.Element}
 */
function HomeExperience() {
  const isTablet = useMediaQuery({
    query: "(max-width: " + breakpoints.tablet + "px)",
  });
  return (
    <ThemedSection
      themeName="light"
      additionalStyles={homeExperienceStyles}
      id="experience"
    >
      <h2 className="sectionTitle">Experience</h2>
      {isTablet ? <ExperienceAccordion /> : <ExperienceSelector />}
    </ThemedSection>
  );
}

export default HomeExperience;