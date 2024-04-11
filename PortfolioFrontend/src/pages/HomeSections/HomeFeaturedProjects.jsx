import ThemedSection from '../../Components/Sections/ThemedSection';
import { css } from 'styled-components';

const homeFeaturedProjectsStyles = css`

`;

/**
 * Home Featured Projects: Home Featured Projects Section
 * @returns {JSX.Element}
 */
function HomeFeaturedProjects() {
    return (
        <ThemedSection themeName="light" additionalStyles={homeFeaturedProjectsStyles}>
            Home Featured Projects
        </ThemedSection>
    )
}

export default HomeFeaturedProjects;