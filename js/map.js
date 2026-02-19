// Navbar changes on scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if(window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// Initialize Leaflet map
var map = L.map('map').setView([40, -95], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
L.marker([34.05, -118.24]).addTo(map).bindPopup("Example Project Location");
