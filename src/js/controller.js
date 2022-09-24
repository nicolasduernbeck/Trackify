import mapView from './Views/mapView';
import searchView from './Views/searchView';
import * as model from './model';
import baseView from './Views/baseView';

const controlSearch = async ip => {
  try {
    baseView.toggleLoader();
    await model.getApiData(ip);
    mapView.renderMarker(model.state.coords);
    baseView.toggleLoader();
  } catch (err) {
    alert(err);
    baseView.toggleLoader();
  }
};

(() => {
  searchView._addHandlerSearch(controlSearch);
  mapView.initMap();
})();
