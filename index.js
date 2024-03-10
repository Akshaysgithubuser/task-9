const image = document.getElementById('disappearingImage');

image.addEventListener('mouseover', () => {
    image.style.visibility = 'hidden';
});

image.addEventListener('mouseout', () => {
    image.style.visibility = 'visible';
});