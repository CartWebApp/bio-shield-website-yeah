window.onload = function() {
    const heroImage = document.getElementById('hero');
    heroImage.style.opacity = 0;
    heroImage.style.transition = 'opacity 2s';
    heroImage.style.opacity = 1;
};