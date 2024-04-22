import ThemedSection from "../../Components/Sections/ThemedSection";
import { css } from "styled-components";

const homeFeaturedProjectsStyles = css`
  background: linear-gradient(
    0deg,
    ${(props) => props.theme.colors.black},
    transparent
  );
`;

/**
 * Home Featured Projects: Home Featured Projects Section
 * @returns {JSX.Element}
 */
function HomeFeaturedProjects() {
  return (
    <ThemedSection
      themeName="dark"
      additionalStyles={homeFeaturedProjectsStyles}
      className="overlay"
    >
      Home Featured Projects
    </ThemedSection>
  );
}

export default HomeFeaturedProjects;
