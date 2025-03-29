// External Imports
import { useContext, useMemo } from 'react';
import { styled, css } from 'styled-components';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';
// Hooks
import usePayloadData from '@/hooks/usePayloadData';
// Layouts
import Header from '@/Components/shared/layout/Header';
// Display
import ProjectList from '@/Components/shared/display/ProjectList';
// UI
import LoadingScreen from '@/Components/shared/ui/LoadingScreen';
// Styles
import { adaptiveBackgroundImage } from '@/styles/adaptiveBackgroundImage';

const StyledProjects = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    /* background-color: ${theme.colors.black}; */
    position: relative;
    /* Background image */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      /* filter: contrast(20%); */
      /* background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
        linear-gradient(${theme.colors.black}, ${theme.colors.black}),
        url('/images//heroBanner2400w.jpeg'); */
      filter: grayscale(100%) contrast(120%) brightness(0.3);
      mix-blend-mode: multiply;
      background-color: ${theme.colors.black};
      ${({ $backgroundImageData, $useStaticData }) =>
        adaptiveBackgroundImage($backgroundImageData, $useStaticData)}
      background-size: cover;
    }
    .projectList {
      padding: ${theme.padding.largeSection};
    }
    h1 {
      color: ${theme.colors.white};
      text-align: center;
      padding-top: 60px;
    }
  `}
`;

/**
 * Projects: Projects Page listing all professional projects
 * @returns {JSX.Element}
 */
function Projects() {
  const { useStaticData } = useContext(AppContext);

  const id = 'projects-page';

  // Memoize the options object
  const hookOptions = useMemo(
    () => ({
      type: 'batch',
      id,
      resources: [
        { type: 'global', slug: id },
        { type: 'collection', slug: 'projects' },
      ],
    }),
    [id]
  );

  // Use the hook as normal
  const { loading, pageData } = usePayloadData(hookOptions);

  if (
    loading ||
    !pageData ||
    pageData?.global === undefined ||
    pageData?.collection === undefined ||
    pageData.global[id] === undefined ||
    pageData.collection['projects'] === undefined
  ) {
    console.log('Loading page data, currently:', pageData);
    return <LoadingScreen />;
  }

  const projectsPageData = pageData.global[id];
  const projectsData = pageData.collection['projects'];

  const projects = projectsData.docs.filter(
    (project) => project.type === 'personal'
  );

  return (
    <StyledProjects
      className="dark-section"
      $backgroundImageData={projectsPageData['backgroundImage']}
      $useStaticData={useStaticData}
    >
      <Header variant="light" transparent overlapTopSection={false} />
      <h1>Personal Projects</h1>
      <ProjectList
        projectData={projects}
        cols={3}
        variant={'light'}
        hideLinks
      />
    </StyledProjects>
  );
}

export default Projects;
