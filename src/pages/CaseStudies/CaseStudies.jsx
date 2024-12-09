import { styled, css } from 'styled-components';
import Header from '@/Components/Sections/Header';
import ProjectList from '@/Components/UI/ProjectList';
import PortfolioItems from '@/data/PortfolioItems.jsx';

const StyledCaseStudies = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    min-height: 100vh;
    .projectList {
      padding: ${theme.padding.fullWidthSection};
    }
  `}
`;

/**
 * CaseStudies: Case Studies Page listing all case studies
 * @returns {JSX.Element}
 */
function CaseStudies() {
  return (
    <StyledCaseStudies>
      <Header variant={'light'} overlapTopSection={false} />
      <ProjectList cols={4} gap={35} variant={'light'} hideLinks hideExcerpt />
    </StyledCaseStudies>
  );
}

export default CaseStudies;
