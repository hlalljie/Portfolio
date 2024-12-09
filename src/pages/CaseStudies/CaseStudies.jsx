import { styled, css } from 'styled-components';
import Header from '@/Components/Sections/Header';
import ProjectList from '@/Components/UI/ProjectList';

const StyledCaseStudies = styled.div`
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
      filter: grayscale(100%) contrast(100%) brightness(0.15);
      mix-blend-mode: multiply;
      background-color: ${theme.colors.black};
      background-image: url('public/images/heroBanner2400w.jpeg');
      background-size: cover;
    }
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
