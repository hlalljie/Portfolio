import ThemedSection from '../../Components/Sections/ThemedSection';
import { css } from 'styled-components';

const homeExperienceStyles = css`

`;

/**
 * Home Experience: Home Experience Section
 * @returns {JSX.Element}
 */
function HomeExperience() {
    return (
        <ThemedSection themeName="light" additionalStyles={homeExperienceStyles}>
            Home Experience
        </ThemedSection>
    )
}

export default HomeExperience;