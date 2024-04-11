import ThemedSection from '../../Components/Sections/ThemedSection';
import { css } from 'styled-components';

const homeAboutStyles = css`

`;

/**
 * Home Experience: Home Experience Section
 * @returns {JSX.Element}
 */
function HomeAbout() {
    return (
        <ThemedSection themeName="light" additionalStyles={homeAboutStyles}>
            Home About
        </ThemedSection>
    )
}

export default HomeAbout;