// Overlay
const openOverlayButton = document.getElementById('openOverlayButton');
const closeOverlayButton = document.getElementById('closeOverlayButton');
const overlay = document.getElementById('navOverlay');

function openOverlay() {
    overlay.classList.add('open');
}

function closeOverlay() {
    overlay.classList.remove('open');
}

openOverlayButton.addEventListener('click', openOverlay);
closeOverlayButton.addEventListener('click', closeOverlay);

//
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', () => {
    themeToggleBtn.classList.toggle('active');
});
// Switch theme
themeToggleBtn.addEventListener('click', function () {
    document.getElementById('myBody').classList.toggle('dark');
});
