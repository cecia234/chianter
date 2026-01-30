/* ============================================
   CARD SWIPE LOGIC
   Handles card rendering and swipe gestures
   ============================================ */

const Cards = {
  // State
  currentIndex: 0,
  cards: [],
  isDragging: false,
  startX: 0,
  startY: 0,
  currentX: 0,
  currentY: 0,
  
  // Thresholds
  SWIPE_THRESHOLD: 100,  // pixels to trigger swipe
  ROTATION_FACTOR: 0.1,  // rotation amount based on drag
  
  // DOM elements
  stackEl: null,
  matchOverlay: null,

  // Initialize
  init() {
    this.stackEl = document.querySelector('.card-stack');
    this.matchOverlay = document.querySelector('.match-overlay');
    this.currentIndex = App.getCurrentIndex();
    
    // Bind action buttons
    const likeBtn = document.querySelector('.like-btn');
    const rejectBtn = document.querySelector('.reject-btn');
    
    if (likeBtn) {
      likeBtn.addEventListener('click', () => this.handleLike());
    }
    if (rejectBtn) {
      rejectBtn.addEventListener('click', () => this.handleReject());
    }
    
    // Render initial cards
    this.renderCards();
    this.updateProgress();
  },

  // Render visible cards (top 3)
  renderCards() {
    if (!this.stackEl) return;
    
    this.stackEl.innerHTML = '';
    this.cards = [];
    
    const remaining = SITES.slice(this.currentIndex);
    
    if (remaining.length === 0) {
      this.showEndState();
      return;
    }
    
    // Show up to 3 cards
    const visibleSites = remaining.slice(0, 3);
    
    visibleSites.forEach((site, index) => {
      const card = this.createCardElement(site, index);
      this.stackEl.appendChild(card);
      this.cards.push(card);
    });
    
    // Attach events to top card only
    if (this.cards.length > 0) {
      this.attachCardEvents(this.cards[0]);
    }
  },

  // Create card DOM element
  createCardElement(site, stackIndex) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.siteId = site.id;
    card.dataset.currentImage = '0';
    
    if (stackIndex > 0) {
      card.classList.add('card-behind', `card-behind-${stackIndex}`);
    }
    
    // Build carousel slides
    const images = site.images || [{ src: site.imageSrc, alt: site.imageAlt }];
    const slidesHtml = images.map((img, i) => `
      <div class="card-carousel-slide">
        <img src="${img.src}" alt="${img.alt}" draggable="false">
      </div>
    `).join('');
    
    // Build dots
    const dotsHtml = images.map((_, i) => `
      <div class="card-carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}"></div>
    `).join('');
    
    card.innerHTML = `
      <div class="card-image-container">
        <div class="card-carousel" data-total="${images.length}">
          <div class="card-carousel-dots">
            ${dotsHtml}
          </div>
          <div class="card-carousel-track">
            ${slidesHtml}
          </div>
          <div class="card-carousel-tap-zones">
            <div class="card-carousel-tap" data-direction="prev"></div>
            <div class="card-carousel-tap" data-direction="next"></div>
          </div>
        </div>
        <div class="card-gradient"></div>
        <div class="card-location">
          <span>📍</span>
          <span>${site.location}</span>
        </div>
        <div class="card-indicator like">${CONFIG.likeText}</div>
        <div class="card-indicator reject">${CONFIG.rejectText}</div>
      </div>
      <div class="card-content">
        <h2 class="card-name">${site.name}</h2>
        <p class="card-description">${site.description}</p>
      </div>
    `;
    
    // Attach carousel tap events
    this.attachCarouselEvents(card);
    
    return card;
  },

  // Attach carousel tap navigation
  attachCarouselEvents(card) {
    const tapZones = card.querySelectorAll('.card-carousel-tap');
    
    tapZones.forEach(zone => {
      zone.addEventListener('click', (e) => {
        e.stopPropagation();
        const direction = zone.dataset.direction;
        this.navigateCarousel(card, direction);
      });
    });
  },

  // Navigate carousel
  navigateCarousel(card, direction) {
    const carousel = card.querySelector('.card-carousel');
    const track = card.querySelector('.card-carousel-track');
    const dots = card.querySelectorAll('.card-carousel-dot');
    const total = parseInt(carousel.dataset.total);
    let current = parseInt(card.dataset.currentImage);
    
    if (direction === 'next') {
      current = (current + 1) % total;
    } else {
      current = (current - 1 + total) % total;
    }
    
    card.dataset.currentImage = current.toString();
    track.style.transform = `translateX(-${current * 100}%)`;
    
    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  },

  // Attach pointer events to a card
  attachCardEvents(card) {
    card.addEventListener('pointerdown', (e) => this.onPointerDown(e, card));
    card.addEventListener('pointermove', (e) => this.onPointerMove(e, card));
    card.addEventListener('pointerup', (e) => this.onPointerUp(e, card));
    card.addEventListener('pointercancel', (e) => this.onPointerUp(e, card));
    card.addEventListener('pointerleave', (e) => {
      if (this.isDragging) this.onPointerUp(e, card);
    });
  },

  // Pointer down - start drag
  onPointerDown(e, card) {
    this.isDragging = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.currentX = 0;
    this.currentY = 0;
    
    card.classList.add('swiping');
    card.setPointerCapture(e.pointerId);
  },

  // Pointer move - update card position
  onPointerMove(e, card) {
    if (!this.isDragging) return;
    
    this.currentX = e.clientX - this.startX;
    this.currentY = e.clientY - this.startY;
    
    const rotation = this.currentX * this.ROTATION_FACTOR;
    
    card.style.transform = `translateX(${this.currentX}px) translateY(${this.currentY}px) rotate(${rotation}deg)`;
    
    // Update indicators
    const likeIndicator = card.querySelector('.card-indicator.like');
    const rejectIndicator = card.querySelector('.card-indicator.reject');
    
    // Swipe RIGHT (positive X) = LIKE
    if (this.currentX > 30) {
      const opacity = Math.min(this.currentX / this.SWIPE_THRESHOLD, 1);
      likeIndicator.style.opacity = opacity;
      rejectIndicator.style.opacity = 0;
    }
    // Swipe LEFT (negative X) = REJECT
    else if (this.currentX < -30) {
      const opacity = Math.min(Math.abs(this.currentX) / this.SWIPE_THRESHOLD, 1);
      rejectIndicator.style.opacity = opacity;
      likeIndicator.style.opacity = 0;
    }
    else {
      likeIndicator.style.opacity = 0;
      rejectIndicator.style.opacity = 0;
    }
  },

  // Pointer up - complete or cancel swipe
  onPointerUp(e, card) {
    if (!this.isDragging) return;
    this.isDragging = false;
    
    card.classList.remove('swiping');
    card.releasePointerCapture(e.pointerId);
    
    // Check if swipe threshold met
    // Swipe RIGHT (positive X) = LIKE
    if (this.currentX > this.SWIPE_THRESHOLD) {
      this.completeSwipe(card, 'like');
    }
    // Swipe LEFT (negative X) = REJECT
    else if (this.currentX < -this.SWIPE_THRESHOLD) {
      this.completeSwipe(card, 'reject');
    }
    // Snap back
    else {
      this.resetCard(card);
    }
  },

  // Reset card to original position
  resetCard(card) {
    card.style.transition = 'transform 0.3s ease';
    card.style.transform = '';
    
    const likeIndicator = card.querySelector('.card-indicator.like');
    const rejectIndicator = card.querySelector('.card-indicator.reject');
    likeIndicator.style.opacity = 0;
    rejectIndicator.style.opacity = 0;
    
    setTimeout(() => {
      card.style.transition = '';
    }, 300);
  },

  // Complete swipe animation
  completeSwipe(card, action) {
    const siteId = card.dataset.siteId;
    const site = SITES.find(s => s.id === siteId);
    
    // Fly out animation
    if (action === 'like') {
      card.classList.add('fly-out-right');
      App.saveMatch(siteId);
      
      // Show match notification
      setTimeout(() => {
        this.showMatch(site);
      }, 150);
    } else {
      card.classList.add('fly-out-left');
      App.saveRejected(siteId);
    }
    
    // Move to next card
    setTimeout(() => {
      this.currentIndex++;
      App.saveCurrentIndex(this.currentIndex);
      this.renderCards();
      this.updateProgress();
    }, 300);
  },

  // Handle like button click
  handleLike() {
    if (this.cards.length === 0) return;
    const card = this.cards[0];
    
    // Animate indicator
    const likeIndicator = card.querySelector('.card-indicator.like');
    likeIndicator.style.opacity = 1;
    
    setTimeout(() => {
      this.completeSwipe(card, 'like');
    }, 100);
  },

  // Handle reject button click
  handleReject() {
    if (this.cards.length === 0) return;
    const card = this.cards[0];
    
    // Animate indicator
    const rejectIndicator = card.querySelector('.card-indicator.reject');
    rejectIndicator.style.opacity = 1;
    
    setTimeout(() => {
      this.completeSwipe(card, 'reject');
    }, 100);
  },

  // Show match notification
  showMatch(site) {
    if (!this.matchOverlay) return;
    
    const siteName = this.matchOverlay.querySelector('.match-site-name');
    if (siteName) {
      siteName.textContent = site.name;
    }
    
    this.matchOverlay.classList.add('active');
    
    // Auto-hide after 1.5 seconds
    setTimeout(() => {
      this.matchOverlay.classList.remove('active');
    }, 1500);
  },

  // Show end state
  showEndState() {
    if (!this.stackEl) return;
    
    const matchCount = App.getMatches().length;
    
    this.stackEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🌻</div>
        <h2 class="empty-state-title">${CONFIG.endTitle}</h2>
        <p class="empty-state-text">${CONFIG.endText}</p>
        <p class="empty-state-text">You matched with <strong>${matchCount}</strong> destination${matchCount !== 1 ? 's' : ''}!</p>
        <a href="results.html" class="btn btn-primary">${CONFIG.seeMatchesText}</a>
      </div>
    `;
    
    // Hide action buttons
    const actions = document.querySelector('.swipe-actions');
    if (actions) {
      actions.style.display = 'none';
    }
  },

  // Update progress indicator
  updateProgress() {
    const progressEl = document.querySelector('.swipe-progress');
    if (progressEl) {
      progressEl.textContent = `${this.currentIndex + 1} / ${SITES.length}`;
    }
  }
};

// Make Cards available globally
window.Cards = Cards;
