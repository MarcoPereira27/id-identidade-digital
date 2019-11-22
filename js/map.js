// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: 40.632108, lng: -8.648242 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: uluru,
    disableDefaultUI: true,
    styles: [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#444444"
          }
        ]
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "on"
          },
          {
            saturation: "40"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100
          },
          {
            lightness: 45
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#033233"
          },
          {
            visibility: "on"
          }
        ]
      }
    ]
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
