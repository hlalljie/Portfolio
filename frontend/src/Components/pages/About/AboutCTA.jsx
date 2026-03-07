// External Imports
import { Link } from 'react-router-dom';
import { styled, css } from 'styled-components';

// Internal Imports
// Layouts
import ThemedSection from '@/Components/shared/layout/ThemedSection';
// Styles
import { mobile } from '@/styles/mediaQueries';
import { fadeIn } from '@/styles/animations';

const aboutCtaStyles = css`
  .ctaContainer {
    padding: 50px;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    h2 {
      color: ${({ theme }) => theme.colors.black};
      margin-bottom: 30px;
    }

    button {
      border-color: transparent;
      background-color: ${({ theme }) => theme.colors.darkAccent};
      padding: 8px 24px;
      cursor: pointer;

      a {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
      }
    }

    button:hover {
      background-color: ${({ theme }) => theme.colors.dark};

      a {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  ${mobile(css`
    .ctaContainer {
      min-height: fit-content;
      padding: 30px 0;
    }
  `)}
`;

const AnimatedAboutCTA = styled.div`
  opacity: ${(props) => (props.$inView ? 1 : 0)};
  animation: ${(props) =>
    props.$inView
      ? css`
          ${fadeIn} 1s ease-in-out forwards
        `
      : 'none'};
`;

/**
 * AboutCTA: Bottom CTA section for the About page
 * @returns {JSX.Element}
 */
function AboutCTA() {
  return (
    <ThemedSection
      themeName="light"
      additionalStyles={aboutCtaStyles}
      className="aboutCTA"
      id="about-cta"
      width="medium"
    >
      {(inView) => (
        <AnimatedAboutCTA $inView={inView}>
          <div className="ctaContainer">
            <h2>Ready to build something great?</h2>
            <button>
              <Link to="/home#contact">Work with me</Link>
            </button>
          </div>
        </AnimatedAboutCTA>
      )}
    </ThemedSection>
  );
}

export default AboutCTA;
