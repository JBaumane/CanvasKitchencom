
// Create modal element
const modal = document.createElement('div');
modal.className = 'modal';
const modalImg = document.createElement('img');
modalImg.className = 'modal-content';
modal.appendChild(modalImg);
document.body.appendChild(modal);

// Add click event to all images
const images = document.querySelectorAll('.bildes1 img, .bildes2 img');
images.forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
  });
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
