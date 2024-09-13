// loadNav.js
document.addEventListener('DOMContentLoaded', function() {
    // 獲取當前頁面的路徑
    var path = window.location.pathname;
    var navPath = '/nav.html'; // 假設 nav.html 在根目錄

    // 如果當前頁面不在根目錄，調整 navPath
    if (path.includes('/Returns/')) {
        navPath = '../nav.html';
    }

    fetch(navPath)
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            initializeDropdowns();
        })
        .catch(error => console.error('Error loading nav:', error));
});

function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (e.target.classList.contains('dropbtn')) {
                e.preventDefault();
                this.querySelector('.dropdown-content').classList.toggle('show');
            }
        });
    });

    window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}
