function showStep(step) {
  const steps = document.querySelectorAll('.step');
  steps.forEach(s => s.classList.remove('is-active'));
  document.getElementById('step' + step)?.classList.add('is-active');  

  const image = document.getElementById('approachImage');
  const imageContainer = document.getElementById('image_cont');

  if (!image || !imageContainer) {
      console.error('Image or Image Container not found.');
      return;
  }

   
  imageContainer.classList.add('fade-in');

 
  setTimeout(() => {
   
      if (step === 1) {
          image.src = 'assets/Images/Group 21999.png';
      } else if (step === 2) {
          image.src = 'assets/Images/article-slide2.png';
      } else if (step === 3) {
          image.src = 'assets/Images/article-slide3.png';
      }
 
      setTimeout(() => {
          imageContainer.classList.remove('fade-in');
      }, 100); 
  }, 300);  
}

document.addEventListener('DOMContentLoaded', function () {

  const sections = document.querySelectorAll('.cn-section');
  const yearsSpan = document.getElementById('years');
  const amountP = document.getElementById('amount');

  function getRandomSection() {
      const randomIndex = Math.floor(Math.random() * sections.length);
      return sections[randomIndex];
  }

  function handleScroll() {
      const randomSection = getRandomSection();
      const year = randomSection.getAttribute('data-year');
      const amount = randomSection.getAttribute('data-amount');

      yearsSpan.classList.add('fade-out');
      amountP.classList.add('fade-out');

      setTimeout(() => {
          yearsSpan.textContent = year;
          amountP.textContent = amount + ' Recovered';

          yearsSpan.classList.remove('fade-out');
          amountP.classList.remove('fade-out');
      }, 1000);  
  }

  window.addEventListener('mouseover', handleScroll);
  handleScroll();  

 
  const testimonialSlider = document.querySelector('#testimonial-slider');
  if (testimonialSlider) {
      new Splide('#testimonial-slider', {
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
      }).mount();
  }
 

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleCounters() {
      var counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
          if (isElementInViewport(counter)) {
              counter.classList.add('visible');
          }
      });
  }

  function handleAnimatedContent() {
      var animatedContent = document.querySelector('.animated-content');
      if (animatedContent && isElementInViewport(animatedContent)) {
          animatedContent.classList.add('visible');
      }
  }

  handleCounters();
  handleAnimatedContent();

 
  window.addEventListener("mouseover", function () {
      console.log("Scroll event for fixed menu triggered");
      const header = document.querySelector(".header");
      if (header) {
          if (window.scrollY > 0) {
              header.classList.add("scrolled");
          } else {
              header.classList.remove("scrolled");
          }
      }
  });

  
  window.addEventListener("mouseover", function () {
      console.log("Scroll event for parallax effect triggered");
      const banner = document.querySelector(".banner");
      if (banner) {
          const offset = window.scrollY;
          banner.style.backgroundPositionY = offset * 0.7 + "px";
      }
  });
  

 
  const circleAnimation = document.querySelector(".circle-animation");
  const circle = document.querySelector(".circle");
  const logoContainer = document.querySelector(".logo-container");
  const textArea = document.querySelector(".text-area");
  const textArea1 = document.querySelector(".text-area1");


  if (circleAnimation) {
      window.addEventListener("mouseover", function () {
          console.log("Scroll event for circle animation triggered");
          const rect = circleAnimation.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
              if (circle) {
                  circle.style.animationPlayState = "running";
              }
              setTimeout(() => {
                  if (logoContainer) {
                      logoContainer.style.opacity = 1;
                      logoContainer.style.transform = "scale(1)";
                  }
              }, 2000);
              setTimeout(() => {
                  if (textArea) {
                      textArea.style.opacity = 1;
                      textArea1.style.opacity = 1;


                  }
              }, 4000);
          }
      });
      
  }
 
  const movingImages = document.querySelectorAll(".moving-image");
  movingImages.forEach(img => {
      const speed = Math.random() * 5 + 2;
      img.style.animationDuration = `${speed}s`;
  });

  
  const splideElement = document.querySelector('#splide');
  if (splideElement) {
      new Splide('#splide', {
          type: 'loop',
          perPage: 3,
          autoplay: true,
      }).mount();
  }

  window.addEventListener('mouseover', function () {
      console.log("Scroll event for slides triggered");
      const slides = document.querySelectorAll('.slide');
      const scrollPosition = window.scrollY;

      slides.forEach((slide, index) => {
          const slidePosition = index * window.innerHeight;
          const nextSlidePosition = (index + 1) * window.innerHeight;

          if (scrollPosition >= slidePosition && scrollPosition < nextSlidePosition) {
              slide.classList.add('active');
          } else {
              slide.classList.remove('active');
          }
      });
  });
  
});

 