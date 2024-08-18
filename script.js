let currentImageIndex = 1;

function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
    showImage(currentImageIndex);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(n) {
    showImage(currentImageIndex += n);
}

function showImage(n) {
    const images = document.querySelectorAll('.gallery-image');
    const lightboxImage = document.getElementById('lightbox-image');

    if (n > images.length) {
        currentImageIndex = 1;
    }
    if (n < 1) {
        currentImageIndex = images.length;
    }

    const selectedImage = images[currentImageIndex - 1].src;
    lightboxImage.src = selectedImage;
}
