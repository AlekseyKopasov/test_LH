import {iosVhFix} from './utils/ios-vh-fix';
import './modules/custom-select';
import {initCitiesSelect} from './modules/init-cities-select'

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initCitiesSelect();
  });
});

// ---------------------------------