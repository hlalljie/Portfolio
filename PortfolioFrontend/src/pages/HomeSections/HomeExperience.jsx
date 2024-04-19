import ThemedSection from "../../Components/Sections/ThemedSection";
import { css } from "styled-components";
import ExperienceSelector from "../../Components/UI";

const homeExperienceStyles = css`
  padding: ${(props) => props.theme.padding.largeSection};
`;

/**
 * Home Experience: Home Experience Section
 * @returns {JSX.Element}
 */
function HomeExperience() {
  return (
    <ThemedSection themeName="light" additionalStyles={homeExperienceStyles}>
      <h2>Experience</h2>
      <ExperienceSelector />
    </ThemedSection>
  );
}

export default HomeExperience;
