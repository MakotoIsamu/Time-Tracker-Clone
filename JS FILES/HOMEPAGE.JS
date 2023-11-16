secondSectionCarasol();
sixthSectionTopCarasol();
sixthSectionBottomCarasol();
ttt();

function secondSectionCarasol(){
  let currentIndex = 0;

  let carasol = document.querySelector('.carasol');
  let totalSlides = document.querySelectorAll('.slides').length;
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    carasol.style.transform = `translateX(${-currentIndex * 100}%)`;
  }, 3000);
  
  let currentParagraphIndex = 0;
  
  function showParagraph(index) {
    const paragraphs = document.querySelectorAll('.content-container p');
    paragraphs.forEach((paragraph, i) => {
      if (i === index - 1) {
        paragraph.classList.remove('hidden');
      } else {
        paragraph.classList.add('hidden');
      }
    });
    currentParagraphIndex = index - 1;
  }
  
  // Automatic paragraph change every 3 seconds
  setInterval(() => {
    currentParagraphIndex = (currentParagraphIndex + 1) % 6 + 1;
    showParagraph(currentParagraphIndex);
  }, 3000);
  
}

function sixthSectionTopCarasol(){
  // JavaScript
  let totalSlides = document.querySelectorAll('.slidee').length;

  function showSlide(index) {
    let carousel = document.querySelector('.carouseel');
    let radioButtons = document.querySelectorAll('.sixth-section-radio-container input');

    index = (index + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(${-index * 110}%)`;
    currentIndex = index;

    // Update the active radio button
    radioButtons.forEach((radio, i) => {
      radio.checked = i === index;
    });
  }

  function handleRadioChange(index) {
    showSlide(index);
  }

  document.querySelectorAll('.sixth-section-radio-container input').forEach((radio, index) => {
    radio.addEventListener('change', () => handleRadioChange(index));
  });

  // Automatic sliding every 3 seconds
  setInterval(function () {
    let nextIndex = (currentIndex + 1) % totalSlides;
    handleRadioChange(nextIndex);
  }, 3000);
}

function sixthSectionBottomCarasol() {
  let totalSlides = document.querySelectorAll('.sliide').length;
  let currentIndex = 0;

  function showSlide(index) {
    let carousel = document.querySelector('.carasil');
    let radioButtons = document.querySelectorAll('.sixth-section-radio-bottom-container input');

    index = (index + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(${-index * 100}%)`;
    currentIndex = index;

    // Update the active radio button
    radioButtons.forEach((radio, i) => {
      radio.checked = i === index;
    });
  }

  function handleRadioChange(index) {
    showSlide(index);
  }

  document.querySelectorAll('.sixth-section-radio-bottom-container input').forEach((radio, index) => {
    radio.addEventListener('change', () => handleRadioChange(index));
  });

  // Automatic sliding every 3 seconds
  setInterval(function () {
    let nextIndex = (currentIndex + 1) % totalSlides;
    handleRadioChange(nextIndex);
  }, 5000);
}

function ttt(){
  let currentSlide = 0;

  function showSlide(index) {
    currentSlide = index;
    document.getElementById('carousel').style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % 2; // Adjust 2 to the total number of slides
    showSlide(currentSlide);
  }

  function startCarousel() {
    setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the interval as needed
  }

  startCarousel();
}

function toggleNav() {
  var nav = document.getElementById("myNavbar");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}