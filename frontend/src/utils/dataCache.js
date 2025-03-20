// In utils/dataCache.js
const dataCache = {
  cache: new Map(),

  /**
   * get - Get data from cache
   * @param {string} key - Key to get data from
   * @returns {object} - Data from cache
   */
  get(key) {
    return this.cache.get(key);
  },

  /**
   * set - Set data in cache
   * @param {string} key - Key to set data in
   * @param {object} data - Data to set in cache
   */
  set(key, data) {
    this.cache.set(key, data);
  },

  /**
   * has - Check if data exists in cache
   * @param {string} key - Key to check data in
   * @returns {boolean} - True if data exists in cache, false otherwise
   */
  has(key) {
    return this.cache.has(key);
  },

  /**
   * createKey - Create a key for caching data
   * @param {string} type  - Type of data to cache (collection or global)
   * @param {string}slug - Slug of data to cache
   * @returns {string} - Key for caching data
   */
  createKey(type, slug) {
    return `${type}-${slug}`;
  },
};

export default dataCache;
