/**
 * slugify - Converts a string to a slug same as in Payload (camelCase)
 * @param {string} string - string to turn into a slug
 * @returns {string} - Payload style slug (camelCase)
 */
export function slugify(string) {
  return string
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
