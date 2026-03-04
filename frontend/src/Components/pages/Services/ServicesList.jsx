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
import { tablet } from '@/styles/mediaQueries';
import { fadeIn } from '@/styles/animations';

const serviceItemStyles = css`
  ${({ theme }) => css`
    ${tablet(css`
      padding-top: 70px;
      padding-bottom: 70px;
    `)}

    .serviceItemInner {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 80px;

      &.reversed {
        flex-direction: row-reverse;
      }

      .iconContainer {
        flex-shrink: 0;
        width: 160px;

        img {
          width: 100%;
          height: auto;
          display: block;
        }

        .iconPlaceholder {
          width: 100%;
          padding-top: 100%;
          border: 2px solid ${theme.withOpacity(theme.colors.grey, 0.4)};
          border-radius: 8px;
          background-color: ${theme.withOpacity(theme.colors.grey, 0.08)};
        }
      }

      .serviceContent {
        flex: 1;

        h2 {
          color: ${theme.colors.white};
          margin-bottom: 30px;
        }

        p {
          color: ${theme.colors.grey};
          margin: 0 0 50px 0;
        }

        button {
          border-color: transparent;
          background-color: ${theme.colors.white};
          padding: 4px 16px;
          cursor: pointer;

          a {
            font-size: 1.4rem;
            color: ${theme.colors.darkAccent};
          }
        }

        button:hover {
          background-color: ${theme.colors.darkAccent};
          a {
            color: ${theme.colors.white};
          }
        }
      }

      ${tablet(css`
        flex-direction: column;
        align-items: center;
        gap: 30px;

        &.reversed {
          flex-direction: column;
        }

        .iconContainer {
          width: 120px;
        }

        .serviceContent {
          width: 100%;

          h2 {
            text-align: center;
          }

          p {
            text-align: left;
          }

          .buttonWrapper {
            display: flex;
            justify-content: center;
          }
        }
      `)}
    }
  `}
`;

const AnimatedServiceItem = styled.div`
  opacity: ${(props) => (props.$inView ? 1 : 0)};
  animation: ${(props) =>
    props.$inView
      ? css`
          ${fadeIn} 1s ease-in-out forwards
        `
      : 'none'};
`;

/**
 * ServiceItem: Renders a single service card with alternating image side
 * @param {Object} props
 * @param {Object} props.service - Service data
 * @param {boolean} props.reversed - Whether the icon is on the right
 * @param {boolean} props.inView - Whether the item is in view
 * @returns {JSX.Element}
 */
function ServiceItem({ service, reversed, inView }) {
  return (
    <AnimatedServiceItem $inView={inView}>
      <div className={`serviceItemInner${reversed ? ' reversed' : ''}`}>
        <div className="iconContainer">
          {service.icon?.src ? (
            <img src={service.icon.src} alt={service.icon.alt} />
          ) : (
            <div className="iconPlaceholder" />
          )}
        </div>
        <div className="serviceContent">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <div className="buttonWrapper">
            <button>
              <Link to={service.cta.href}>{service.cta.label}</Link>
            </button>
          </div>
        </div>
      </div>
    </AnimatedServiceItem>
  );
}

/**
 * ServicesList: Renders each service as its own themed section
 * @returns {JSX.Element}
 */
function ServicesList() {
  const { pageData, dataLoading } = useContext(AppContext);

  if (dataLoading || !pageData) {
    return <div>Loading...</div>;
  }

  const services = pageData['global']['services']['servicesList']['services'];

  return services.map((service, index) => (
    <ThemedSection
      key={service.id}
      themeName="dark"
      width="large"
      additionalStyles={serviceItemStyles}
      id={service.id}
    >
      {(inView) => (
        <ServiceItem
          service={service}
          reversed={index % 2 !== 0}
          inView={inView}
        />
      )}
    </ThemedSection>
  ));
}

export default ServicesList;
