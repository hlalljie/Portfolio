/* Libraries */
import { useMediaQuery } from "react-responsive";
import { css, styled } from "styled-components";
/* Components */
import ThemedSection from "../../Components/Sections/ThemedSection";
import ExperienceSelector from "../../Components/UI/ExperienceSelector";
import ExperienceAccordion from "../../Components/UI/ExperienceAccordion";
/* Styles */
import { tablet, breakpoints } from "../../styles/mediaQueries";
import { fadeIn } from "../../styles/animations";

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

const AnimatedHomeExperience = styled.div`
  opacity: ${(props) => (props.$inView ? 1 : 0)};
  animation: ${(props) =>
    props.$inView
      ? css`
          ${fadeIn} 1s ease-in-out
        `
      : "none"};
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
      {(inView) => (
        <AnimatedHomeExperience $inView={inView}>
          <h2 className="sectionTitle">Experience</h2>
          {isTablet ? <ExperienceAccordion /> : <ExperienceSelector />}
        </AnimatedHomeExperience>
      )}
    </ThemedSection>
  );
}

export default HomeExperience;
