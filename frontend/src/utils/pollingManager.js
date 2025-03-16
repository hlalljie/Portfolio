// pollingManager.js
const pollingManager = {
  interval: null,
  currentKey: null,

  startPolling(key, callback, interval = 1000) {
    // Clear any existing polling first
    this.stopPolling();

    // Set new polling
    this.currentKey = key;
    this.interval = setInterval(callback, interval);
    console.log(`Started polling for ${key}, interval ID: ${this.interval}`);
  },

  stopPolling() {
    if (this.interval) {
      console.log(`Stopping polling, interval ID: ${this.interval}`);
      clearInterval(this.interval);
      this.interval = null;
      this.currentKey = null;
    }
  },

  isActiveFor(key) {
    return this.currentKey === key;
  },
};

export default pollingManager;
