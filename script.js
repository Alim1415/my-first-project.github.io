const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');

yesButton.addEventListener('click', function() {
    message.innerHTML = '❤️ Я так и знал, что ты любишь меня! ❤️';
    message.classList.remove('hidden');
});

noButton.addEventListener('mouseover', function() {
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});
