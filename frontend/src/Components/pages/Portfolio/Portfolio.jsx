// External Imports
import { useEffect, useContext, useState } from 'react';
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
// Utils
import dataCache from '@/utils/dataCache';
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

  const [projectsData, setProjectsData] = useState(null);
  const [portfolioData, setPortfolioData] = useState(null);

  // Use separate variable names for each hook call
  const {
    loading: projectsLoading,
    fetchData: fetchProjects,
    pageData: projectsDataUpdate,
  } = usePayloadData({
    type: 'collection',
    slug: 'projects',
  });

  const {
    loading: portfolioLoading,
    fetchData: fetchPortfolio,
    pageData: portfolioDataUpdate,
  } = usePayloadData({
    type: 'global',
    slug: 'portfolio',
  });

  // First fetch projects
  useEffect(() => {
    let isMounted = true;
    /**
     * fetchData: Function to time fetches to portfolio and projects
     * @returns {Promise<void>}
     */
    const fetchData = async () => {
      await fetchPortfolio();
      if (isMounted) {
        await fetchProjects();
      }
      // Only fetch portfolio data if component is still mounted
    };

    fetchData();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get data from cache
  useEffect(() => {
    setProjectsData(
      dataCache.get(dataCache.createKey('collection', 'projects'))
    );
    setPortfolioData(dataCache.get(dataCache.createKey('global', 'portfolio')));
  }, [projectsDataUpdate, portfolioDataUpdate]);
  // Check loading state and data availability for both
  if (
    projectsLoading ||
    portfolioLoading ||
    !projectsData ||
    !portfolioData ||
    projectsData?.docs === undefined
  ) {
    return <LoadingScreen />;
  }

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
