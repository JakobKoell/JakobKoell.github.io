// Navbar changes on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');

  // Fade-in sections
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) el.classList.add('visible');
  });
});

// Leaflet Interactive Map
var map = L.map('map').setView([37.7749, -122.4194], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
L.marker([34.0522, -118.2437]).addTo(map).bindPopup("Example Project: Los Angeles");
L.marker([40.7128, -74.0060]).addTo(map).bindPopup("Example Project: New York");
