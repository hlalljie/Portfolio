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
};

export default dataCache;
