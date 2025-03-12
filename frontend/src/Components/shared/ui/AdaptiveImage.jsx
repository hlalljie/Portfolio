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
  console.log(imageData);
  const src = `${formatURL(imageData.sizes.thumbnail.url, useStaticData)}`;
  const thumbnail = `${src} 400w,`;
  const small = imageData.sizes.small.url
    ? `${formatURL(imageData.sizes.small.url, useStaticData)} 768w,`
    : '';
  const medium = imageData.sizes.medium.url
    ? `${formatURL(imageData.sizes.medium.url, useStaticData)} 1200w,`
    : '';
  const large = imageData.sizes.large.url
    ? `${formatURL(imageData.sizes.large.url, useStaticData)} 1800w,`
    : '';
  const hero = imageData.sizes.hero.url
    ? `${formatURL(imageData.sizes.hero.url, useStaticData)} 2500w`
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

const formatURL = (url, useStaticData) => {
  // if using api add api location prefix
  if (!useStaticData) {
    return `http://localhost:3000${url}`;
  }
  // if not using api, strip change prefix
  return url.replace('/api/media/file/', '/media/');
};

export default AdaptiveImage;
