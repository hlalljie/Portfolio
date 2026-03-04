// External Imports
import { useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { styled, css } from 'styled-components';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';
// Layouts
import ThemedSection from '@/Components/shared/layout/ThemedSection';
// Styles
import { mobile } from '@/styles/mediaQueries';
import { fadeIn } from '@/styles/animations';

const servicesContactStyles = css`
  .contactContainer {
    padding: 50px;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    h2 {
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 30px;
    }

    button {
      border-color: transparent;
      background-color: ${({ theme }) => theme.colors.white};
      padding: 8px 24px;
      cursor: pointer;

      a {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.darkAccent};
      }
    }

    button:hover {
      background-color: ${({ theme }) => theme.colors.darkAccent};
      a {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  ${mobile(css`
    .contactContainer {
      height: fit-content;
      padding: 30px 0;
    }
  `)}
`;

const AnimatedServicesContact = styled.div`
  opacity: ${(props) => (props.$inView ? 1 : 0)};
  animation: ${(props) =>
    props.$inView
      ? css`
          ${fadeIn} 1s ease-in-out forwards
        `
      : 'none'};
`;

/**
 * ServicesContact: Bottom CTA section for the Services page
 * @returns {JSX.Element}
 */
function ServicesContact() {
  const { pageData, dataLoading } = useContext(AppContext);

  if (dataLoading || !pageData) {
    return <div>Loading...</div>;
  }

  const sectionData = pageData['global']['services']['servicesContact'];

  return (
    <ThemedSection
      themeName="dark"
      additionalStyles={servicesContactStyles}
      className="servicesContact"
      id="services-contact"
      width="medium"
    >
      {(inView) => (
        <AnimatedServicesContact $inView={inView}>
          <div className="contactContainer">
            <h2>{sectionData['title']}</h2>
            <button>
              <Link to={sectionData['cta']['href']}>
                {sectionData['cta']['label']}
              </Link>
            </button>
          </div>
        </AnimatedServicesContact>
      )}
    </ThemedSection>
  );
}

export default ServicesContact;
