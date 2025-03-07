// External Imports
import { useState } from 'react';
import { styled, css } from 'styled-components';

// Internal Imports
import TagList from '@/Components/shared/display/TagList';

const StyledExperienceSelectorStyles = styled.div``;

/**
 * ExperienceSelector: Component for displaying experience with selection tabs for each company.
 * @param {object} props - The properties for the ExperienceSelector component.
 * @param {Array} props.experienceItems - Array of experience item data.
 * @returns {JSX.Element}
 */
function ExperienceSelector({ experienceItems }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledExperienceSelectorStyles>
      <ExperienceSelectionTabs
        experienceItems={experienceItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ExperienceBlock {...experienceItems[activeTab]} />
    </StyledExperienceSelectorStyles>
  );
}

const StyledExperienceSelectionTabs = styled.div`
  //height: 60px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 30px;
  padding-bottom: 6.5%;
  position: relative;

  .experienceTab {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .dates {
      transition: color 0.3s ease-in-out;

      margin: auto;
      margin-top: 10px;
      text-align: center;
      color: ${(props) => props.theme.colors.fadedBlack};
      .short {
        display: inline;
      }
      .range {
        display: none;
      }
    }
    button {
      transition: color 0.3s ease-in-out;
      display: flex;
      align-items: flex-end; /* This centers the text vertically */
      justify-content: center;
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0;
      padding: 10px 0;
      vertical-align: baseline;
      color: ${(props) => props.theme.colors.fadedBlack};
      border-color: ${(props) => props.theme.colors.fadedBlack};
      font-family: ${(props) => props.theme.fonts.heading};
      width: 170px;
    }
    &.active {
      .dates {
        color: ${(props) => props.theme.colors.darkAccent};
        display: flex;
        .short {
          display: none;
        }
        .range {
          display: inline;
        }
      }
      button {
        padding: 10px 20px;
        height: 80px;
        width: 100%;
        font-size: 2rem;
        border-color: ${(props) => props.theme.colors.darkAccent};
        color: ${(props) => props.theme.colors.darkAccent};
      }
    }
    &:last-child {
      button {
        padding-right: 0;
      }
    }
    &:hover:not(.active) {
      .dates {
        color: ${(props) => props.theme.colors.dark};
      }
      button {
        font-size: 1.3rem;
        color: ${(props) => props.theme.colors.dark};
        border-color: ${(props) => props.theme.colors.dark};
      }
    }
  }
`;

/**
 * ExperienceSelectionTabs: Component for displaying selection tabs for each company and switching between.
 * @param {Objects} props - The properties for the ExperienceSelector component.
 * @param {number} props.activeTab - The index of the active tab.
 * @param {function} props.setActiveTab - The function to set the active tab.
 * @returns {JSX.Element}
 */
function ExperienceSelectionTabs({ experienceItems, activeTab, setActiveTab }) {
  return (
    <StyledExperienceSelectionTabs>
      {experienceItems.map((experienceItem, index) => (
        <div
          role="presentation"
          className={'experienceTab' + (index === activeTab ? ' active' : '')}
          key={index}
          onClick={() => setActiveTab(index)}
        >
          <button>{experienceItem['company']}</button>
          <h4 className="dates">
            <span className="short">
              {experienceItem['dates']['shortLabel']}
            </span>
            <span className="range">
              {experienceItem['dates']['startDate']} -{' '}
              {experienceItem['dates']['endDate']}
            </span>
          </h4>
        </div>
      ))}
    </StyledExperienceSelectionTabs>
  );
}

const StyledExperienceBlockStyles = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.fog};
    box-shadow: 0px 0 120px 120px ${theme.colors.fog};
    .titleTagContent {
      display: flex;
      align-items: top;
      column-gap: 7%;
      .experienceDetailsContainer {
        min-width: 450px;
        flex: 1;

        .experienceTitles {
          .experienceTitleWrapper {
            display: flex;
            justify-content: right;
            flex-direction: row;
            align-items: flex-start;
            column-gap: 20px;
            h3 {
              margin: 0;
            }
            &:first-child h3 {
              color: ${theme.colors.darkAccent};
            }
            &:not(:first-child) h3 {
              color: ${theme.colors.dark};
              opacity: 0.7;
              font-size: 1.6rem;
              line-height: 2.4rem;
            }
          }
        }
        .technologies {
          justify-content: right;
        }
      }
      .description {
        flex: 1;
        p {
          margin-top: 0;
        }
      }
    }
  `}
`;
/**
 * Experience Block: Block component for individual experience item.
 * @param {Object} props - The properties for the ExperienceBlock component.
 * @param {string} props.company - Name of the company.
 * @param {string[]} props.titles - Titles held during the experience.
 * @param {string[]} props.technologies - Technologies utilized at the company
 * @param {string} props.description - Description of the experience.
 * @returns {JSX.Element} The ExperienceBlock component as a JSX element.
 */
function ExperienceBlock({ company, titles, technologies, description }) {
  return (
    <StyledExperienceBlockStyles>
      <div className="titleTagContent">
        <div className="experienceDetailsContainer">
          <span className="experienceTitles">
            {titles.map((title, index) => (
              <div key={index} className="experienceTitleWrapper">
                {index === 0 && (
                  <>
                    <h3 className="companyName">{company}</h3>
                    <h3 className="tree">↟</h3>{' '}
                  </>
                )}{' '}
                <h3 className="experienceTitle" key={index}>
                  {title}
                </h3>
              </div>
            ))}
          </span>
          <TagList
            tags={technologies}
            className="technologies"
            color="darkAccent"
            filled={false}
          />
          {/* <ul className="technologies">
            {technologies.map((tech, index) => (
              <li className="technologyItem" key={index}>
                {tech}
              </li>
            ))}
          </ul> */}
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </StyledExperienceBlockStyles>
  );
}

export default ExperienceSelector;
