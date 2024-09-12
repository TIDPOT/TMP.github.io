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
    const main = document.querySelector('main');

    menuToggle.addEventListener('click', function() {
        sideNav.classList.toggle('open');
        main.classList.toggle('shifted');
    });

    // 點擊側邊欄外的區域時關閉側邊欄
    document.addEventListener('click', function(event) {
        if (!sideNav.contains(event.target) && event.target !== menuToggle) {
            sideNav.classList.remove('open');
            main.classList.remove('shifted');
        }
    });
}
