import ThemedSection from "../../Components/Sections/ThemedSection";
import { css } from "styled-components";

const homeFeaturedProjectsStyles = css`
  background: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => theme.withOpacity(theme.colors.fog, 0.2)} 5%,

    ${({ theme }) => theme.withOpacity(theme.colors.black, 0.8)} 40%,
    ${({ theme }) => theme.withOpacity(theme.colors.black, 1)} 90%
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
