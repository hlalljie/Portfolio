import { styled } from "styled-components";
import experienceItems from "../../data/ExperienceItems.jsx";
import { useState } from "react";

const StyledExperienceSelectorStyles = styled.div``;

/**
 * ExperienceSelector: Component for displaying experience with selection tabs for each company.
 * @returns {JSX.Element}
 */
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
  //height: 60px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 30px;
  padding-bottom: 7%;
  position: relative;

  .experienceTab {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .years {
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
      .years {
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
      .years {
        color: ${(props) => props.theme.colors.black};
      }
      button {
        font-size: 1.3rem;
        color: ${(props) => props.theme.colors.black};
        border-color: ${(props) => props.theme.colors.black};
      }
    }
  }
`;

/**
 *
 * @param {Objects} props - The properties for the ExperienceSelector component.
 * @param {number} props.activeTab - The index of the active tab.
 * @param {function} props.setActiveTab - The function to set the active tab.
 * @returns {JSX.Element}
 */
function ExperienceSelectionTabs({ activeTab, setActiveTab }) {
  /**
   * getReorderedItems: Function to reorder items based on the active tab being first tab.
   * @returns {JSX.Element[]}
   */
  //   const getReorderedItems = () => {
  //     // Items from the active index to the end of the array
  //     const startFromActive = experienceItems.slice(activeTab);
  //     // Items from the start of the array to the active index
  //     const untilActive = experienceItems.slice(0, activeTab);
  //     // Concatenating both slices to get the desired order
  //     return startFromActive.concat(untilActive);
  //   };

  //   // Call the function to reorder items
  //   const reorderedItems = getReorderedItems();

  return (
    <StyledExperienceSelectionTabs>
      {experienceItems.map((experienceItem, index) => (
        <div
          className={"experienceTab" + (index === activeTab ? " active" : "")}
          key={index}
        >
          <button onClick={() => setActiveTab(index)}>
            {experienceItem.company}
          </button>
          <h4 className="years">
            <span className="short">{experienceItem.years.short}</span>
            <span className="range">
              {experienceItem.years.start} - {experienceItem.years.end}
            </span>
          </h4>
        </div>
      ))}
    </StyledExperienceSelectionTabs>
  );
}

const StyledExperienceBlockStyles = styled.div`
  background-color: ${(props) => props.theme.colors.fog};
  box-shadow: 0px 0 120px 120px ${(props) => props.theme.colors.fog};
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
        justify-content: right;
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
      flex: 1;
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