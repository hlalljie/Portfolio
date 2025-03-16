// External Imports
import { useEffect } from 'react';
import { styled, css } from 'styled-components';

// Internal Imports
// Hooks
import usePayloadData from '@/hooks/usePayloadData';
// Layouts
import Header from '@/Components/shared/layout/Header';
// Display
import ProjectList from '@/Components/shared/display/ProjectList';
// UI
import LoadingScreen from '@/Components/shared/ui/LoadingScreen';

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
      background-image: url('/images/heroBanner2400w.jpeg');
      background-size: cover;
    }
    .projectList {
      padding: ${theme.padding.largeSection};
    }
  `}
`;

/**
 * Portfolio: Portfolio Page listing all professional projects
 * @returns {JSX.Element}
 */
function Portfolio() {
  const { loading, fetchData, pageData } = usePayloadData({
    type: 'collection',
    slug: 'projects',
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading || !pageData || pageData?.docs === undefined) {
    return <LoadingScreen />;
  }

  return (
    <StyledPortfolio>
      <Header variant={'light'} overlapTopSection={false} />
      <ProjectList
        projectData={pageData.docs}
        cols={3}
        variant={'light'}
        hideLinks
      />
    </StyledPortfolio>
  );
}

export default Portfolio;
