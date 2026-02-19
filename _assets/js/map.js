document.addEventListener("DOMContentLoaded", function () {

  if (document.getElementById("map")) {
    var map = L.map('map').setView([40, -95], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([34.05, -118.24])
      .addTo(map)
      .bindPopup("Example Project Location");
  }

});
