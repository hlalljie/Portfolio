// pollingManager.js
const pollingManager = {
  interval: null,
  currentKey: null,

  /**
   * startPolling - Start new polling, closing any existing
   * @param {string} key - Key to poll in {type}-{slug} format
   * @param {function} callback - Callback to run on polling interval
   * @param {number} interval - Polling interval in milliseconds
   */
  startPolling(key, callback, interval = 1000) {
    // Clear any existing polling first
    this.stopPolling();

    // Set new polling
    this.currentKey = key;
    callback();
    this.interval = setInterval(callback, interval);
    console.log(`Started polling for ${key}, interval ID: ${this.interval}`);
  },

  /**
   * stopPolling - Stop any existing polling
   */
  stopPolling() {
    if (this.interval) {
      console.log(`Stopping polling, interval ID: ${this.interval}`);
      clearInterval(this.interval);
      this.interval = null;
      this.currentKey = null;
    }
  },

  /**
   * isActiveFor - Check if polling is active for a given key
   * @param {string} key - Key to check polling for
   * @returns {boolean} - True if polling is active for the key, false otherwise
   */
  isActiveFor(key) {
    return this.currentKey === key;
  },
};

export default pollingManager;
