const mapSection = document.getElementById('map-section')
      mapOpen = document.getElementById('map-open')
      mapIcon = document.getElementById('map-icon')
      mapClose = document.getElementById('map-close');

mapSection.addEventListener('click', () => {
  mapSection.classList.toggle('js-active');
});