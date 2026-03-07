// External Imports
import { styled, css } from 'styled-components';

// Internal Imports
// Layouts
import ThemedSection from '@/Components/shared/layout/ThemedSection';
// UI
import AdaptiveImage from '@/Components/shared/ui/AdaptiveImage';
// Styles
import { breakpoints, tablet } from '@/styles/mediaQueries';
import { fadeIn } from '@/styles/animations';

const sideCardStyles = ($reversed) => css`
  .sideCardContent {
    padding: ${(props) => props.theme.padding.largeSection};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${$reversed ? 'row-reverse' : 'row'};
    box-sizing: border-box;

    .imgContainer {
      box-sizing: border-box;
      position: relative;
      width: 40%;
      padding-top: 40%;
      height: 0%;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-radius: 10px;
        opacity: 1;
        z-index: 0;
        filter: grayscale(10%);
      }

      .imgPlaceholder {
        position: absolute;
        inset: 0;
        border-radius: 10px;
        background-color: ${(props) => props.theme.colors.dark};
        opacity: 0.25;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          color: ${(props) => props.theme.colors.black};
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.5;
        }
      }
    }

    .textContainer {
      width: 50%;
    }
  }

  ${tablet(css`
    .sideCardContent {
      flex-direction: column;

      .imgContainer {
        width: 100%;
        padding-top: 0;
        padding-bottom: 20px;

        img {
          position: relative;
          filter: grayscale(10%);
        }

        .imgPlaceholder {
          position: relative;
          height: 240px;
        }
      }

      .textContainer {
        width: 100%;
      }
    }
  `)}
`;

const AnimatedSideCard = styled.div`
  opacity: ${(props) => (props.$inView ? 1 : 0)};
  animation: ${(props) =>
    props.$inView
      ? css`
          ${fadeIn} 1s ease-in-out forwards
        `
      : 'none'};
`;

/**
 * SideCard: Reusable side-by-side card section (image + text)
 * @param {Object} props
 * @param {Object|null} props.imageData - Payload CMS image object; null renders a placeholder
 * @param {boolean} props.reversed - Flip the image/text order
 * @param {string} props.themeName - Light or dark section theme
 * @param {string} props.imageSizes - sizes attribute for adaptive image
 * @param {string} props.id - Section id
 * @param {string} props.className - Additional class
 * @param {React.ReactNode} props.children - Text content for the right/left panel
 * @returns {JSX.Element}
 */
function SideCard({
  imageData = null,
  reversed = false,
  themeName = 'dark',
  imageSizes,
  id = '',
  className = '',
  children,
}) {
  const defaultSizes =
    '(max-width: ' + breakpoints.tablet + 'px) 86vw, 43vw';

  return (
    <ThemedSection
      themeName={themeName}
      additionalStyles={sideCardStyles(reversed)}
      id={id}
      className={className}
    >
      {(inView) => (
        <AnimatedSideCard $inView={inView}>
          <div className="sideCardContent">
            <div className="imgContainer">
              {imageData ? (
                <AdaptiveImage
                  imageData={imageData}
                  sizes={imageSizes || defaultSizes}
                />
              ) : (
                <div className="imgPlaceholder">
                  <span>Image placeholder</span>
                </div>
              )}
            </div>
            <div className="textContainer">{children}</div>
          </div>
        </AnimatedSideCard>
      )}
    </ThemedSection>
  );
}

export default SideCard;
