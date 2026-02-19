document.addEventListener('DOMContentLoaded', () => {

  // Navbar dynamic background
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    // Fade-in sections
    document.querySelectorAll('.fade-in').forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  });

  // Trigger fade-in for elements visible on page load
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight) {
      el.classList.add('visible');
    }
  });

  // Initialize Leaflet map
  const map = L.map('map').setView([37.7749, -122.4194], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([34.0522, -118.2437]).addTo(map).bindPopup("Example Project: Los Angeles");
  L.marker([40.7128, -74.0060]).addTo(map).bindPopup("Example Project: New York");

});
