import { styled } from "styled-components";
import experienceItems from "../../data/ExperienceItems.jsx";
import { useState } from "react";

const StyledExperienceSelectorStyles = styled.div``;

function ExperienceSelector() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledExperienceSelectorStyles>
      <ExperienceSelectionTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ExperienceBlock {...experienceItems[activeTab]} />
    </StyledExperienceSelectorStyles>
  );
}

const StyledExperienceSelectionTabs = styled.div`
  height: 60px;
  display: flex;

  button {
    display: flex;
    align-items: flex-end; /* This centers the text vertically */
    justify-content: center;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    padding-left: 0;
    padding-right: 20px;
    padding-bottom: 10px;
    vertical-align: baseline;
    color: ${(props) => props.theme.colors.fadedBlack};
    border-color: ${(props) => props.theme.colors.fadedBlack};
    font-family: ${(props) => props.theme.fonts.heading};
    &.active {
      font-size: 2rem;
      border-color: ${(props) => props.theme.colors.darkAccent};
      color: ${(props) => props.theme.colors.darkAccent};
    }
    &:hover:not(.active) {
      font-size: 1.3rem;
      color: ${(props) => props.theme.colors.black};
      border-color: ${(props) => props.theme.colors.black};
    }
    &:last-child {
      padding-right: 0;
    }
  }
`;

function ExperienceSelectionTabs({ activeTab, setActiveTab }) {
  // Function to get the reordered items
  const getReorderedItems = () => {
    // Items from the active index to the end of the array
    const startFromActive = experienceItems.slice(activeTab);
    // Items from the start of the array to the active index
    const untilActive = experienceItems.slice(0, activeTab);
    // Concatenating both slices to get the desired order
    return startFromActive.concat(untilActive);
  };

  // Call the function to reorder items
  const reorderedItems = getReorderedItems();

  return (
    <StyledExperienceSelectionTabs>
      {reorderedItems.map((experienceItem, index) => (
        <button
          key={index} // Consider using a unique id from experienceItem if available
          className={index === 0 ? "active" : ""} // First item in the reordered list is always active
          onClick={() => setActiveTab(experienceItems.indexOf(experienceItem))}
        >
          {experienceItem.company}
        </button>
      ))}
    </StyledExperienceSelectionTabs>
  );
}

const StyledExperienceBlockStyles = styled.div`
  background-color: ${(props) => props.theme.colors.fog};
  box-shadow: 0px 0 120px 120px ${(props) => props.theme.colors.fog};
  .years {
    margin-top: 5px;
  }
  .titleTagContent {
    display: flex;
    align-items: top;
    column-gap: 50px;
    .experienceDetailsContainer {
      min-width: 200px;
      flex: 1.5;
      .experienceTitle {
        margin: 0;
      }
      .experienceTitles {
        .experienceTitleWrapper {
          display: flex;
          justify-content: left;
          flex-direction: row;
          align-items: flex-start;
          column-gap: 20px;
          h3 {
            margin: 0;
          }
          &:first-child h3 {
            color: ${(props) => props.theme.colors.darkAccent};
          }
          &:not(:first-child) h3 {
            color: ${(props) => props.theme.colors.dark};
            opacity: 0.7;
            font-size: 1.6rem;
            line-height: 2.4rem;
          }
        }
      }
      .technologies {
        display: flex;
        list-style: none;
        column-gap: 10px;
        padding: 0;
        flex-wrap: wrap;
        .technologyItem {
          font-size: 1.1rem;
          padding: 0 10px;
          margin: 5px;
          border: 2px solid ${(props) => props.theme.colors.darkAccent};
          color: ${(props) => props.theme.colors.darkAccent};
          border-radius: 5px;
          line-height: 2rem;
        }
      }
    }
    .description {
      flex: 2;
      p {
        margin-top: 0;
      }
    }
  }
`;
/**
 * Experience Block: Block component for individual experience item.
 * @param {Object} props - The properties for the ExperienceBlock component.
 * @param {string} props.company - Name of the company.
 * @param {string[]} props.titles - Titles held during the experience.
 * @param {string} props.years - Years of experience.
 * @param {string[]} props.technologies - Technologies utilized at the company
 * @param {string} props.description - Description of the experience.
 * @returns {JSX.Element} The ExperienceBlock component as a JSX element.
 */
function ExperienceBlock({
  company,
  titles,
  years,
  technologies,
  description,
}) {
  return (
    <StyledExperienceBlockStyles>
      <h4 className="years">{years}</h4>
      <div className="titleTagContent">
        <div className="experienceDetailsContainer">
          <span className="experienceTitles">
            {titles.map((title, index) => (
              <div key={index} className="experienceTitleWrapper">
                <h3 className="experienceTitle" key={index}>
                  {title}
                </h3>{" "}
                {index === 0 && (
                  <>
                    <h3 className="tree">↟</h3>{" "}
                    <h3 className="companyName">{company}</h3>
                  </>
                )}
              </div>
            ))}
          </span>
          <ul className="technologies">
            {technologies.map((tech, index) => (
              <li className="technologyItem" key={index}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </StyledExperienceBlockStyles>
  );
}

export default ExperienceSelector;
