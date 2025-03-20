// External Imports
import { useState } from 'react';
import { styled, css } from 'styled-components';

const StyledExperienceAccordion = styled.div`
  ${({ theme }) => css`
    box-shadow: 0px 0 120px 120px ${theme.withOpacity(theme.colors.fog, 0.4)};
    background-color: ${theme.withOpacity(theme.colors.fog, 0.4)};
  `}
`;

/**
 * ExperienceAccordion: Accordion for experience section on mobile
 * @param {object} props - The properties for the ExperienceAccordion component.
 * @param {Array} props.experienceItems - Array of experience item data.
 * @returns {JSX.Element}
 */
function ExperienceAccordion({ experienceItems }) {
  return (
    <StyledExperienceAccordion>
      {experienceItems.map((item, index) => (
        <ExperienceAccordionDropdown
          key={index}
          company={item['company']}
          titles={item['titles']}
          description={item['description']}
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
 * @param {string} props.description - Description of the experience.
 * @returns {JSX.Element}
 */
function ExperienceAccordionDropdown({ company, titles, description }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledExperienceAccordionDropdown>
      <div
        className="dropdownHeader"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); // Prevent scrolling on space
            setIsOpen(!isOpen);
          }
        }}
        tabIndex="0"
        role="button"
        aria-expanded={isOpen}
      >
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
