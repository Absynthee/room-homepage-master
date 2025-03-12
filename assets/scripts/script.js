const heroData = [
    {
        title: "Discover innovative ways to decorate",
        description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        image: "assets/images/desktop-image-hero-1.jpg"
    },
    {
        title: "We are available all across the globe",
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        image: "assets/images/desktop-image-hero-2.jpg"
    },
    {
        title: "Manufactured with the best materials",
        description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        image: "assets/images/desktop-image-hero-3.jpg"
    }
];

let currentIndex = 0;

function updateHeroContent() {
    const heroTitle = document.querySelector('.hero h1');
    const heroDescription = document.querySelector('.hero p');
    const heroImage = document.querySelector('.hero-img');

    heroTitle.innerHTML = heroData[currentIndex].title;
    heroDescription.innerHTML = heroData[currentIndex].description;
    heroImage.style.backgroundImage = `url(${heroData[currentIndex].image})`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % heroData.length;
    updateHeroContent();
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + heroData.length) % heroData.length;
    updateHeroContent();
}

document.addEventListener('DOMContentLoaded', () => {
    updateHeroContent();
    
    document.querySelector('.next-btn').addEventListener('click', nextSlide);
    document.querySelector('.prev-btn').addEventListener('click', previousSlide);
});