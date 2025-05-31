
// Basic Map Integration Placeholder
function initMap() {
  const center = { lat: 48.2082, lng: 16.3738 }; // Vienna
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: center,
  });
  // Dummy marker
  new google.maps.Marker({ position: center, map: map, title: "Beispiel-Anbieter" });
}
window.initMap = initMap;
