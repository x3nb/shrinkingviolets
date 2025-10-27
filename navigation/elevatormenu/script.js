const elevator = document.getElementById('elevator');
const portalButtons = document.getElementById('portalButtons');

// Open elevator when clicked
elevator.addEventListener('click', () => {
  elevator.classList.add('open');
  setTimeout(() => {
    portalButtons.classList.remove('hidden');
    portalButtons.style.opacity = 1; // fade in buttons
  }, 1000); // wait for doors to finish opening
});

// Smooth elevator ride when choosing a portal
function goTo(page) {
  document.body.classList.add('ride');
  setTimeout(() => {
    window.location.href = page;
  }, 1500); // match ride animation duration
}
