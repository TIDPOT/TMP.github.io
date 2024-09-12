// loadNav.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            setupNavigation();
        });
});

function setupNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const sideNav = document.getElementById('sideNav');
    const closeBtn = document.querySelector('.close-btn');

    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        sideNav.classList.toggle('open');
    });

    closeBtn.addEventListener('click', function() {
        sideNav.classList.remove('open');
    });

    document.addEventListener('click', function(e) {
        if (!sideNav.contains(e.target) && e.target !== menuToggle) {
            sideNav.classList.remove('open');
        }
    });
}
