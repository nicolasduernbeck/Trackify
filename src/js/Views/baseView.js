import View from './View';

class BaseView extends View {
  _loader;
  _layer;
  _map;
  constructor() {
    super();
    this._layer = document.querySelector('.messageLayer');
    this._loader = document.querySelector('.loader');
    this._map = document.querySelector('#map');
  }
  showError(message) {
    //Soon
  }

  toggleLoader() {
    this._layer.classList.toggle('hidden');
    this._loader.classList.toggle('hidden');
    this._map.classList.toggle('hidden');
  }
}

export default new BaseView();
