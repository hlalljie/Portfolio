// External Imports
import { styled, css } from 'styled-components';

// Internal Imports
// Layouts
import ThemedSection from '@/Components/shared/layout/ThemedSection';
// Styles
import { mobile, tablet } from '@/styles/mediaQueries';
import { fadeIn } from '@/styles/animations';

const aboutTestimonialStyles = css`
  ${({ theme }) => css`
    padding: ${theme.padding.largeSection};

    .testimonialContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 50vh;
      text-align: center;
      max-width: 780px;
      margin: 0 auto;

      blockquote {
        margin: 0 0 28px;

        p {
          font-size: 1.6rem;
          font-family: ${theme.fonts.heading};
          color: ${theme.colors.black};
          line-height: 1.55;
          font-style: italic;
        }
      }

      .attribution {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;

        .name {
          font-family: ${theme.fonts.heading};
          font-weight: 700;
          color: ${theme.colors.darkAccent};
          font-size: 1rem;
        }

        .role {
          font-family: ${theme.fonts.paragraph};
          color: ${theme.colors.black};
          font-size: 0.9rem;
          opacity: 0.6;
        }
      }
    }

    ${tablet(css`
      .testimonialContent {
        min-height: 0;

        blockquote p {
          font-size: 1.3rem;
        }
      }
    `)}

    ${mobile(css`
      .testimonialContent blockquote p {
        font-size: 1.1rem;
      }
    `)}
  `}
`;

const AnimatedAboutTestimonial = styled.div`
  opacity: ${(props) => (props.$inView ? 1 : 0)};
  animation: ${(props) =>
    props.$inView
      ? css`
          ${fadeIn} 1s ease-in-out forwards
        `
      : 'none'};
`;

/**
 * AboutTestimonial: Testimonial section for the About page
 * @returns {JSX.Element}
 */
function AboutTestimonial() {
  return (
    <ThemedSection
      themeName="light"
      backgroundOpacity={0}
      additionalStyles={aboutTestimonialStyles}
      className="aboutTestimonial"
      id="about-testimonial"
    >
      {(inView) => (
        <AnimatedAboutTestimonial $inView={inView}>
          <div className="testimonialContent">
            <blockquote>
              <p>
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris.&rdquo;
              </p>
            </blockquote>
            <div className="attribution">
              <span className="name">Lorem Ipsum</span>
              <span className="role">Placeholder Title, Placeholder Company</span>
            </div>
          </div>
        </AnimatedAboutTestimonial>
      )}
    </ThemedSection>
  );
}

export default AboutTestimonial;
