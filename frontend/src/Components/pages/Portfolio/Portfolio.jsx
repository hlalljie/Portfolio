// External Imports
import { useEffect, useContext, useMemo, useRef } from 'react';
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

const StyledPortfolio = styled.div`
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
 * Portfolio: Portfolio Page listing all professional projects
 * @returns {JSX.Element}
 */
function Portfolio() {
  const { useStaticData } = useContext(AppContext);

  const id = 'portfolio';

  const initialFetchRef = useRef(null);

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
  const { loading, fetchData, pageData } = usePayloadData(hookOptions);

  // Only call fetchData once
  useEffect(() => {
    if (!initialFetchRef.current !== id) {
      fetchData();
      initialFetchRef.current = id;
    }
  }, [fetchData]);

  if (
    loading ||
    !pageData ||
    pageData?.global === undefined ||
    pageData?.collection === undefined ||
    pageData.global[id] === undefined ||
    pageData.collection['projects'] === undefined
  ) {
    console.log('Page data not correct:', pageData);
    return <LoadingScreen />;
  }

  const portfolioData = pageData.global[id];
  const projectsData = pageData.collection['projects'];

  const projects = projectsData.docs.filter(
    (project) => project.type === 'professional'
  );

  return (
    <StyledPortfolio
      className="dark-section"
      $backgroundImageData={portfolioData['backgroundImage']}
      $useStaticData={useStaticData}
    >
      <Header variant={'light'} overlapTopSection={false} />
      <h1>{portfolioData.title}</h1>
      <ProjectList
        projectData={projects}
        cols={3}
        variant={'light'}
        hideLinks
      />
    </StyledPortfolio>
  );
}

export default Portfolio;
