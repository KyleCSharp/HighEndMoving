document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.Images-div img');
  let currentImageIndex = 0;
  let fullscreenMode = false;

  function openFullscreen() {
      const fullscreenDiv = document.createElement('div');
      fullscreenDiv.classList.add('fullscreen-image');
      const fullscreenImage = document.createElement('img');
      fullscreenImage.src = images[currentImageIndex].src;
      fullscreenDiv.appendChild(fullscreenImage);
      document.body.appendChild(fullscreenDiv);
    
      const prevArrow = document.createElement('div');
      prevArrow.classList.add('arrow', 'prev-arrow');
      prevArrow.innerHTML = '&#10094;';
      fullscreenDiv.appendChild(prevArrow);
    
      const nextArrow = document.createElement('div');
      nextArrow.classList.add('arrow', 'next-arrow');
      nextArrow.innerHTML = '&#10095;';
      fullscreenDiv.appendChild(nextArrow);
    
      const exitButton = document.createElement('div');
      exitButton.classList.add('exit-button');
      exitButton.innerHTML = 'X';
      fullscreenDiv.appendChild(exitButton);
    
      fullscreenImage.addEventListener('click', toggleFullscreen);
      prevArrow.addEventListener('click', showPreviousImage);
      nextArrow.addEventListener('click', showNextImage);
      exitButton.addEventListener('click', closeFullscreen);
      document.addEventListener('keydown', handleKeydown);
    
      fullscreenMode = true;
    }

  function closeFullscreen() {
    const fullscreenDiv = document.querySelector('.fullscreen-image');
    fullscreenDiv.remove();

    document.removeEventListener('keydown', handleKeydown);
    fullscreenMode = false;
  }

  function toggleFullscreen() {
    if (fullscreenMode) {
      closeFullscreen();
    } else {
      openFullscreen();
    }
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    if (fullscreenMode) {
      const fullscreenImage = document.querySelector('.fullscreen-image img');
      fullscreenImage.src = images[currentImageIndex].src;
    }
  }

  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    if (fullscreenMode) {
      const fullscreenImage = document.querySelector('.fullscreen-image img');
      fullscreenImage.src = images[currentImageIndex].src;
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeFullscreen();
    } else if (event.key === 'ArrowRight') {
      showNextImage();
    } else if (event.key === 'ArrowLeft') {
      showPreviousImage();
    }
  }

  images.forEach(function(image, index) {
    image.addEventListener('click', function() {
      currentImageIndex = index;
      toggleFullscreen();
    });
  });
});

document.addEventListener("click", (event) => {
  const contactButton = document.querySelector(".contact-button"); 
  const popupOverlay = document.getElementById("popupOverlay");
  const closeButton = document.getElementById("closeButton");

  if (event.target === contactButton) {
    popupOverlay.classList.add("show-popup"); 
  }

  if (event.target === closeButton) {
    popupOverlay.classList.remove("show-popup"); 
  }
});
function submitForm() {
  // Show the spinner
  document.getElementById('spinner').style.display = 'block';
  
  
  // Disable the submit button to prevent multiple clicks during form submission
  document.getElementById('submitBtn').disabled = true;
  
  // Submit the form programmatically
  document.getElementById('myForm').submit();
}
document.addEventListener("visibilitychange", function() {
if (document.visibilityState === "hidden") {
  // Change the title to the custom message
  document.title = "High End Moving, Get a quote today!";
} else {
  // When the user returns to the page, restore the original title
  document.title = "High End Moving - Your Trusted Local Moving Service in Vestavia Hills, AL";
}
});
const imageFilenames = [
  'Sibyl-Temple-1024x823.jpg',
  'f_21363373.jpg',
  '26354e46e6271f430523cb6d9c219fa1l-f4214477048r.jpg',
  'ZooExpand-5.jpg',
  'unnamed.jpg',
  'MossRock13.jpg',
  'maxresdefault.jpg'
]; // Add more filenames as needed

function createSlideshow() {
  const slideshowContainer = document.getElementById('slideshow');

  imageFilenames.forEach((filename, index) => {
    const img = document.createElement('img');
    img.src = `Public/Pics/Vestavia-Hills/${filename}`;
    img.alt = 'Vestavia Hills Image';
    slideshowContainer.appendChild(img);
  });

  let currentIndex = 0;
  const images = document.querySelectorAll('#slideshow img');

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function nextImage() {
    showImage(currentIndex);
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(nextImage, 4000);

  showImage(currentIndex);
}

window.onload = createSlideshow;






