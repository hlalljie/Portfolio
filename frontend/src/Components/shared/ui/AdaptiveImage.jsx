// External Imports
import { useContext } from 'react';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';

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

const getImageSources = (imageData, useStaticData) => {
  const host = 'http://localhost:3000';
  console.log(imageData);
  const src = `${host}${imageData.sizes.medium.url}`;
  const thumbnail = imageData.sizes.thumbnail.url
    ? `${host}${imageData.sizes.thumbnail.url} 400w,`
    : '';
  const small = imageData.sizes.small.url
    ? `${host}${imageData.sizes.small.url} 768w,`
    : '';
  const medium = imageData.sizes.medium.url
    ? `${host}${imageData.sizes.medium.url} 1200w,`
    : '';
  const large = imageData.sizes.large.url
    ? `${host}${imageData.sizes.large.url} 1800w,`
    : '';
  const hero = imageData.sizes.hero.url
    ? `${host}${imageData.sizes.hero.url} 2500w`
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
