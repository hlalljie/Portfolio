// External Imports
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { css, styled } from 'styled-components';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';
// Layouts
import ThemedSection from '@/Components/shared/layout/ThemedSection';
// UI Subcomponents
import ExperienceSelector from './ExperienceSelector';
import ExperienceAccordion from './ExperienceAccordion';
// Styles
import { tablet, breakpoints } from '@/styles/mediaQueries';
import { fadeIn } from '@/styles/animations';

const homeExperienceStyles = css`
  ${({ theme }) => css`
    padding: ${theme.padding.largeSection};
    .sectionTitle {
      text-align: center;
      margin: 0;
      color: ${theme.colors.darkAccent};
    }
    /* Tablet and smaller */
    ${tablet(css`
      .sectionTitle {
        text-align: left;
        color: ${theme.colors.black};
      }
    `)}
  `}
`;

const AnimatedHomeExperience = styled.div`
  ${({ $inView }) => css`
    opacity: ${$inView ? 1 : 0};
    animation: ${$inView
      ? css`
          ${fadeIn} 1s ease-in-out
        `
      : 'none'};
  `}
`;

/**
 * Home Experience: Home Experience Section
 * @returns {JSX.Element}
 */
function HomeExperience() {
  const isTablet = useMediaQuery({
    query: '(max-width: ' + breakpoints.tablet + 'px)',
  });

  // Get context data
  const { pageData, dataLoading } = useContext(AppContext);

  if (dataLoading || !pageData) {
    return <div>Loading...</div>;
  }

  const sectionData = pageData['homeExperience'];
  const { experienceItems } = sectionData; // TODO: use static data for rendering components
  return (
    <ThemedSection
      themeName="light"
      additionalStyles={homeExperienceStyles}
      id="experience"
    >
      {(inView) => (
        <AnimatedHomeExperience $inView={inView}>
          <h2 className="sectionTitle">{sectionData['title']}</h2>
          {isTablet ? (
            <ExperienceAccordion experienceItems={experienceItems} />
          ) : (
            <ExperienceSelector experienceItems={experienceItems} />
          )}
        </AnimatedHomeExperience>
      )}
    </ThemedSection>
  );
}

export default HomeExperience;
