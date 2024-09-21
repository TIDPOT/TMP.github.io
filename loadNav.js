// loadNav.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://tidpot.github.io/TMP/nav.html')
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
