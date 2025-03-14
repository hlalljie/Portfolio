// External Imports
import { css } from 'styled-components';

// Internal Imports
// Utils
import { formatImageURL } from '@/utils/formatImageURL';

/**
 * adaptiveBackgroundImage: Creates responsive background image CSS with media queries
 * Only generates background-image properties without any other styling
 * @param {Object} image - Payload CMS image object with sizes
 * @param {boolean} useStaticData - Whether to use static data
 * @returns {ReturnType<typeof css>} Styled-components CSS
 */
export const adaptiveBackgroundImage = (image, useStaticData = true) => {
  if (!image || !image.sizes) return '';

  // Sort sizes by width
  const sortedSizes = Object.entries(image.sizes)
    // eslint-disable-next-line no-unused-vars
    .filter(([_, sizeData]) => sizeData?.url) // Filter out null/undefined sizes
    .map(([size, sizeData]) => ({
      name: size,
      width: sizeData.width,
      url: formatImageURL(sizeData.url, useStaticData),
    }))
    .sort((a, b) => a.width - b.width);
  // if there are no sizes available, return the default image
  if (sortedSizes.length === 0) {
    return image.url
      ? `background-image: url(${formatImageURL(image.url, useStaticData)});`
      : '';
  }

  // Default image URL (smallest size)
  let styles = `background-image: url(${sortedSizes[0].url});`;

  // Add media queries for each size
  sortedSizes.forEach((size, index) => {
    if (index === 0) return; // Skip the smallest size (already set as default)

    const breakpoint = Math.floor(size.width * 0.75);

    styles += `
      @media (min-width: ${breakpoint}px) {
        background-image: url(${size.url});
      }
    `;

    if (index > 1) {
      styles += `
        @media (min-width: ${Math.floor(
          size.width * 0.375
        )}px) and (min-resolution: 192dpi) {
          background-image: url(${size.url});
        }
      `;
    }
  });

  return css`
    ${styles}
  `;
};
