// Array of image URLs
const imageUrls = [
  'https://example.com/site.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
  // Add more image URLs here
];

// Function to create and append image elements to the gallery
function createGallery() {
  const galleryContainer = document.querySelector('.gallery');

  imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Gallery Image';
    galleryContainer.appendChild(img);
  });
}

// Call the createGallery function when the page loads
window.addEventListener('load', createGallery);
