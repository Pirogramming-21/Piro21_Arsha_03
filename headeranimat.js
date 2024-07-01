window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(61, 77, 106, 0.8)';
    } else {
        header.style.backgroundColor = 'rgba(55, 81, 126, 0.9)';
    }
});