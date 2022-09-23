import View from './View';

class SearchView extends View {
  constructor() {
    super();
    this._parentEl = document.querySelector('input');
  }

  _addHandlerSearch(handler) {
    document.addEventListener('keydown', e => {
      if (e.key === 'Enter' && document.activeElement === this._parentEl && this._parentEl.value.length !== 0) {
        handler(this._parentEl.value);
        this._parentEl.value = '';
      }
    });
  }
}

export default new SearchView();
