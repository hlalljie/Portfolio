/**
 * formatImageURL: Formats an image url from Payload static or api format to usable url
 * @param {string} url - URL to format
 * @param {boolean} useStaticData - Whether to use static data
 * @returns {string} - Formatted URL
 */
export const formatImageURL = (url, useStaticData = true) => {
  // if using api add api location prefix
  if (!useStaticData) {
    return `http://localhost:3000${url}`;
  }
  // if not using api, strip change prefix
  return url.replace('/api/media/file/', '/media/');
};
