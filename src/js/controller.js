import mapView from './Views/mapView';
import searchView from './Views/searchView';
import * as model from './model';

const controlSearch = async ip => {
  try {
    await model.getApiData(ip);
    mapView.renderMarker(model.state.coords);
  } catch (err) {
    alert(err);
  }
};

(() => {
  searchView._addHandlerSearch(controlSearch);
  mapView.initMap();
})();
