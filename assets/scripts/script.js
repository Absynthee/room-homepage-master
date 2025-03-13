const heroData = [
    {
      title: "Discover innovative ways to decorate",
      description: "We provide unmatched quality, comfort, and style for property owners across the country.",
      desktopImage: "assets/images/desktop-image-hero-1.jpg",
      mobileImage: "assets/images/mobile-image-hero-1.jpg"
    },
    {
      title: "We are available all across the globe",
      description: "With stores all over the world, it's easy for you to find furniture for your home or place of business.",
      desktopImage: "assets/images/desktop-image-hero-2.jpg",
      mobileImage: "assets/images/mobile-image-hero-2.jpg"
    },
    {
      title: "Manufactured with the best materials",
      description: "Our modern furniture store provide a high level of quality. We've invested in advanced technology.",
      desktopImage: "assets/images/desktop-image-hero-3.jpg",
      mobileImage: "assets/images/mobile-image-hero-3.jpg"
    }
  ];
  
  class HeroSlider {
    constructor() {
      this.currentIndex = 0;
      this.autoTransitionInterval = null;
      this.elements = {
        title: document.querySelector('.hero h1'),
        description: document.querySelector('.hero p'),
        image: document.querySelector('.hero-img')
      };
  
      this.bindEvents();
      this.updateContent();
      this.startAutoTransition();
    }
  
    get currentSlide() {
      return heroData[this.currentIndex];
    }
  
    getResponsiveImage() {
      return window.innerWidth < 375 
        ? this.currentSlide.mobileImage 
        : this.currentSlide.desktopImage;
    }
  
    updateContent() {
      const { title, description, image } = this.elements;
      
      [title, description].forEach(el => el.classList.add('fade-out'));
  
      setTimeout(() => {
        title.textContent = this.currentSlide.title;
        description.textContent = this.currentSlide.description;
        image.style.backgroundImage = `url(${this.getResponsiveImage()})`;
  
        [title, description].forEach(el => el.classList.remove('fade-out'));
      }, 300);
    }
  
    navigate(direction) {
      this.stopAutoTransition();
      
      this.currentIndex = (this.currentIndex + direction + heroData.length) % heroData.length;
      this.updateContent();
      
      this.startAutoTransition();
    }
  
    startAutoTransition() {
      this.autoTransitionInterval = setInterval(() => this.navigate(1), 10000);
    }
  
    stopAutoTransition() {
      clearInterval(this.autoTransitionInterval);
    }
  
    bindEvents() {
      // Navigation buttons
      document.querySelector('.next-btn').addEventListener('click', () => this.navigate(1));
      document.querySelector('.prev-btn').addEventListener('click', () => this.navigate(-1));
  
      // Keyboard navigation
      document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') this.navigate(1);
        if (event.key === 'ArrowLeft') this.navigate(-1);
      });
  
      // Responsive image handling
      window.addEventListener('resize', () => this.updateContent());
    }
  
    static init() {
      return new HeroSlider();
    }
  }
  
  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', HeroSlider.init);