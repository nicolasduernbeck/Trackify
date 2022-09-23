import View from './View';

class MapView extends View {
  _marker;
  constructor() {
    super();
  }

  initMap() {
    this._parentEl = L.map('map', { zoomControl: false }).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>_____',
    }).addTo(this._parentEl);
  }

  renderMarker(coords) {
    if (!this._marker) {
      this._marker = L.marker([coords.lat, coords.lng]).addTo(this._parentEl);
    } else {
      this._marker.setLatLng([coords.lat, coords.lng]);
    }
    this._parentEl.flyTo([coords.lat, coords.lng], 15);
  }
}

export default new MapView();
