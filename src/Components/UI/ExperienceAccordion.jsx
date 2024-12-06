import { useState } from 'react';
import { styled, css } from 'styled-components';
import experienceItems from '../../data/ExperienceItems.jsx';
import TagList from './TagList.jsx';

const StyledExperienceAccordion = styled.div`
  ${({ theme }) => css`
    box-shadow: 0px 0 120px 120px ${theme.withOpacity(theme.colors.fog, 0.4)};
    background-color: ${theme.withOpacity(theme.colors.fog, 0.4)};
  `}
`;

/**
 * ExperienceAccordion: Accordion for experience section on mobile
 * @returns {JSX.Element}
 */
function ExperienceAccordion() {
  return (
    <StyledExperienceAccordion>
      {experienceItems.map((item, index) => (
        <ExperienceAccordionDropdown
          key={index}
          company={item.company}
          titles={item.titles}
          technologies={item.technologies}
          description={item.description}
        />
      ))}
    </StyledExperienceAccordion>
  );
}

const StyledExperienceAccordionDropdown = styled.div`
  .dropdownHeader {
    margin-top: 20px;
    margin-bottom: 0px;
    border-bottom: 2px solid ${(props) => props.theme.colors.dark};
    display: flex;
    .companyName {
      color: ${(props) => props.theme.colors.dark};
      margin: 0;
    }
  }
  .dropdownContent {
    p {
      &.title {
        color: ${(props) => props.theme.colors.darkAccent};
        margin-top: 10px;
        margin-bottom: 0;
      }
    }
  }
`;

/**
 * ExperienceAccordionDropdown: Single Dropdown for experience section on mobile
 * @param {object} props - The properties for the ExperienceAccordionDropdown component.
 * @param {string} props.company - Name of the company.
 * @param {string[]} props.titles - Titles held during the experience.
 * @param {string[]} props.technologies - Technologies utilized at the company
 * @param {string} props.description - Description of the experience.
 * @returns {JSX.Element}
 */
function ExperienceAccordionDropdown({
  company,
  titles,
  technologies,
  description,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledExperienceAccordionDropdown>
      <div className="dropdownHeader" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="companyName">{company}</h3>
      </div>
      {isOpen && (
        <div className="dropdownContent">
          <p className="title">{titles[0]}</p>
          <p className="smallP">{description}</p>
        </div>
      )}
    </StyledExperienceAccordionDropdown>
  );
}

export default ExperienceAccordion;
