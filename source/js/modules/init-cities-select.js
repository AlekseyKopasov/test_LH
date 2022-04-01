const select = document.querySelector('.custom-select[data-name="header-cities"]');

const initCitiesSelect = () => {
  if (!select) {
    return;
  }
  
  window.selectInit();
};

export {initCitiesSelect};