import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PortfolioItems from '../../data/PortfolioItems.jsx';
import Header from '@/Components/Sections/Header';

const StyledCaseStudyTemplateBasic = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.theme.colors.white};
  height: 100vh;
`;

/**
 * A Basic Case Study Layout including a summary and image
 * @returns {JSX.Element}
 */
const CaseStudyTemplateBasic = () => {
  const { caseStudyId } = useParams();
  const project = PortfolioItems.Projects[caseStudyId];

  useEffect(() => {
    console.log('Case study ID:', caseStudyId);
  }, [caseStudyId]);
  return (
    <StyledCaseStudyTemplateBasic bgColor={project.backgroundColor}>
      <Header />
      <h1>{project.title}</h1>
      <p>{project.summary}</p>
    </StyledCaseStudyTemplateBasic>
  );
};

export default CaseStudyTemplateBasic;
