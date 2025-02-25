// Önskelista
const wishlistElement = document.getElementById('wishlist');

function createWishlistItem(wish) {
    const item = document.createElement('div');
    item.classList.add('wishlist-item');
    item.innerHTML = wish;
    wishlistElement.appendChild(item);

    item.addEventListener('click', function() {
        item.classList.toggle('wishlist-item-expanded');
    });
}

const wishes = [
    // Lägg till fler önskningar här
];

wishes.forEach(wish => {
    createWishlistItem(wish);
});

// countdown
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const today = new Date();
    const birthday = new Date('2024-12-03');

    const difference = birthday - today;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
        <span class="countdown-number">${days}</span> Dagar
        <span class="countdown-number">${hours}</span> timmar
        <span class="countdown-number">${minutes}</span> minuter tills Charles fyller år!
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

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
