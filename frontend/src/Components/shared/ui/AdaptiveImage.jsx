// External Imports
import { useContext } from 'react';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';
// Utils
import { formatImageURL } from '@/utils/formatImageURL';

/**
 * AdaptiveImage: Displays an adaptive image with different sizes based on screen size
 * @param {Object} props - The properties for the AdaptiveImage component
 * @param {Object} props.imageData - Payload CMS image object with sizes
 * @param {string} props.className - The className for the image
 * @param {string} props.sizes - The sizes attribute for the image
 * @returns {JSX.Element} - The AdaptiveImage component
 */
const AdaptiveImage = ({ imageData, className = '', sizes = '100vw' }) => {
  const { useStaticData } = useContext(AppContext);

  const srcData =
    imageData !== undefined && getImageSources(imageData, useStaticData);

  return (
    srcData && (
      <img
        src={srcData.src}
        srcSet={srcData.srcSet}
        sizes={sizes}
        alt={imageData.alt}
        loading="lazy"
        className={'adaptiveImage ' + className}
      />
    )
  );
};

/**
 * getImageSources: Returns the src and srcSet for the image
 * @param {Object} imageData - Payload CMS image object
 * @param {boolean} useStaticData - Whether to use static data
 * @returns {Object} - Object containing src and srcSet
 */
const getImageSources = (imageData, useStaticData) => {
  console.log(imageData);
  const src = `${formatImageURL(imageData.sizes.thumbnail.url, useStaticData)}`;
  const thumbnail = `${src} 400w,`;
  const small = imageData.sizes.small.url
    ? `${formatImageURL(imageData.sizes.small.url, useStaticData)} 768w,`
    : '';
  const medium = imageData.sizes.medium.url
    ? `${formatImageURL(imageData.sizes.medium.url, useStaticData)} 1200w,`
    : '';
  const large = imageData.sizes.large.url
    ? `${formatImageURL(imageData.sizes.large.url, useStaticData)} 1800w,`
    : '';
  const hero = imageData.sizes.hero.url
    ? `${formatImageURL(imageData.sizes.hero.url, useStaticData)} 2500w`
    : '';

  const srcSet = `
        ${thumbnail}
        ${small}
        ${medium}
        ${large}
        ${hero}
    `;
  return { src: src, srcSet: srcSet };
};

export default AdaptiveImage;
