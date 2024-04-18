import ThemedSection from "../../Components/Sections/ThemedSection";
import { css, styled } from "styled-components";
import experienceItems from "../../data/ExperienceItems.jsx";

const homeExperienceStyles = css`
  padding: ${(props) => props.theme.padding.largeSection};
`;

/**
 * Home Experience: Home Experience Section
 * @returns {JSX.Element}
 */
function HomeExperience() {
  return (
    <ThemedSection themeName="light" additionalStyles={homeExperienceStyles}>
      <h2>Experience</h2>
      <ExperienceBlock {...experienceItems[0]} />
    </ThemedSection>
  );
}

const StyledExperienceBlockStyles = styled.div`
  background-color: ${(props) => props.theme.colors.fog};
  box-shadow: 0px 0 120px 120px ${(props) => props.theme.colors.fog};
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
      <h4>{years}</h4>
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

export default HomeExperience;
