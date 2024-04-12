import ThemedSection from '../../Components/Sections/ThemedSection';
import { css, styled } from 'styled-components';

const homeExperienceStyles = css`

`;

/**
 * Home Experience: Home Experience Section
 * @returns {JSX.Element}
 */
function HomeExperience() {
    return (
        <ThemedSection themeName="light" additionalStyles={homeExperienceStyles}>
            <ExperienceBlock 
                company='Nav Creative'
                titles={['Director', 'Project Manager', 'Web Designer']}
                years='2019 — 2022'
                technologies={['Javascript', 'Less', 'JQuery', 'HTML', 'Python', 'Squarespace', 'Wordpress', 'Shopify']}
                description='Designed numerous websites and led 200+ full-lifecycle projects under heavy workloads, integrating
                agile practices to improve coordination across staff and leadership. Oversaw all high complexity and technical client lead consultations across their entire lifecycle,
                streamlining the onboarding of new clients.'
            />
        </ThemedSection>
    )
}


const StyledExperienceBlockStyles = styled.div`
    padding: ${props => props.theme.padding.largeSection};
    .titleTagContent{
        display: flex;
        align-items: top;
        column-gap: 50px;

    }
    .experienceDetailsContainer{
        min-width: 200px;
        flex: 1.5;
    }
    .experienceTitle{
        margin: 0;
    }
    .experienceTitles .experienceTitle:first-child{
        color: ${props => props.theme.colors.darkAccent};
    }
    .experienceTitles .experienceTitle:not(:first-child){
        color: ${props => props.theme.colors.dark};
    }
    .technologies{
        display: flex;
        list-style: none;
        column-gap: 10px;
        padding: 0;
        flex-wrap: wrap;
    }
    .technologyItem{
        font-size: 1.1rem;
        padding: 0 10px;
        margin: 5px;
        border: 2px solid ${props => props.theme.colors.darkAccent};
        // background-color: ${props => props.theme.colors.darkAccent};
        // color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.darkAccent};
        border-radius: 5px;
    }
    .description{
        flex: 2;
        p{
            margin-top: 0;
        }
        
    }

    
`

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
function ExperienceBlock({ company, titles, years, technologies, description }) {
    return (
        <StyledExperienceBlockStyles>
            <h4>{years}</h4>
            <div className='titleTagContent'>
                <div className='experienceDetailsContainer'>
                    <span className="experienceTitles">
                        {titles.map((title, index) => <h3 className="experienceTitle" key={index}>{title}{ index === 0 ? " - " + company : ''}</h3>)}
                    </span>
                    <ul className='technologies'>
                        {technologies.map((tech, index) => <li className='technologyItem' key={index}>{tech}</li>)}
                    </ul>
                </div>
                <div className='description'>
                    <p>{description}</p>
                </div>
            </div>
            
        </StyledExperienceBlockStyles>
    );
}

export default HomeExperience;