window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(40, 58, 90, 0.9)';
    } else {
        header.style.backgroundColor = 'rgba(55, 81, 126, 0.9)';
    }
});