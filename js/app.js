/* ============================================
   APP UTILITIES
   Shared functions across all pages
   ============================================ */

const App = {
  // Storage keys
  STORAGE_KEYS: {
    MATCHES: 'tuscany-matches',
    CURRENT_INDEX: 'tuscany-current-index',
    REJECTED: 'tuscany-rejected'
  },

  // Initialize page with config
  init() {
    // Set page title
    document.title = CONFIG.pageTitle;
    
    // Apply any dynamic config values to the page
    this.applyConfigToPage();
  },

  // Apply config values to elements with data-config attribute
  applyConfigToPage() {
    document.querySelectorAll('[data-config]').forEach(el => {
      const key = el.getAttribute('data-config');
      if (CONFIG[key] !== undefined) {
        el.textContent = CONFIG[key];
      }
    });
  },

  // Get matches from localStorage
  getMatches() {
    try {
      const matches = localStorage.getItem(this.STORAGE_KEYS.MATCHES);
      return matches ? JSON.parse(matches) : [];
    } catch (e) {
      console.error('Error reading matches:', e);
      return [];
    }
  },

  // Save a match
  saveMatch(siteId) {
    const matches = this.getMatches();
    if (!matches.includes(siteId)) {
      matches.push(siteId);
      localStorage.setItem(this.STORAGE_KEYS.MATCHES, JSON.stringify(matches));
    }
  },

  // Get rejected sites
  getRejected() {
    try {
      const rejected = localStorage.getItem(this.STORAGE_KEYS.REJECTED);
      return rejected ? JSON.parse(rejected) : [];
    } catch (e) {
      console.error('Error reading rejected:', e);
      return [];
    }
  },

  // Save a rejected site
  saveRejected(siteId) {
    const rejected = this.getRejected();
    if (!rejected.includes(siteId)) {
      rejected.push(siteId);
      localStorage.setItem(this.STORAGE_KEYS.REJECTED, JSON.stringify(rejected));
    }
  },

  // Get current index
  getCurrentIndex() {
    try {
      const index = localStorage.getItem(this.STORAGE_KEYS.CURRENT_INDEX);
      return index ? parseInt(index, 10) : 0;
    } catch (e) {
      return 0;
    }
  },

  // Save current index
  saveCurrentIndex(index) {
    localStorage.setItem(this.STORAGE_KEYS.CURRENT_INDEX, index.toString());
  },

  // Clear all data and reset
  resetAll() {
    localStorage.removeItem(this.STORAGE_KEYS.MATCHES);
    localStorage.removeItem(this.STORAGE_KEYS.CURRENT_INDEX);
    localStorage.removeItem(this.STORAGE_KEYS.REJECTED);
  },

  // Get matched sites with full data
  getMatchedSites() {
    const matchIds = this.getMatches();
    return SITES.filter(site => matchIds.includes(site.id));
  },

  // Navigate to page
  goTo(page) {
    window.location.href = page;
  }
};

// Make App available globally
window.App = App;
