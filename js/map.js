var mymap = L.map("map", { center: [24.787309, 46.646046], zoom: 15 });
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?lang=ar&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/light-v10",
    tileSize: 512,
    language: "ar-AR",
    language: "ar",
    language: "AR",
    lang: "ar-AR",
    lang: "ar",
    lang: "AR",
    zoomOffset: -1,
  }
).addTo(mymap),
  L.marker([24.787309, 46.646046]).addTo(mymap);
