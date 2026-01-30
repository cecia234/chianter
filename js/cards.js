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
        </div>
        <div class="card-gradient"></div>
        <div class="card-location">
          <span>📍</span>
          <span>${site.location}</span>
        </div>
        <div class="card-indicator like">${CONFIG.likeText}</div>
        <div class="card-indicator reject">${CONFIG.rejectText}</div>
      </div>
      <div class="card-content" data-site-id="${site.id}">
        <h2 class="card-name">${site.name}</h2>
        <p class="card-description">${site.description}</p>
        <button class="card-expand-desc-btn" aria-label="Espandi descrizione">ℹ️</button>
      </div>
    `;
    
    // Attach carousel tap events
    this.attachCarouselEvents(card);
    
    // Attach description expand event
    this.attachDescriptionEvents(card);
    
    return card;
  },

  // Attach description expand event
  attachDescriptionEvents(card) {
    const expandBtn = card.querySelector('.card-expand-desc-btn');
    const siteId = card.dataset.siteId;
    
    expandBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openDescriptionModal(siteId);
    });
  },

  // Attach carousel tap navigation
  attachCarouselEvents(card) {
    const carousel = card.querySelector('.card-carousel');
    
    // Track carousel swipe separately
    let carouselStartX = 0;
    let carouselStartY = 0;
    let isCarouselSwiping = false;
    
    carousel.addEventListener('pointerdown', (e) => {
      carouselStartX = e.clientX;
      carouselStartY = e.clientY;
      isCarouselSwiping = true;
      e.stopPropagation(); // Prevent card drag
    });
    
    carousel.addEventListener('pointermove', (e) => {
      if (!isCarouselSwiping) return;
      e.stopPropagation(); // Prevent card drag
    });
    
    carousel.addEventListener('pointerup', (e) => {
      if (!isCarouselSwiping) return;
      isCarouselSwiping = false;
      
      const deltaX = e.clientX - carouselStartX;
      const deltaY = e.clientY - carouselStartY;
      
      // Only navigate if horizontal swipe is dominant and significant
      if (Math.abs(deltaX) > 30 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          this.navigateCarousel(card, 'next');
        } else {
          this.navigateCarousel(card, 'prev');
        }
      } else if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
        // It's a tap - open lightbox
        const siteId = card.dataset.siteId;
        const currentImage = parseInt(card.dataset.currentImage);
        this.openLightbox(siteId, currentImage);
      }
      
      e.stopPropagation();
    });
    
    carousel.addEventListener('pointercancel', () => {
      isCarouselSwiping = false;
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
  },

  // Lightbox state
  lightbox: null,
  lightboxCurrentIndex: 0,
  lightboxImages: [],

  // Open lightbox
  openLightbox(siteId, startIndex = 0) {
    const site = SITES.find(s => s.id === siteId);
    if (!site) return;

    this.lightbox = document.getElementById('lightbox');
    if (!this.lightbox) return;

    this.lightboxImages = site.images || [{ src: site.imageSrc, alt: site.imageAlt }];
    this.lightboxCurrentIndex = startIndex;

    // Build slides
    const track = this.lightbox.querySelector('.lightbox-carousel-track');
    const dotsContainer = this.lightbox.querySelector('.lightbox-carousel-dots');

    track.innerHTML = this.lightboxImages.map((img, i) => `
      <div class="lightbox-carousel-slide">
        <img src="${img.src}" alt="${img.alt}">
      </div>
    `).join('');

    dotsContainer.innerHTML = this.lightboxImages.map((_, i) => `
      <div class="lightbox-carousel-dot${i === startIndex ? ' active' : ''}"></div>
    `).join('');

    // Set initial position
    track.style.transform = `translateX(-${startIndex * 100}%)`;

    // Show lightbox
    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Attach events
    this.attachLightboxEvents();
  },

  // Close lightbox
  closeLightbox() {
    if (!this.lightbox) return;
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
  },

  // Navigate lightbox
  navigateLightbox(direction) {
    const total = this.lightboxImages.length;
    
    if (direction === 'next') {
      this.lightboxCurrentIndex = (this.lightboxCurrentIndex + 1) % total;
    } else {
      this.lightboxCurrentIndex = (this.lightboxCurrentIndex - 1 + total) % total;
    }

    const track = this.lightbox.querySelector('.lightbox-carousel-track');
    const dots = this.lightbox.querySelectorAll('.lightbox-carousel-dot');

    track.style.transform = `translateX(-${this.lightboxCurrentIndex * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === this.lightboxCurrentIndex);
    });
  },

  // Attach lightbox events
  attachLightboxEvents() {
    const closeBtn = this.lightbox.querySelector('.lightbox-close');
    const prevBtn = this.lightbox.querySelector('.lightbox-prev');
    const nextBtn = this.lightbox.querySelector('.lightbox-next');
    const carousel = this.lightbox.querySelector('.lightbox-carousel');

    // Remove old listeners by cloning
    const newCloseBtn = closeBtn.cloneNode(true);
    const newPrevBtn = prevBtn.cloneNode(true);
    const newNextBtn = nextBtn.cloneNode(true);
    closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);

    // Close button
    newCloseBtn.addEventListener('click', () => this.closeLightbox());

    // Nav buttons
    newPrevBtn.addEventListener('click', () => this.navigateLightbox('prev'));
    newNextBtn.addEventListener('click', () => this.navigateLightbox('next'));

    // Click outside to close
    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) {
        this.closeLightbox();
      }
    });

    // Swipe support
    let startX = 0;
    let isSwiping = false;

    carousel.addEventListener('pointerdown', (e) => {
      startX = e.clientX;
      isSwiping = true;
    });

    carousel.addEventListener('pointerup', (e) => {
      if (!isSwiping) return;
      isSwiping = false;

      const deltaX = e.clientX - startX;
      if (Math.abs(deltaX) > 50) {
        if (deltaX < 0) {
          this.navigateLightbox('next');
        } else {
          this.navigateLightbox('prev');
        }
      }
    });

    // Keyboard navigation
    const keyHandler = (e) => {
      if (!this.lightbox.classList.contains('active')) return;
      
      if (e.key === 'Escape') {
        this.closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        this.navigateLightbox('prev');
      } else if (e.key === 'ArrowRight') {
        this.navigateLightbox('next');
      }
    };

    document.removeEventListener('keydown', keyHandler);
    document.addEventListener('keydown', keyHandler);
  },

  // Description modal
  descriptionModal: null,

  // Open description modal
  openDescriptionModal(siteId) {
    const site = SITES.find(s => s.id === siteId);
    if (!site) return;

    this.descriptionModal = document.getElementById('description-modal');
    if (!this.descriptionModal) return;

    // Fill content
    this.descriptionModal.querySelector('.description-modal-title').textContent = site.name;
    this.descriptionModal.querySelector('.description-modal-location').textContent = '📍 ' + site.location;
    this.descriptionModal.querySelector('.description-modal-text').textContent = site.description;

    // Show modal
    this.descriptionModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Attach close events
    this.attachDescriptionModalEvents();
  },

  // Close description modal
  closeDescriptionModal() {
    if (!this.descriptionModal) return;
    this.descriptionModal.classList.remove('active');
    document.body.style.overflow = '';
  },

  // Attach description modal events
  attachDescriptionModalEvents() {
    const closeBtn = this.descriptionModal.querySelector('.description-modal-close');

    // Remove old listener by cloning
    const newCloseBtn = closeBtn.cloneNode(true);
    closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);

    // Close button
    newCloseBtn.addEventListener('click', () => this.closeDescriptionModal());

    // Click outside to close
    this.descriptionModal.addEventListener('click', (e) => {
      if (e.target === this.descriptionModal) {
        this.closeDescriptionModal();
      }
    });

    // Escape key to close
    const keyHandler = (e) => {
      if (!this.descriptionModal.classList.contains('active')) return;
      if (e.key === 'Escape') {
        this.closeDescriptionModal();
      }
    };

    document.addEventListener('keydown', keyHandler);
  }
};

// Make Cards available globally
window.Cards = Cards;
