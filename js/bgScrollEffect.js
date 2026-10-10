const overlay = document.getElementById('bg-overlay');
const MAX_OPACITY = 0.75;

function updateOverlay() {
    const progress = Math.min(window.scrollY / (window.innerHeight * 12), 1);
    overlay.style.opacity = progress * MAX_OPACITY;
}

window.addEventListener('scroll', updateOverlay, { passive: true });
window.addEventListener('resize', updateOverlay);
updateOverlay();