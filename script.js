// countdown
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const today = new Date();
    const birthday = new Date('2023-12-24');

    const difference = birthday - today;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    countdownElement.innerHTML = `
        <span class="countdown-number">${days}</span> Dagar
        <span class="countdown-number">${hours}</span> timmar
        <span class="countdown-number">${minutes}</span> minuter till julafton!
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// image

function showImage(wish) {
    const imageContainer = document.getElementById('image-container');
    const wishlistImage = document.getElementById('wishlist-image');

    wishlistImage.src = `${wish}.png`;

    imageContainer.style.display = 'block';
}

function closeImage() {
    const imageContainer = document.getElementById('image-container');

    imageContainer.style.display = 'none';
}